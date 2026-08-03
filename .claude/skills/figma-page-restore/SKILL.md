---
name: figma-page-restore
description: 从 Figma 稿还原 pflo 的项目详情页(project 2/3/4 或任何新增 project 页)。当需要"还原设计稿""搭 project N 页面""按 Figma 做页面""对比设计稿自检"时使用。内含分屏读稿流程、坐标舞台技术、复用基元、15 类已知坑与三个必跑验证脚本 —— 全部来自 project 1 的实战与返工。
---

# 从 Figma 还原项目页面

这份 skill 是 project 1(机票列表页改版,19 个子屏)还原全过程 + 多轮走查返工的沉淀。**开工前完整读一遍,能省掉至少 12 类已经踩过的坑。**

配套阅读:`docs/figma-restoration.md`(背景与画板对照)、`CLAUDE.md`(硬规则)。

---

## 0. 开工前:定位设计稿

**两个 Figma 文件,别混:**

| 用途 | 文件 | fileKey |
|---|---|---|
| 页面稿 | `portfolio-2025-coding` | `04uhBuDFENw94d8ERcsCs2` |
| 设计规范 | `SSPFO Design System` | `PhnhrgTFhQMM49sWWMuXaU` |

⚠️ **节点 id 会随作者编辑整体漂移**(已见 `1:161` → `1:169` → `4:158` 三轮)。**永远不要把 id 当长期引用**,每次按画板名重新定位:

```bash
# get_metadata 结果过大时会落盘,用 python 按名字找当前 id
grep -o 'id="[^"]*" name="project 2"' <dump>
```

**画板尺寸是稳定的**,可用作校验锚点:project 1 `1440×23513` / 2 `1440×23397` / 3 `1440×27854` / 4 `1440×14588`。

**必须忽略**:`cover&resume&content`(仅供文件导出,不是站点页面)。

---

## 1. 分屏读稿

整个 project 画板 2 万+ 像素高,**一次读必然超限**。

```
get_metadata(project 画板)      →  落盘,python 解析出「区块 → 子屏」清单(id / y / w / h)
   ↓  逐个子屏
get_design_context(子屏)        →  参考代码 + 样式;立刻 curl 下载资产
```

**先建子屏台账**(这是后面验证的基准),形如:

| 区块 | 子屏 | y | 高 |
|---|---|---|---|
| 目标1 | Desktop-43 | 668 | 1968 |

> 纯文字子屏(如章节开屏)的文案可直接从 metadata dump 里取 —— text 节点的 `name` 就是它的文字内容,**省一次 `get_design_context`**。

**资产 URL 7 天过期** —— 读完一屏马上下载到 `src/assets/projects/pN/`,别攒着。

---

## 2. CSS 画 vs 导出图

| 情况 | 做法 | 理由 |
|---|---|---|
| 线框示意、色块、优先级图、流程图 | **CSS 画** | 跟随 `--accent-*` 自动换色、缩放不糊、零体积 |
| 真实产品截图 | 导出 PNG | 本来就是位图 |
| 几十个碎标注叠在截图上 | **整屏导出一次 + CSS 切片** | 逐个还原不现实;整屏 1x 往往只有 ~280KB(深色底压缩率高) |
| 多层蒙版/裁切拼贴 | `get_screenshot` + `contentsOnly` 渲染该节点 | 手工复刻蒙版不划算 |
| 纯装饰标题图形 | 导出 SVG | 矢量更清晰 |

**原则:能跟主题色联动的用 CSS,纯位图内容才导图。文字永远保持真实 DOM 文字。**

⚠️ **导出图的实际像素可能与画板差 1~3px**(Figma 渲染取整)。若该图**由自身比例决定布局高度**,这几 px 会把后续内容整体顶偏。做法:给容器显式 `aspect-ratio: <画板宽> / <画板高>` + `overflow: hidden`。

---

## 3. 核心技术:坐标舞台

设计稿是绝对定位的。**不要用 flex/grid 硬凑**,用「舞台 + 百分比坐标」直译:

```jsx
const pct = (v, base) => `${((v / base) * 100).toFixed(3)}%`

// W/H = 该舞台在设计稿中的尺寸;x/y = 设计稿绝对坐标(减去舞台原点)
const at = (x, y, w) => ({
  left: pct(x, W), top: pct(y, H),
  ...(w != null && { width: pct(w, W) }),
})

<div className="stage" style={{ aspectRatio: `${W} / ${H}` }}>
  <span style={at(24, 160)}>…</span>
</div>
```

**三条铁律:**

