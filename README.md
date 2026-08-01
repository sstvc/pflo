# pflo

个人作品集站点。纯前端 Vite + React SPA,页面按 Figma 设计稿还原。

**线上:** https://pflo.caicaicai1908.workers.dev

## 快速开始

```bash
npm install
npm run dev      # → http://127.0.0.1:5173
```

| 命令 | 作用 |
|---|---|
| `npm run dev` | 开发服务器(HMR) |
| `npm run build` | 生产构建 → `dist/` |
| `npm run preview` | 本地预览构建产物 |
| `npm run lint` | ESLint |

## 目录结构

```
src/
├─ main.jsx              # 入口:路由定义 + 字体引入
├─ index.css             # 设计令牌(:root CSS 变量)+ 页面基础样式
├─ data/projects.js      # 项目注册表 —— 增删项目改这里
├─ pages/
│  ├─ Home.jsx           # 临时首页(项目入口列表)
│  ├─ Project.jsx        # 项目页外壳,按 slug 懒加载
│  ├─ NotFound.jsx       # 404
│  └─ projects/          # 各项目详情页
├─ styles/project.css    # 项目页共享版式
└─ assets/projects/pN/   # 各项目的截图资产
```

## 技术选型

- **Vite + React**(JavaScript,非 TypeScript)
- **react-router-dom** —— 多页面路由
- **原生 CSS + CSS 变量** —— 无 Tailwind、无 UI 组件库
- **自托管可变字体** —— Montserrat / Inter / Noto Sans SC,境内外访问一致

## 部署

托管在 **Cloudflare Workers**(静态资源模式,非经典 Pages)。推送到 `main` 自动触发构建部署:

| 配置 | 值 |
|---|---|
| 构建命令 | `npm run build` |
| 输出目录 | `dist` |
| SPA 深链回退 | `wrangler.jsonc` 里 `assets.not_found_handling` |

## 文档

- [docs/architecture.md](docs/architecture.md) —— 架构:路由、设计令牌与主题机制、字体策略、部署细节
- [docs/figma-restoration.md](docs/figma-restoration.md) —— 背景速查:设计稿 fileKey、画板对照、代码位置
- [.claude/skills/figma-page-restore](.claude/skills/figma-page-restore/SKILL.md) —— **还原新页面的操作手册**(流程、坐标舞台技术、复用基元、已知坑、验证脚本)
- [CLAUDE.md](CLAUDE.md) —— 给 AI 协作者的项目约定
