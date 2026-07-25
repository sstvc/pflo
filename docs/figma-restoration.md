# Figma 还原工作流

这份文档记录「把 Figma 稿还原成页面」的完整方法,以及踩过的坑。**开始还原任何新页面前先读这里**,能省掉重复踩坑。

## 设计稿

| 项 | 值 |
|---|---|
| 文件 | `SSPFO Design System`(曾名 `pflo-for-cc`) |
| fileKey | `PhnhrgTFhQMM49sWWMuXaU` |
| 主设计页 | `Page 1` = `0:1`,含 project 1–5 |
| 变量文档 | `Styles` frame = `194:2` |

**画板对照(已与作者确认):**

| 内容 | 节点 | 尺寸 |
|---|---|---|
| project 1 | `1:161` | 1440 × 23513 |
| project 2 | `1:1128` | 1440 × 23397 |
| project 3 | `167:501` | 1440 × 27854 |
| project 4 | `167:998` | 1440 × 14588 |

**必须忽略的画板:**
- 两个未命名 Frame(`1:2034` / `1:2531`)—— project 3/4 的旧草稿
- `105` —— 导出用封面,将被正式首页替换
- `cover&resume&content` —— 仅用于文件导出,**不是站点页面**

## 流程

1. **分段读稿**。整个 project 画板 2 万多像素高,一次读会超上下文限额。先用 `get_metadata` 拿子画板清单(y / 高度 / 名字),再逐个子屏 `get_design_context`。
2. **立刻下载资产**。Figma 返回的资产 URL **7 天后过期**,读完一屏马上 curl 下来存到 `src/assets/projects/pN/`,别攒着。
3. **判断「画 or 导图」**(见下方决策)。
4. **写组件 + 样式**,坐标按设计稿百分比换算。
5. **验证**(见「验证方法」),然后 lint + build + 提交。

> 小技巧:开屏这类纯文字子屏,文案可以直接从已缓存的 `get_metadata` 输出里提取,不必再花一次 `get_design_context`。

### 什么时候用 CSS 画,什么时候导出图片

| 情况 | 做法 | 理由 |
|---|---|---|
| 线框示意、色块、优先级图、流程图 | **CSS 画** | 跟随 `--accent-*` 自动换色、缩放不糊、体积为零 |
| 真实产品截图 | 导出 PNG | 本来就是位图 |
| 几十个碎标注叠在一张截图上 | **整屏导出一次 + CSS 切片** | 逐个还原不现实;整屏 1x 导出往往只有 ~280KB(深色底压缩率高) |
| 多层蒙版/裁切拼贴 | 用 `get_screenshot` + `contentsOnly` 渲染该节点 | 手工复刻蒙版不划算 |
| 纯装饰性标题图形 | 导出 SVG | 矢量更清晰 |

原则:**能跟主题色联动的用 CSS,纯位图内容才导图。** 文字永远保持真实 DOM 文字(可选中、可搜索、字体一致)。

## 复用图形基元

⚠️ **当前这些函数都定义在 `src/pages/projects/Project1.jsx` 内部(1671 行)。project 2 开工前应先抽到共享模块(如 `src/components/figma/`),否则会复制粘贴。**

| 基元 | 用途 |
|---|---|
| `SectionHeading` | 区块大标题(描边空心字 + 上下分割线) |
| `ObjectiveOpener` | 章节开屏(主色横幅:目标 + 策略清单),传参复用 |
| `WfStage` | 线框示意图舞台(百分比定位的方块 + 标签) |
| `PriStage` | 优先级色块图(强调色/辅助色,20%/50% 透明度,虚线轴) |
| `Strip` | 条带:整图或同源裁切,支持透明度/圆角 |
| `AdvPill` | 药丸形放大镜面板(内含同源条带全亮显示) |
| `IntSlice` | 整屏导出图的 CSS 切片 |
| `FlowNode` / `FlowArrow` | 用户↔平台流程图节点与箭头 |
| `Cursor` | 手型光标叠加 |

共享版式在 `src/styles/project.css`,类名前缀 `.proj-*`(跨项目通用)和 `.p1-*`(project 1 专属)。

**放大镜模式**(`.p1-spot-panel`)是本项目最常用的手法:底层放暗化的完整截图,上面盖一个描边圆角面板,面板内用同源图全亮显示局部 —— 全 CSS,无需额外资产。

## 验证方法

**不要靠肉眼估。** 用 DOM 实测对比设计稿坐标:

```js
const scale = document.documentElement.scrollWidth / 1440;  // 含滚动条,1440 视口下约 0.9896
const D = (px) => Math.round(px / scale);                   // 换算回设计坐标
```

