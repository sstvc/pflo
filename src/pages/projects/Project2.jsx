import '../../styles/project.css'

import { makeAt, ObjectiveOpener, ProjectHero, SectionHeading } from '../../components/figma/index.js'

/**
 * Project 2 — Travel Request Launch for Overseas Site / 出差申请单功能海外站落地
 * Figma: 设计稿 → project 2 , 1440×23397
 *
 * 子屏台账(高度是稳定的,验证竖向节奏以此为基准):
 *   105 头图                812
 *   Frame 2147237919  5211  D-72 540 · D-73 2250 · D-58 1685 · D-71 736
 *   Frame 2147237922  6012  D-37 668(开屏) · D-59 2428 · D-62 1464 · D-61 1452
 *   Frame 2147237918  5610  D-62 668(开屏) · D-63 2074 · D-64 2868
 *   Frame 2147237925  4460  D-65 668(开屏) · D-66 2216 · D-67 1576
 *   Frame 2147237933  1292  D-77 524 · 2026 768
 *
 * ⚠️ 节点 id 极易漂移(已见四次),所以这里**不记 id**,
 *    用 data-screen=画板名 作为稳定锚点;重新定位见
 *    .claude/skills/figma-page-restore/SKILL.md
 */

/* 105 · 头图 */
const Hero = () => (
  <ProjectHero
    screen="105"
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

/* D-72 · BACKGROUND(高 540;标题块 96 在舞台外 → 舞台 444) */
const bgAt = makeAt(1440, 444)

function Background() {
  return (
    <section data-screen="D-72">
      <SectionHeading>BACKGROUND</SectionHeading>
      <div className="p2-stage" style={{ aspectRatio: `${1440} / ${444}` }}>
        <p className="proj-kicker" style={bgAt(24, 64)}>
          项目背景
        </p>
        <p className="p2-body" style={bgAt(24, 132, 448)}>
          本项目旨在将出差申请单功能纳入携程商旅海外站Trip.Biz，为客户企业提供更全面的差旅管理解决方案，帮助他们更好地掌控出差流程，提高效率，同时增加对产品的依赖性
        </p>
        <div className="p2-tags" style={bgAt(24, 236)}>
          <span className="p2-tag" style={{ width: 130 }}>
            中国站功能国际化
          </span>
          <span className="p2-tag">0-1页面搭建</span>
          <span className="p2-tag" style={{ width: 73 }}>
            设计适配
          </span>
        </div>

        <p className="p2-body" style={bgAt(732, 132, 448)}>
          出差申请单是商旅的重要审批形式
        </p>
        <p className="p2-body p2-body--dim" style={bgAt(732, 172, 448)}>
          出差申请可以减少用户对于订单审批的依赖，提高预订效率，避免因审批不及时导致预订失败
        </p>
        <p className="p2-body" style={bgAt(732, 252, 448)}>
          海外站功能缺失
        </p>
        <p className="p2-body p2-body--dim" style={bgAt(732, 292, 448)}>
          Trip.biz目前已在香港、日本、越南等近十个海外站点上线，但一直缺失出差申请单功能
        </p>
      </div>
    </section>
  )
}

function Project2() {
  return (
    <>
      <Hero />
      <Background />

      {/* TODO: D-73 2250 / D-58 1685 / D-71 736 */}

      <ObjectiveOpener
        screen="D-37"
        heading="OBJECTIVE NO.1"
        cnTitle="使用体验优化"
        enSub="Usability Enhancement"
        strategies={['拆解表单，简化复杂任务', '新增草稿功能，解决用户痛点', '增加提示，提供即时帮助']}
      />
      {/* TODO: D-59/ D-62/ D-61 */}

      <ObjectiveOpener
        screen="D-62a"
        heading="OBJECTIVE NO.2"
        cnTitle="多语言与本地化适配"
        enSub="Localization Adaptation"
        strategies={['按多语言要求调整字段展示', '制定特殊场景字段展示规则']}
      />
      {/* TODO: D-63/ D-64 */}

      {/* ⚠️ 稿中本屏第 2 条策略比另两屏低 8px(y=364 vs 356),疑似手误;
             这里按统一节奏渲染,待作者确认 */}
      <ObjectiveOpener
        screen="D-65"
        heading="OBJECTIVE NO.3"
        cnTitle="高效推进与体验保障"
        enSub="Sustainable Experience"
        strategies={['基于固有逻辑，通过前端展示优化体验', 'PC & App 分批上线']}
      />
      {/* TODO: D-66/ D-67 */}

      {/* TODO: Frame 2147237933—— D-77 / 2026 收尾 */}
    </>
  )
}

export default Project2