1. **用 `aspect-ratio`,不要用固定 `height: Npx`。** 页面按视口宽缩放(1440 视口带滚动条时约 0.9896),固定 px 不跟着缩,会与百分比定位的兄弟元素错位。
2. **坐标保持设计稿绝对值**,在 `at()` 里统一减去舞台原点 —— 不要手算偏移散落各处。
3. **舞台高度只覆盖它真正承载的区域**。若区块标题在舞台之外,舞台高度必须是 `画板高 − 标题块高`,否则标题被重复计入。

---

## 4. 复用基元

全部在 **`src/components/figma/`**,统一从 `index.js` 导入:

```jsx
import { makeAt, SectionHeading, ObjectiveOpener, WfStage, PriStage,
         Strip, IntSlice, AdvPill, FlowNode, FlowArrow, Cursor }
  from '../../components/figma/index.js'
```

| 基元 | 用途 | 需传项目资产 |
|---|---|---|
| `SectionHeading` | 区块大标题(描边空心字 + 上下分割线) | — |
| `ObjectiveOpener` | 章节开屏(**固定 532px 主色带**),传参复用 | — |
| `WfStage` | 线框示意图(百分比方块 + 标签) | — |
| `PriStage` | 优先级色块图(主/辅色,20%/50% 透明度,虚线轴) | 可选 `img` 项 |
| `Strip` | 条带:整图或同源裁切,支持透明度/圆角 | `src` |
| `AdvPill` | 药丸形放大镜面板 | `src` 或 `imgs` |
| `IntSlice` | 整屏导出图的 CSS 切片 | `src`(+ `imgW`) |
| `FlowNode` / `FlowArrow` | 用户↔平台流程图 | — |
| `Cursor` | 手型光标叠加 | `src` |
| `makeAt(W, H)` / `pct` | 舞台坐标换算 | — |

> 需要项目资产的基元,建议在页面文件顶部包一层薄封装绑定资产,调用点就不必重复传:
> ```jsx
> const Cursor = (props) => <FigmaCursor src={cmpCursor} {...props} />
> ```

**样式命名约定**(`src/styles/project.css`):

- `.proj-*` = **跨项目共享**,基元只输出这类类名。包括 `proj-heading` / `proj-kicker` / `proj-figure` / `proj-divider` / `proj-stagelabel` / `proj-strathead` / `proj-objopen` / `proj-stats` / `proj-hero` / `proj-crop` / `proj-pri-*` / `proj-spot-panel` / `proj-flow*` / `proj-cursor`
- `.pN-*` = 该项目专属版式,只出现在对应页面文件里

改 `.proj-*` 会影响所有项目页 —— 属**模式级改动**,按第 8 节的节奏立即修、并回归其他页。

**放大镜模式**(`AdvPill` + `.proj-spot-panel`)是最常用手法:底层放暗化的完整截图,上面盖描边圆角面板,面板内用同源图全亮显示局部 —— 全 CSS,不需额外资产。

---

## 5. 已知坑(15 类,全部踩过)

### 布局 / 节奏

**① 画板高度包含尾部留白。** 比对的是「区块渲染高度 vs 画板高度」,不是最后一个可见元素的位置。忘了底部留白 → 下一区块标题往上顶。

**② 子屏尾部通用节奏:内容 → 104px → 分割线 → 40px → 下一子屏。** 漏掉最后那 40px 是反复犯的错(D-43/D-49/D-50 都栽过)。

**③ 相邻画板之间不要凭感觉加间距** —— 先查兄弟画板的 y 值,通常紧贴。

**④ 别让内容撑高本该固定的容器。** 稿中若有固定尺寸背景矩形(如 `Rectangle 187` 1440×532),该容器就是固定高。做成内容撑高后,条目少的那屏会塌(目标3 只有 2 条策略,塌了 173px)。

**⑤ 列表末项不要留下内边距。** 稿中分割线通常只在条目**上方**,末条文字之后直接是帧留白。

### CSS 特异性 / 层叠(踩过 3 次)

**⑥ 宽选择器会压过修饰类。** `.parent > img { width: 100% }`(0,1,1)压过 `.overlay { width: 3.2% }`(0,1,0),把叠加元素撑满。**约定:底图/基础元素用显式类名**(如 `.p1-ctn-base`)。

**⑦ 全局重置用 `:where()` 降特异性**:`:where(.page--project) p { margin: 0 }`,否则压掉组件自己的 margin。

