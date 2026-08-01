# Figma 还原:背景速查

本页只放**稳定事实**(设计稿在哪、画板对照、资产约定)。

**怎么做**在操作手册里,不在这儿:👉 **[.claude/skills/figma-page-restore/SKILL.md](../.claude/skills/figma-page-restore/SKILL.md)**
(分屏读稿流程、坐标舞台技术、复用基元用法、12 类已知坑、3 个验证脚本、完成标准)

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
| project 1 | 1440 × 23513 | 已还原 |
| project 2 | 1440 × 23397 | 待还原 |
| project 3 | 1440 × 27854 | 待还原 |
| project 4 | 1440 × 14588 | 待还原 |
| `cover&resume&content` | 1440 × 2136 | **仅供文件导出,不是站点页面** |

project 1 的 7 个区块 / 19 个子屏,可从 `Project1.jsx` 各 `<section data-node-id>` 回溯。

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
