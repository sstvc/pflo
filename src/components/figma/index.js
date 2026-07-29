/**
 * Figma 还原基元 —— 各 project 详情页共用。
 *
 * 用法与坑位见 .claude/skills/figma-page-restore/SKILL.md。
 * 配套样式在 src/styles/project.css 的 .proj-* 段。
 */
export { pct, makeAt, stageStyle } from './coords.js'
export { default as SectionHeading } from './SectionHeading.jsx'
export { default as ObjectiveOpener } from './ObjectiveOpener.jsx'
export { default as WfStage } from './WfStage.jsx'
export { default as PriStage } from './PriStage.jsx'
export { Strip, IntSlice, AdvPill } from './crops.jsx'
export { FlowArrow, FlowNode, Cursor } from './flow.jsx'
