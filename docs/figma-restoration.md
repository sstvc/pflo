# Figma 还原:背景速查

本页只放**稳定事实**(设计稿在哪、画板对照、资产约定)。

**怎么做**在操作手册里,不在这儿:👉 **[.claude/skills/figma-page-restore/SKILL.md](../.claude/skills/figma-page-restore/SKILL.md)**
(分屏读稿流程、坐标舞台技术、复用基元用法、16 类已知坑、3 个验证脚本、完成标准)

## 设计稿(两个文件,别混)

| 用途 | 文件 | fileKey |
|---|---|---|
| **页面稿** | `portfolio-2025-coding` | `04uhBuDFENw94d8ERcsCs2` |
| **设计规范** | `SSPFO Design System` | `PhnhrgTFhQMM49sWWMuXaU` |

页面稿只有一个页面 `设计稿`(`0:1`),含 5 个顶层画板。规范文件按 `F01 颜色` / `F02 字体` 等分页,每页一个 canvas。

⚠️ **节点 id 会随作者编辑整体偏移**(已见三轮变动)。**不要把 id 写死当长期引用** —— 每次开工按画板名重新定位。

## 画板对照

尺寸稳定,可用作校验锚点:

| 画板 | 尺寸 | 状态 |
|---|---|---|
| project 1 | 1440 × 23513 | 已还原（19 个子屏） |
| project 2 | 1440 × 23397 | 已还原（17 个子屏） |
| project 3 | 1440 × 27854 | 待还原 |
| project 4 | 1440 × 14588 | 待还原 |
| `cover&resume&content` | 1440 × 2136 | **仅供文件导出,不是站点页面** |

当前顶层节点快照（2026-08-06）：project 1 `6:120` / project 2 `6:1087` /
project 3 `6:1993` / project 4 `6:2490`。这些值只用于当前回溯；开工时仍须按画板名重新定位。

project 1 的 19 个子屏和 project 2 的 17 个子屏，分别通过页面组件中的
`data-node-id`（当前快照）/ `data-screen` / 组件顺序回溯。Project 2 的 D-65 第二条策略因第一条换行，
按原稿整体下移 8px；D-71 与 D-62 在不足 1440px 的桌面视口仅缩放长中文标题，避免产生横向滚动。
移动端仍属于独立待办。

## 代码位置

| 内容 | 位置 |
|---|---|
| 复用图形基元 | `src/components/figma/`(从 `index.js` 统一导入) |
| 共享版式 | `src/styles/project.css` 的 `.proj-*` 段 |
| 项目专属版式 | 同文件的 `.pN-*` 段 |
| 页面组件 | `src/pages/projects/ProjectN.jsx` |
| 截图资产 | `src/assets/projects/pN/` |

**类名约定**:`.proj-*` = 跨项目共享(基元只输出这类);`.pN-*` = 该项目专属。改 `.proj-*` 属模式级改动,要回归其他项目页。

⚠️ Figma 资产 URL **7 天过期** —— 读完一屏立刻下载,别攒着。
