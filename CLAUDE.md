# CLAUDE.md — pflo

个人作品集站点,Vite + React SPA,按 Figma 稿 1:1 还原。线上 https://pflo.caicaicai1908.workers.dev

## 命令

```bash
npm run dev      # 开发服务器 → 127.0.0.1:5173(Vite 只绑 IPv4,预览器别用 localhost)
npm run build    # 产出 dist/,Cloudflare 的构建输出
npm run lint     # 提交前必跑
```

## 硬规则

**样式**
- 颜色/字号/间距**只用 `:root` 里的 CSS 变量**,不手写色值 —— 令牌源头是 Figma 变量
- 深浅色是**页面层级**(一级页面 Light / 二级页面 Dark),**不是**用户可切换的主题。别合并成 mode
- 项目强调色**不跨项目混用**;组件只引用 `--accent-primary/secondary`,不写死具体项目色
- 字体 family 名带 `Variable` 后缀(`'Montserrat Variable'`)
- **不装 Tailwind / UI 组件库**,原生 CSS + 变量

**防特异性覆盖(踩过 3 次)**
- 底图/基础元素用**显式类名**,不用 `.parent > img` 这类宽选择器 —— 会压过叠加元素的宽度
- 全局重置用 `:where()` 降特异性,否则压掉组件自己的 margin
- SVG 叠加元素**必须显式写 `aspect-ratio`**(Figma SVG 无固有尺寸,会失控撑爆)
- 带 border 的面板显式加 `box-sizing: border-box`(项目无全局 border-box 重置)
- Figma 导出里结尾的 `absolute inset-0 pointer-events-none` 覆盖层,**用 `::after` 实现**,不能塌成父元素的 `box-shadow: inset`(会被不透明子元素盖住)
- 坐标舞台里**不要用 `display: contents` 包装器**(`.stage > *` 够不着,内容会塌回顶部);放 `<ul>` 记得自己清 `padding`(项目无全局 `border-box`,UA 的 40px 会撑出横向溢出)

**数据**
- 增删项目**只改 `src/data/projects.js`**,首页/索引都从它读
- 新项目页放 `src/pages/projects/`,并在 `Project.jsx` 的 `pages` 映射表登记(懒加载)

**Figma(两个文件,别混)**
- 页面稿 `portfolio-2025-coding` = `04uhBuDFENw94d8ERcsCs2`;设计规范 `SSPFO Design System` = `PhnhrgTFhQMM49sWWMuXaU`
- **节点 id 会随作者编辑整体偏移**,不要写死当长期引用 —— 每次按画板名重新定位
- 资产 URL **7 天过期** —— 读完一屏立刻 curl 下载到 `src/assets/projects/pN/`
- 整个 project 画板 2 万+ 像素高,**必须分子屏读**,一次读会超限
- 截图上的白色遮挡块(`.proj-figure__patch`)是**故意遮敏感信息的,不要删**

**字体细节(踩过)**
- 字间距**以 `src/index.css` 的 `--tracking-*` 为准**(单位是百分比,规范会来回改),那里没列的档位一律不加
- 大小写看源文字:区块标题源文字就是大写;英文副标题是 Title Case,**不转大写**
- 有宽度约束的说明文字**不要加 `nowrap`**(稿中是换行的)

**不要碰**
- 不配置 Cloudflare(除明确要求)—— 作者在网页面板手动管
- `cover&resume&content` 画板仅用于文件导出,**不是站点页面**

## 验证

**不靠肉眼估**,用 DOM 实测比对设计稿坐标:

```js
// 基准用容器实测宽,不要用 scrollWidth(悬浮滚动条会让它漂移)
const scale = document.querySelector('main.page--project').getBoundingClientRect().width / 1440;
const D = (px) => Math.round(px / scale);
```

同时查:图片是否全部加载、有无横向溢出、控制台报错。

**竖向节奏**:Figma 子画板高度**包含尾部留白** —— 比对「区块渲染高度 vs 画板高度」,不是最后一个可见元素的位置。相邻画板之间不要凭感觉加间距,先查 y 值。

## 走查节奏

- **模式级问题**(共享 `.proj-*` 样式)→ 立即修,它们会复制到每个项目页
- **页级像素细节** → 按页批量:一页做完 → 作者走查 → 报清单 → 逐项修并对照 Figma 验证 → 再进下一页。**不要攒到所有页做完**
- 作者用**标注截图 + 一句话**报问题;精确数值由实现方自己去 Figma 取,不要求作者量像素
- 每完成一页,主动请作者走查再开下一页

## 深入文档

| 文档 | 内容 |
|---|---|
| **[.claude/skills/figma-page-restore](.claude/skills/figma-page-restore/SKILL.md)** | **还原新 project 页面的操作手册** —— 流程、坐标舞台技术、基元用法、12 类已知坑、验证脚本、完成标准 |
| [docs/architecture.md](docs/architecture.md) | 路由、令牌与主题机制、字体策略、部署 |
| [docs/figma-restoration.md](docs/figma-restoration.md) | 背景速查:设计稿 fileKey、画板对照、代码位置 |
