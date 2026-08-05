# pflo 架构说明

个人作品集站点。纯前端 Vite + React SPA,无服务端。设计稿 100% 来自 Figma,页面按稿还原。

- 线上:https://pflo.caicaicai1908.workers.dev
- 仓库:https://github.com/sstvc/pflo

## 技术栈

| 项 | 选择 | 说明 |
|---|---|---|
| 构建 | Vite + React(JavaScript,非 TS) | 脚手架 `npm create vite --template react` |
| 路由 | `react-router-dom`(`createBrowserRouter`) | 多页面,见下方路由表 |
| 样式 | 原生 CSS + CSS 变量 | **无 Tailwind / 无 UI 组件库**,刻意保持 |
| 字体 | `@fontsource-variable/{montserrat,inter,noto-sans-sc}` | 自托管可变字体,见「字体策略」 |
| 部署 | **Cloudflare Workers**(静态资源模式) | 不是 Pages,见「部署」 |

## 当前完成状态

- Project 1：已还原，19 个子屏。
- Project 2：已还原，17 个子屏；D-71、D-62 与 D-65 已按当前 Figma 原稿复核。
- Project 3 / 4：注册表与占位路由已存在，页面尚未开始还原。
- 首页仍为临时项目入口；Resume、正式导航与页脚尚未设计/实现。

Project 1 / 2 的当前完成基准是 1440px 桌面画板。每次开始新项目之前，必须保证
已完成页面无横向溢出、无破图、控制台无报错，并通过 lint 与生产构建。

## 路由

在 `src/main.jsx` 用 `createBrowserRouter` 定义:

| 路径 | 组件 | 说明 |
|---|---|---|
| `/` | `pages/Home.jsx` | **临时首页**,仅列出项目入口。正式首页待设计 |
| `/projects/:slug` | `pages/Project.jsx` | 项目详情外壳,按 slug 懒加载具体页面 |
| `*` | `pages/NotFound.jsx` | 404。项目会被增删,失效链接需兜底 |

`/projects/:slug` 这个层级从一开始就这么设计,是为了将来加 `/projects` 索引页或 `/work` 等平行栏目时 URL 不用变。

### 项目注册表

`src/data/projects.js` 是站内所有项目的**唯一数据源**。增删项目改这里,首页/未来的索引页都从它读:

```js
{ slug, title, titleZh, accent, figmaNodeId }
```

`accent` 是项目主题色编号(1–5),写到 DOM 的 `data-project` 属性上。`figmaNodeId` 用于回溯设计稿。

具体页面组件在 `src/pages/projects/`,由 `Project.jsx` 里的 `pages` 映射表按 slug 懒加载(路由级代码分割)。**未在映射表里的 slug 会走占位态**,不会报错。

## 设计令牌与主题

令牌全部在 `src/index.css` 的 `:root`,**源头是 Figma 变量,不要手写色值**。

### 深浅是「页面层级」,不是主题切换

这是最容易误解的一点。Figma 里 `Light/` `Dark/` 前缀**指页面层级**:

- **一级页面**(首页/封面)→ Light 浅色板
- **二级页面**(项目详情)→ Dark 深色板

实现:语义变量 `--color-bg-1 / --color-heading / --color-body-1 / --color-body-2 / --color-border` 默认取 Light,页面根节点挂 `data-theme="dark"` 时整组切到 Dark。

**不要把它当成用户可切换的 light/dark theme 去合并成 mode。**

### 项目强调色不跨项目混用

Project 1–5 各有一对强调色(5 为未来项目预留)。页面挂 `data-project="N"` → `--accent-primary` / `--accent-secondary`。

因此同一套版式在不同项目页会自动换色,**组件里只引用 `--accent-*`,不要写死具体项目色**。

### 字阶

Montserrat(西文标题)/ Inter(西文正文)/ 思源黑体(中文)。字号阶梯:display 144 / h1 72 / h2 60 / h3 36 / h4 24 / body 16 / body-2 14,均在 `:root` 里成对定义了字号、行高、字距。

## 字体策略

需求是「境内外访问都要好」,所以**自托管**而非 Google Fonts CDN:

- 通过 `@fontsource-variable/*` 引入,在 `src/main.jsx` 里 import
- 中文用 `Noto Sans SC`(与设计稿的思源黑体同字形、不同发行名)
- CJK 按 `unicode-range` 自动切片 → 构建产物有 ~110 个 woff2,浏览器只取用到的分片
- **family 名带 `Variable` 后缀**(如 `'Montserrat Variable'`),写 font-family 时别漏

## 响应式

设计稿只有 1440 桌面版。当前实现是桌面优先、按稿绝对还原；D-71 与 D-62 的长中文标题会在
不足 1440px 时随视口缩小，以避免常见桌面宽度出现横向滚动。这不等同于移动端适配；
移动端的字阶、内容编排和单列结构尚未设计与实现。

## 部署

**Cloudflare Workers 静态资源模式,不是经典 Pages。** Cloudflare 现在新建 Git 站点默认走 Workers,对纯静态 SPA 两者效果等价。

- `wrangler.jsonc` 声明 worker 名 `pflo`、资源目录 `./dist`
- `assets.not_found_handling = "single-page-application"` 提供**深链回退** —— 多页面路由上线的前提,直接访问 `/projects/xxx` 靠它返回 `index.html`
- 构建命令 `npm run build`,输出 `dist/`
- **推送到 `main` 自动触发构建部署**,无需手动操作

方向已定:**留在 Workers,不迁 Pages**(Pages 已进维护模式)。将来若要做反馈表单,在同一个 Worker 上加 `/api/*` 路由 + D1/KV 绑定即可,不需要换平台。

## 已知待办

- **首页和 resume 页是临时/缺失的** —— 等设计稿产出后替换
- 移动端适配未做
- favicon 仍是 Vite 默认;各页 title/description 未分别设置
- Project 1 / 2 的源码图片合计约 20MB，当前 `dist/` 约 24MB；项目变多前需做图片和字体体积治理
