import '../../styles/project.css'

import { ProjectHero } from '../../components/figma/index.js'

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
      {/* TODO: Frame 2147237922(4:1487)—— 开屏 + D-59 / D-62 / D-61 */}
      {/* TODO: Frame 2147237918(4:1684)—— 开屏 + D-63 / D-64 */}
      {/* TODO: Frame 2147237925(4:1883)—— 开屏 + D-66 / D-67 */}
      {/* TODO: Frame 2147237933(4:2000)—— D-77 / 2026 收尾 */}
    </>
  )
}

export default Project2