逐项比对元素的 `getBoundingClientRect()` 与稿中坐标。同时检查:
- 图片是否全部加载(`img.complete && img.naturalWidth > 0`)
- 有无横向溢出(`documentElement.scrollWidth` 应等于视口宽)
- 控制台报错

> 预览截图工具在页面滚动后可能截出空白/缩略图。绕法:滚动归零,临时给 `#root` 加 `translateY(-Npx)` 定位到目标区块,截完还原。要放大看细节,用 `transform: translate(...) scale(3)`。

## 竖向节奏检查(一次抓出 3 个 bug)

**Figma 子画板声明的高度包含尾部留白。** 所以要比对的是「渲染出的区块高度 vs 画板高度」,不是「最后一个可见元素的位置」。两个反复犯的错:

1. **忘了画板底部留白** → 下一区块的标题往上顶。例:`Desktop-59` 高 1960,末排卡片底边在 1856 → 必须有 104px 底部留白。
2. **把区块标题放在 aspect-ratio 舞台之外,而舞台高度又按整个画板算** → 标题被重复计一次,内容整体下移并超出画板。修法:舞台只覆盖 `画板高 − 标题块高`,坐标保持设计绝对值,在定位辅助函数里减掉偏移。

另外:**两个相邻 Figma 画板之间不要凭感觉加间距** —— 先查兄弟画板的 y 值,通常是紧贴的。

注意 `.proj-heading` 的 `margin-top: 24px` 会从其 section 外溢(外边距塌陷),所以 section 的盒子从标题边框开始;把实测值换回画板坐标时要 +24。

## 已知坑与约定

### 1. 宽选择器压过修饰类(踩过 3 次)

`.parent > img { width: 100% }` 会压过 `.overlay { width: 3.2% }`(特异性 0,1,1 > 0,1,0),把叠加元素撑满。**约定:底图/基础元素用显式类名**(如 `.p1-ctn-base`),不要用宽泛的子元素选择器。

同理,全局重置要降特异性:`:where(.page--project) p { margin: 0 }`,否则会压掉组件自己的 margin。

### 2. 无固有尺寸的 SVG 会失控

Figma 导出的 SVG 用 `width="100%" height="100%"`,没有固有尺寸。一旦宽度被意外覆盖,高度会跟着爆炸。**约定:SVG 叠加元素必须显式写 `aspect-ratio`。**

### 3. 覆盖层子元素顺序不能塌进父元素

Figma 导出代码若以 `<div className="absolute inset-0 pointer-events-none shadow-[inset_...]" />` 结尾,说明该效果**画在内容之上**。塌成父元素自己的 `box-shadow: inset` 是错的 —— CSS 把父元素的背景/边框/内阴影画在**子元素下面**,任何不透明子元素都会盖掉它。

修法:`::after { position:absolute; inset:0; border-radius:inherit; box-shadow: inset …; pointer-events:none }` —— 树序最后,必然画在定位兄弟之上。渐变遮罩同理。

**照搬 Figma 的样式值不够,还要照搬子元素顺序。**

### 4. box-sizing

项目**没有**全局 `border-box` 重置。Figma 的宽高包含描边,所以带 border 的面板要显式加 `box-sizing: border-box`,否则会大出 2px。

### 5. 可变字体空心字的内部乱线

`-webkit-text-stroke` 会把可变字体字形内部自交的轮廓也描出来。修法:文字填充设为页面底色 + `paint-order: stroke fill` + 2px 描边(可见 1px)。

### 6. Figma SVG 外侧描边的发丝接缝

带 OUTSIDE 描边的形状导出成 SVG 后,填充与描边之间会出现一条发丝细线(Figma 里是合并渲染的;SVG 把填充和被 mask 裁的描边分开画,两条边各自对共享边界做抗锯齿,合成 alpha < 1 就漏出背景)。

修法:给**填充路径**(带 `--fill-0` 且没有 `mask=` 的那些)加同色 `stroke` + `stroke-width="1"`,让它向 mask 边缘下方多铺 0.5px。不会加粗字形(轮廓环已定义了外形)。

### 7. 截图上的白色遮挡块要保留

原始截图上有白色小方块用于遮挡敏感信息(`.proj-figure__patch`)。**这是有意的,不要当成瑕疵删掉。**

## 走查节奏

见 [../CLAUDE.md](../CLAUDE.md#走查节奏)。要点:模式级问题(共享 `.proj-*`)立即修,页级像素细节按页批量清;作者用**标注截图 + 一句话**报问题,精确数值由实现方自己去 Figma 取。
