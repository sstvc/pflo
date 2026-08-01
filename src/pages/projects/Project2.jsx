import '../../styles/project.css'

import { ObjectiveOpener, ProjectHero } from '../../components/figma/index.js'

/**
 * Project 2 — Travel Request Launch for Overseas Site / 出差申请单功能海外站落地
 * Figma: 设计稿 → project 2 (4:1125), 1440×23397
 *
 * 子屏台账(区块 → 子屏 / 高度),验证竖向节奏时以此为基准:
 *   105 头图                812
 *   Frame 2147237919  5211  D-72 540 · D-73 2250 · D-58 1685 · D-71 736
 *   Frame 2147237922  6012  D-37 668(开屏) · D-59 2428 · D-62 1464 · D-61 1452
 *   Frame 2147237918  5610  D-62 668(开屏) · D-63 2074 · D-64 2868
 *   Frame 2147237925  4460  D-65 668(开屏) · D-66 2216 · D-67 1576
 *   Frame 2147237933  1292  D-77 524 · 2026 768
 *
 * ⚠️ 节点 id 会随作者编辑漂移,上面的 id 仅为当前快照;
 *    重新定位用画板名,见 .claude/skills/figma-page-restore/SKILL.md
 */

/* 105 · 头图(4:1126) */
const Hero = () => (
  <ProjectHero
    nodeId="4:1126"
    label="Project 2"
    enTitle="Travel Request Launch for Overseas Site"
    cnTitle="出差申请单功能海外站落地"
    meta={[
      ['Timeline', '2024.09 - 2025.01'],
      ['Platform', 'PC / App'],
      ['Category', 'C端页面搭建'],
      ['Tools', 'Sketch, Figma'],
    ]}
  />
)

function Project2() {
  return (
    <>
      <Hero />

      {/* TODO: Frame 2147237919(4:1144)—— D-72 / D-73 / D-58 / D-71 */}

      <ObjectiveOpener
        nodeId="4:1488"
        heading="OBJECTIVE NO.1"
        cnTitle="使用体验优化"
        enSub="Usability Enhancement"
        strategies={['拆解表单，简化复杂任务', '新增草稿功能，解决用户痛点', '增加提示，提供即时帮助']}
      />
      {/* TODO: D-59(4:1507)/ D-62(4:1585)/ D-61(4:1645) */}

      <ObjectiveOpener
        nodeId="4:1685"
        heading="OBJECTIVE NO.2"
        cnTitle="多语言与本地化适配"
        enSub="Localization Adaptation"
        strategies={['按多语言要求调整字段展示', '制定特殊场景字段展示规则']}
      />
      {/* TODO: D-63(4:1701)/ D-64(4:1772) */}

      {/* ⚠️ 稿中本屏第 2 条策略比另两屏低 8px(y=364 vs 356),疑似手误;
             这里按统一节奏渲染,待作者确认 */}
      <ObjectiveOpener
        nodeId="4:1884"
        heading="OBJECTIVE NO.3"
        cnTitle="高效推进与体验保障"
        enSub="Sustainable Experience"
        strategies={['基于固有逻辑，通过前端展示优化体验', 'PC & App 分批上线']}
      />
      {/* TODO: D-66(4:1900)/ D-67(4:1963) */}

      {/* TODO: Frame 2147237933(4:2000)—— D-77 / 2026 收尾 */}
    </>
  )
}

export default Project2
