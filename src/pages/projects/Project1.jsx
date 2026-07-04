import '../../styles/project.css'

import bgOldListA from '../../assets/projects/p1/bg-old-list-a.png'
import bgOldListB from '../../assets/projects/p1/bg-old-list-b.png'
import introStep1 from '../../assets/projects/p1/intro-step1.png'
import introStep2 from '../../assets/projects/p1/intro-step2.png'
import introStep3 from '../../assets/projects/p1/intro-step3.png'

/**
 * Project 1 — Flight List Page Redesign / 机票列表页改版项目
 * Figma: Page 1 → project 1 (1:161), 1440×23513
 * 区块:104 头图(1:162)/ 背景&介绍(1:181)/ 问题&目标(1:267)
 *      / 目标1(1:343)/ 目标2(1:628)/ 目标3(1:901)/ 对比&总结(1:1045)
 */

/* 区块大标题:描边空心字 + 上下分割线 */
function SectionHeading({ children }) {
  return (
    <div className="proj-heading">
      <h2>{children}</h2>
    </div>
  )
}

/* 流程图箭头(Figma 导出为线条 SVG,直接内联) */
function FlowArrow() {
  return (
    <svg width="138" height="36" viewBox="0 0 138 36" fill="none" aria-hidden="true">
      <path d="M130 5L137 18.0001L130 31" stroke="var(--light-border)" />
      <path d="M137 18H0" stroke="var(--light-border)" />
    </svg>
  )
}

/* 用户↔平台流程图节点 */
function FlowNode({ shape, label }) {
  return (
    <div className="p1-flow__node">
      <div className={shape === 'circle' ? 'p1-flow__circle' : 'p1-flow__square'} />
      <span>{label}</span>
    </div>
  )
}