**⑦b `display: contents` 挡住 `> *`。** 舞台靠 `.stage > * { position: absolute }` 定位,而 `display: contents` 的包装器**本身**才是那个直接子元素 —— 真正的内容降了一级,选择器够不着,整组塌回舞台顶部(D-73 的页面卡曾因此从 y=1710 掉到 566)。循环里要包多个元素,用带 key 的 `<Fragment>`,不要用 `<div style={{display:'contents'}}>`。

**⑦c 舞台只重置了 `margin`,没重置 `padding`。** `<ul>/<ol>` 自带 UA 的 `padding-left: 40px`,加上项目**没有全局 `border-box`**,`width: 212px` 实际占 252px → 整页横向溢出。舞台里放列表,自己写 `padding: 0; list-style: none`。

**⑧ 覆盖层要用 `::after`,不能塌进父元素。** Figma 导出若以 `<div className="absolute inset-0 pointer-events-none shadow-[inset_…]" />` 结尾,说明该效果画在**内容之上**。写成父元素自己的 `box-shadow: inset` 是错的 —— CSS 把父元素的背景/边框/内阴影画在**子元素下面**,任何不透明子元素都会盖掉它。**照搬 Figma 的样式值不够,还要照搬子元素顺序。**

### 尺寸 / 图形

**⑨ 无固有尺寸的 SVG 必须显式写 `aspect-ratio`**,否则宽度被意外覆盖时高度会爆炸(出现过一只占满整屏的手型光标)。

**⑩ 带 border 的面板显式加 `box-sizing: border-box`** —— 项目无全局 border-box 重置,Figma 的宽高包含描边。

**⑪ 可变字体空心字的内部乱线**:`-webkit-text-stroke` 会把字形内部自交轮廓也描出来。修法:填充设为页面底色 + `paint-order: stroke fill` + 2px 描边(可见 1px)。

**⑪b 空心字的描边色在 design context 里读不到。** Figma 中它的 fill 是 `transparent`,`get_design_context` 只会告诉你 `text-[transparent]` —— **必须从截图逐像素取样**(见 6.5)。曾据此把区块大标题的描边和它上下两条分割线当成同一个色,错了整整两个项目页:描边是 `#ddd`(`--dark-text-body-1`),分割线是 `#888a8e`(`--dark-border-dark`)。

**⑫ Figma SVG 外侧描边的发丝接缝**:填充与描边之间漏出背景。修法:给**填充路径**(带 `--fill-0` 且无 `mask=`)加同色 `stroke` + `stroke-width="1"`。

### 排版

- **字间距的单位是百分比**,而且规范里**会来回改**(见过「只有 2 处非零」→「7 处非零」的往返)。**不要背数值,以 `src/index.css` 的 `--tracking-*` 为准**,那里没列的档位一律 0。`letterSpacing: 8` 意为 8%,乘字号才是 px。
- **CSS 会在最后一个字符后面也加字间距,Figma 不会。** 负字间距的大号英文(如 -3.6px 的 180px 数字)实测宽度会比稿中小 3.6px —— 左对齐时无视觉影响,**不要为此去调字间距**;但若该元素靠右对齐或居中,就得把这点算进去。
- **大小写看源文字**:区块标题源文字本身就是大写;英文副标题(`Scalable Structure`)是 Title Case,**不转大写**。核对法:metadata dump 里 text 节点的 `name` 就是文字内容。
- **有宽度约束的说明文字不要加 `nowrap`**(稿中是换行的)。判据:稿中该 text 节点 `height ÷ 行高 > 1`。
- 截图上的白色遮挡块(`.proj-figure__patch`)是**故意遮敏感信息的,不要删**。

---

## 6. 三个必跑验证脚本

**不靠肉眼估。** 在浏览器里跑,和设计稿坐标逐项对。

### 6.1 通用换算

```js
// 基准取「页面容器实测宽 / 1440」—— 不要用 scrollWidth:
// macOS 悬浮滚动条下它时而 1440 时而 1425,基准一漂,全部误差跟着错判。
const scale = document.querySelector('main.page--project').getBoundingClientRect().width / 1440;
const D = px => Math.round((px / scale) * 10) / 10;          // 渲染 px → 设计 px
```

> 量之前先 `await document.fonts.ready` 并等一帧 —— 字体未就绪时行高不准,曾据此读到头图 692(实为 812)。

### 6.2 竖向节奏体检(收尾必跑)

⚠️ **不要用「区块高度」直接比** —— 会被塌陷的上下外边距双向误导(曾据此误判开屏差 20px,实则正确)。**必须用相邻真实边界之差**,并补回以标题开头的区块塌陷出去的 24px:

