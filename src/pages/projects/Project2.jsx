import { Fragment } from 'react'

import '../../styles/project.css'

import {
  IntSlice,
  makeAt,
  ObjectiveOpener,
  ProjectHero,
  SectionHeading,
} from '../../components/figma/index.js'

import d73Screen from '../../assets/projects/p2/d73-screen.png'

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

/* D-73 · INTRODUCTION(高 2250;标题块 96 在舞台外 → 舞台 2154)
   流程图(y 560–1600)与页面截图行(y 1884–2090)是整屏导出的切片:
   前者约 40 个碎元素含多个旋转箭头,后者是纯位图;其余全部真实文字。 */
const introAt = makeAt(1440, 2154)
const S = (y) => y - 96 // 稿中绝对 y → 舞台内 y

const pageCards = [
  ['01', '申请页', '填写信息，申请单据', 24],
  ['02', '列表页', '管理全部出差申请单', 378],
  ['03', '详情页', '查看出差申请单详情', 732],
  ['04', '出差申请选择弹窗', '预订时选择出差申请单', 1086],
]

function Introduction() {
  return (
    <section data-screen="D-73">
      <SectionHeading>INTRODUCTION</SectionHeading>
      <div className="p2-stage" style={{ aspectRatio: `${1440} / ${2154}` }}>
        <p className="proj-kicker" style={introAt(24, S(160))}>
          核心功能价值
        </p>
        <p className="p2-statement" style={introAt(614, S(160), 802)}>
          提前完成审批，省去行程预订流程的审批环节，满足时间敏感性的订单要求
        </p>
        <hr className="p2-rule" style={introAt(24, S(312), 1392)} />

        <p className="proj-kicker" style={introAt(24, S(376))}>
          使用/不使用出差申请单的预订审批流程：
        </p>

        {/* 流程图列头:用强调色,故保持真实文字 */}
        <p className="p2-flowhead p2-flowhead--primary" style={introAt(354, S(444))}>
          出差申请
        </p>
        <p className="p2-flowhead" style={introAt(685, S(444))}>
          审批
        </p>
        <p className="p2-flowhead p2-flowhead--secondary" style={introAt(968, S(444))}>
          行程预订
        </p>
        <p className="p2-body p2-body--dim" style={introAt(354, S(524))}>
          差旅管理者、出行人本人...
        </p>
        <p className="p2-body p2-body--dim" style={introAt(685, S(524))}>
          审批主管、上级领导...
        </p>
        <p className="p2-body p2-body--dim" style={introAt(968, S(524))}>
          差旅预订专员、出行人本人...
        </p>

        {/* 流程图切片 */}
        <IntSlice
          src={d73Screen}
          alt="使用/不使用出差申请单的预订审批流程图"
          x={0}
          y={S(560)}
          w={1440}
          h={1040}
          W={1440}
          H={2154}
          sx={0}
          sy={560}
        />

        <hr className="p2-rule" style={introAt(24, S(1678), 1392)} />
        <p className="proj-kicker" style={introAt(24, S(1710))}>
          主要页面
        </p>

        {pageCards.map(([num, title, caption, x]) => (
          <Fragment key={num}>
            <p className="p2-cardnum" style={introAt(x, S(1786))}>
              {num}
            </p>
            <p className="proj-kicker" style={introAt(x + 65, S(1816))}>
              {title}
            </p>
            <p className="p2-body" style={introAt(x, S(2122), 330)}>
              {caption}
            </p>
          </Fragment>
        ))}
        {/* 四张页面截图(纯位图,同源切片) */}
        <IntSlice
          src={d73Screen}
          alt="出差申请单主要页面"
          x={0}
          y={S(1884)}
          w={1440}
          h={206}
          W={1440}
          H={2154}
          sx={0}
          sy={1884}
        />
      </div>
    </section>
  )
}

function Project2() {
  return (
    <>
      <Hero />
      <Background />
      <Introduction />

      {/* TODO: D-58 1685 / D-71 736 */}

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