/* 104 · 头图(1:162) */
function Hero() {
  return (
    <section className="proj-hero" data-node-id="1:162">
      <header className="proj-hero__top">
        <span>Project 1</span>
      </header>
      <h1 className="proj-hero__title-en">Flight List Page Redesign</h1>
      <p className="proj-hero__title-cn">机票列表页改版项目</p>
      <div className="proj-hero__band">
        <dl className="proj-hero__meta">
          <div>
            <dt>Timeline</dt>
            <dd>2025.01 - 2025.06</dd>
          </div>
          <div>
            <dt>Platform</dt>
            <dd>PC</dd>
          </div>
          <div>
            <dt>Category</dt>
            <dd>C端页面改版</dd>
          </div>
          <div>
            <dt>Tool</dt>
            <dd>Sketch</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

/* 背景(1:182):项目背景 + 现状截图 + 三项统计 */
function Background() {
  return (
    <section data-node-id="1:182">
      <SectionHeading>Background</SectionHeading>
      <div className="p1-bg-grid">
        <div className="p1-bg-text">
          <p className="proj-kicker">项目背景</p>
          <p>
            机票列表页自上线以来不断承载业务诉求，页面结构的拓展性已达极限，原始框架难以满足新的业务诉求
          </p>
          <p>持续的局部优化和内容堆叠导致页面设计混乱，用户体验下降，客诉频繁</p>
        </div>
        <div className="proj-figure">
          <img src={bgOldListA} alt="现状:机票列表页内容持续堆叠的页面截图" />
          <span
            className="proj-figure__patch"
            style={{ left: '92.7%', top: '73.9%', width: '7.3%', height: '26.1%' }}
          />
        </div>
        <div className="proj-figure">
          <img src={bgOldListB} alt="现状:局部优化后设计割裂的机票列表页截图" />
          <span
            className="proj-figure__patch"
            style={{ left: '92.7%', top: '71.8%', width: '7.3%', height: '28.2%' }}
          />
        </div>
        <hr className="p1-bg-rule" />
        <p className="p1-bg-caption p1-bg-caption--a">持续新增的内容导致页面结构失衡、难以拓展</p>
        <p className="p1-bg-caption p1-bg-caption--b">局部优化导致页面设计缺乏整体型、体验不佳</p>
      </div>
      <hr className="proj-divider" />
      <div className="proj-stats">
        <div>
          <div className="proj-stat__value">20+</div>
          <p className="proj-stat__desc">因页面结构问题而积压无法满足的业务诉求</p>
        </div>
        <div>
          <div className="proj-stat__value">60%</div>
          <p className="proj-stat__desc">用户调研中，机票列表页占全部机票页面的负面反馈比例</p>
        </div>
        <div>
          <div className="proj-stat__value">12%</div>
          <p className="proj-stat__desc">单位时间内机票列表页跳出占全站页面跳出的比例</p>
        </div>
      </div>
    </section>
  )
}

/* 介绍(1:207):预订流程三步(高亮列表页) */
const introSteps = [
  {
    num: '01',
    label: '查询页',
    img: introStep1,
    imgAlt: '机票查询页截图',
    patch: { left: '92.4%', top: '87.7%', width: '7.6%', height: '12.3%', background: '#fff' },
    caption: '提供条件 搜索航班',
    desc: ['用户作为输出方，向平台提供信息（搜索条件）'],
    flow: { from: ['circle', '用户'], arrowLabel: '填写搜索条件', to: ['square', '平台'] },
  },
  {
    num: '02',
    label: '列表页',
    highlight: true,
    img: introStep2,
    imgAlt: '机票列表页截图',
    patch: { left: '92.7%', top: '76.3%', width: '6.1%', height: '23.6%' },
    caption: '浏览结果 决策购买',
    desc: ['平台作为输出方，向用户提供信息（搜索结果）', '用户基于搜索结果，挑选比对、决策购买'],
    flow: { from: ['square', '平台'], arrowLabel: '提供搜索结果', to: ['circle', '用户'] },
  },
  {
    num: '03',
    label: '填写页',
    img: introStep3,
    imgAlt: '机票填写页截图',
    patch: { left: '92.4%', top: '87.7%', width: '7.6%', height: '12.3%' },
    caption: '填写信息 确认支付',
    desc: ['用户作为输出方，向平台提供信息（预订信息）'],
    flow: { from: ['circle', '用户'], arrowLabel: '填写预订信息', to: ['square', '平台'] },
  },
]

function Introduction() {
  return (
    <section className="p1-intro" data-node-id="1:207">
      <SectionHeading>Introduction</SectionHeading>
      <div className="p1-intro-body">
        <p className="proj-kicker p1-intro-lead">列表页在机票预订流程：</p>
        <div className="p1-intro-grid">
          {introSteps.map((step) => (
            <div
              key={step.num}
              className={`p1-intro-col${step.highlight ? ' p1-intro-col--hl' : ''}`}
            >
              <div className="p1-intro-step">
                <strong>{step.num}</strong>
                <span>{step.label}</span>
              </div>
              <div className="proj-figure">
                <img src={step.img} alt={step.imgAlt} />
                <span className="proj-figure__patch" style={step.patch} />
              </div>
              <p className="p1-intro-caption">{step.caption}</p>
              <hr className="proj-divider" />
              <div className="p1-intro-desc">
                {step.desc.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="p1-flow">
                <FlowNode shape={step.flow.from[0]} label={step.flow.from[1]} />
                <div className="p1-flow__arrow">
                  <span>{step.flow.arrowLabel}</span>
                  <FlowArrow />
                </div>
                <FlowNode shape={step.flow.to[0]} label={step.flow.to[1]} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Project1() {
  return (
    <>
      <Hero />
      <Background />
      <Introduction />
      {/* TODO: 问题&目标(1:267) */}
      {/* TODO: 目标1(1:343) */}
      {/* TODO: 目标2(1:628) */}
      {/* TODO: 目标3(1:901) */}
      {/* TODO: 对比&总结(1:1045) */}
    </>
  )
}

export default Project1