```js
(() => {
  const main = document.querySelector('main.page--project');
  const scale = main.getBoundingClientRect().width / 1440;
  const D = px => Math.round((px / scale) * 10) / 10;
  const designH = [/* 各子屏画板高,按顺序 */];
  const secs = [...document.querySelectorAll('main.page--project section')];
  const starts = secs.map(s => {
    const lead = s.querySelector(':scope > .proj-heading') ? 24 : 0;  // 塌陷出去的上边距
    return s.getBoundingClientRect().top + scrollY - lead * scale;
  });
  starts.push(main.getBoundingClientRect().bottom + scrollY);
  return secs.map((s, i) => ({
    i, 跨度: D(starts[i + 1] - starts[i]), 设计: designH[i],
    误差: Math.round((D(starts[i + 1] - starts[i]) - designH[i]) * 10) / 10,
  })).filter(r => Math.abs(r.误差) > 6);
})()
```

**达标线:单屏误差 ≤10px。** project 1 最终 15/19 屏 ≤10px、最大 14px。

### 6.3 单屏逐元素对位

```js
const sec = document.querySelector('[data-node-id="…"]');
const top = sec.getBoundingClientRect().top + scrollY;
const rel = el => { const r = el.getBoundingClientRect();
  return [D(r.top + scrollY - top), D(r.height)]; };   // [y, h] 设计坐标
```
逐个和稿中 y/h 比,**±1px 是极限精度**(视口缩放取整)。

### 6.4 回归检查

```js
({
  区块数: document.querySelectorAll('main section').length,
  横向溢出: document.documentElement.scrollWidth,      // 应 == 视口宽(或减滚动条)
  图片破损: [...document.querySelectorAll('main img')]
              .filter(i => !(i.complete && i.naturalWidth > 0)).length,   // 应为 0
})
```

> 预览截图工具在页面滚动后可能截出空白(也可能整段会话都只返回空白帧)。绕法:滚动归零,临时给 `#root` 加 `translateY(-Npx)`;要看细节用 `transform: translate(...) scale(3)`,看完还原。**截图挂了不等于没法验证** —— 上面的 DOM 实测才是主手段。
>
> ⚠️ 预览器导航后视口可能塌成 0 宽,`scale` 会算成 0,量出来全是 `Infinity/NaN`。**每次 navigate 之后先 `resize_window` 到 1440×900 再量。**

### 6.5 从设计稿截图取色(design context 读不到颜色时)

空心字描边、渐变分割线这类颜色在 `get_design_context` 里是 `transparent` 或一张 `<img>`,只能取样。**Figma 给每个 Line 节点单独生成资产 hash,hash 不同不代表颜色不同** —— 别靠 hash 猜,直接量:

```bash
# get_screenshot(contentsOnly, maxDimension=画板长边) → curl 下来
# maxDimension 卡的是**长边**:2250 高的画板要传 2250 才能拿到原生 1440 宽
python3 -c "…zlib 解 PNG…"   # 对目标区域做颜色直方图,出现最多的非背景色即是
```

判据:纯色像素占多数的那个值就是真值,和它与背景的 50% 混合值(反锯齿)会一起出现 —— 例如 `#dddddd` 旁边必然伴随 `(123,123,123)`(221 与 26 的中点)。

---

## 7. 完成标准

一页做完,以下全部满足才算完成:

- [ ] 每个子屏跨度与画板高误差 ≤10px
- [ ] 无横向溢出、图片 0 破损、控制台 0 报错
- [ ] `npm run lint` 与 `npm run build` 通过
- [ ] 字间距只用 `--tracking-*` 里有的档位、大小写与源文字一致
- [ ] 新页面已登记进 `src/data/projects.js` 和 `Project.jsx` 的 `pages` 映射表
- [ ] 已提交推送(推 `main` 自动部署)

---

## 8. 走查协作(与作者的约定)

- **模式级问题**(共享 `.proj-*` 样式)→ 作者随时报,**立即修**,因为会复制到每个项目页。
- **页级像素细节** → 按页批量:一页做完 → 作者走查 → 报清单 → 逐项修并对照 Figma 验证 → 再进下一页。**不要攒到所有页做完。**
- 作者用**标注截图 + 一句话**报问题。**不要求作者量像素或取色值** —— 精确数值自己去 Figma 取。
- **每完成一页,主动请作者走查再开下一页。**

---

## 9. 维护

这份 skill 随每轮返工更新。新踩的坑 → 补进第 5 节;新的验证手段 → 补进第 6 节;新沉淀的基元 → 补进第 4 节。
