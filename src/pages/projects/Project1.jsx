import '../../styles/project.css'

import bgOldListA from '../../assets/projects/p1/bg-old-list-a.png'
import bgOldListB from '../../assets/projects/p1/bg-old-list-b.png'
import introStep1 from '../../assets/projects/p1/intro-step1.png'
import introStep2 from '../../assets/projects/p1/intro-step2.png'
import introStep3 from '../../assets/projects/p1/intro-step3.png'
import problemOldPage from '../../assets/projects/p1/problem-old-page.png'
import frameAfter from '../../assets/projects/p1/frame-after.png'
import cardBefore from '../../assets/projects/p1/card-before.png'
import cardBeforeMask from '../../assets/projects/p1/card-before-mask.png'
import cardAfter from '../../assets/projects/p1/card-after.png'
import cardAfterMask from '../../assets/projects/p1/card-after-mask.png'
import cardExpand from '../../assets/projects/p1/card-expand.png'
import ctnBefore from '../../assets/projects/p1/ctn-before.png'
import ctnAfter from '../../assets/projects/p1/ctn-after.png'
import ctnFilters from '../../assets/projects/p1/ctn-filters.png'
import ctnPopupFilters from '../../assets/projects/p1/ctn-popup-filters.png'
import ctnPopupFares from '../../assets/projects/p1/ctn-popup-fares.png'
import handCursor from '../../assets/projects/p1/hand-cursor.svg'
import coreFunnel from '../../assets/projects/p1/core-funnel.png'
import coreBeforeA from '../../assets/projects/p1/core-before-a.png'
import coreBeforeB from '../../assets/projects/p1/core-before-b.png'
import coreAfter from '../../assets/projects/p1/core-after.png'
import depBeforeTop from '../../assets/projects/p1/dep-before-top.png'
import depBeforeBot from '../../assets/projects/p1/dep-before-bot.png'
import depStrip1 from '../../assets/projects/p1/dep-strip-1.png'
import depStrip2 from '../../assets/projects/p1/dep-strip-2.png'
import depStrip3 from '../../assets/projects/p1/dep-strip-3.png'
import depStrip4 from '../../assets/projects/p1/dep-strip-4.png'
import interactScreen from '../../assets/projects/p1/interact-screen.png'
import advSrc from '../../assets/projects/p1/adv-src.png'
import advStripA from '../../assets/projects/p1/adv-strip-a.png'
import advStripB from '../../assets/projects/p1/adv-strip-b.png'
import icMealGray from '../../assets/projects/p1/ic-meal-gray.svg'
import icWifiGray from '../../assets/projects/p1/ic-wifi-gray.svg'
import icWifi2Gray from '../../assets/projects/p1/ic-wifi2-gray.svg'
import icChargeGray from '../../assets/projects/p1/ic-charge-gray.svg'
import icMealGreen from '../../assets/projects/p1/ic-meal-green.svg'
import icWifiGreen from '../../assets/projects/p1/ic-wifi-green.svg'
import icWifi2Green from '../../assets/projects/p1/ic-wifi2-green.svg'
import icChargeGreen from '../../assets/projects/p1/ic-charge-green.svg'

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

/* 线框示意图:坐标以舞台尺寸的百分比渲染,随布局缩放 */
const pct = (v, base) => `${((v / base) * 100).toFixed(3)}%`

function WfStage({ w, h, boxes = [], chips = [], className = '' }) {
  return (
    <div className={`wf-stage ${className}`.trim()} style={{ aspectRatio: `${w} / ${h}` }}>
      {boxes.map((b, i) => (
        <div
          key={i}
          className={`wf wf--${b.v}`}
          style={{ left: pct(b.l, w), top: pct(b.t, h), width: pct(b.w, w), height: pct(b.h, h) }}
        />
      ))}
      {chips.map((c, i) => (
        <span key={i} className="wf-chip" style={{ left: pct(c.l, w), top: pct(c.t, h) }}>
          {c.text}
        </span>
      ))}
    </div>
  )
}

/* 通用 · Objective 章节开屏(主色横幅) */
function ObjectiveOpener({ heading, goal, cnTitle, enSub, strategies, nodeId }) {
  return (
    <section data-node-id={nodeId}>
      <SectionHeading>{heading}</SectionHeading>
      <div className="proj-objopen">
        <div className="proj-objopen__left">
          <p className="proj-objopen__goal">
            设计目标 <strong>{goal}</strong>
          </p>
          <h3 className="proj-objopen__title">{cnTitle}</h3>
          <p className="proj-objopen__sub">{enSub}</p>
        </div>
        <div className="proj-objopen__right">
          <p className="proj-kicker">设计策略</p>
          <ul>
            {strategies.map((s, i) => (
              <li key={s}>
                <strong>{String(i + 1).padStart(2, '0')}</strong>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
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

/* 问题分析(1:268):两组问题清单 + 现状长截图 */
const problemGroups = [
  {
    num: '01',
    label: '拓展性低',
    items: [
      { title: '框架结构不合理', desc: '页面模块层级不清，' },
      { title: '无法满足特殊场景展示', desc: '在多筛选 / 多运价等场景下，内容展示失衡，体验下降明显' },
      { title: '卡片容量受限', desc: '航班卡片和运价卡片的展示空间趋于极限，难以容纳更多内容' },
    ],
  },
  {
    num: '02',
    label: '可用性弱',
    items: [
      { title: '主流程不明晰', desc: '信息展示缺乏层次，低频功能和次要信息的展示影响核心流程' },
      { title: '关键信息查看路径长', desc: '中转城市等重要信息的查看依赖浮层，查看效率低下' },
      { title: '关键信息难以定位', desc: '航班优势信息等展示分散，用户感知度低' },
      { title: '交互方式不明确', desc: '卡片内容的交互逻辑不统一，用户难以形成清晰的操作认知' },
    ],
  },
]

function Problem() {
  return (
    <section data-node-id="1:268">
      <SectionHeading>Existing Problem</SectionHeading>
      <div className="p1-prob-body">
        <p className="proj-kicker">问题分析</p>
        {problemGroups.map((group, gi) => (
          <div key={group.num} style={{ display: 'contents' }}>
            <div className={`p1-prob-label${gi > 0 ? ' p1-prob-label--gap' : ''}`}>
              <strong>{group.num}</strong>
              <span>{group.label}</span>
            </div>
            <ul className={`p1-prob-list${gi > 0 ? ' p1-prob-list--gap' : ''}`}>
              {group.items.map((item) => (
                <li key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="proj-figure p1-prob-img">
          <img src={problemOldPage} alt="现状机票列表页整页截图" />
        </div>
      </div>
    </section>
  )
}

/* 设计目标(1:308):三列目标卡(描边大序号) */
const objectives = [
  {
    num: '01',
    sub: '提升拓展性',
    title: '优化信息展示结构',
    items: ['页面框架重构', '航班卡片信息元素分区', '使用容器拓展页面层级'],
  },
  {
    num: '02',
    sub: '提升可用性',
    title: '交互链路提效',
    items: ['页面核心流程强化', '关键信息减轻查看依赖', '卡片交互方式规范化'],
  },
  {
    num: '03',
    sub: '提升可用性',
    title: '强化关键信息感知',
    items: ['航班优势信息强化', '多运价信息对比效率提升'],
    tailRule: true,
  },
]

function Objectives() {
  return (
    <section data-node-id="1:308">
      <SectionHeading>Design Objectives</SectionHeading>
      <div className="p1-obj-grid">
        <div className="p1-obj-side">
          <p className="proj-kicker">设计目标</p>
          <div className="p1-obj-bar" />
        </div>
        {objectives.map((obj) => (
          <div className="p1-obj-card" key={obj.num}>
            <div className="p1-obj-num">{obj.num}</div>
            <p className="p1-obj-sub">{obj.sub}</p>
            <p className="p1-obj-title">{obj.title}</p>
            <ul>
              {obj.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {obj.tailRule && <hr className="p1-obj-tail" />}
          </div>
        ))}
      </div>
    </section>
  )
}

/* 目标1 · 策略01 页面框架重构(1:364)—— BEFORE / DESIGN / AFTER */

/* 截图标注层(672×351):搜索模块/筛选栏/航班卡片/运价卡片 */
const annoBefore = {
  w: 672,
  h: 351,
  boxes: [
    { v: 'ghost', t: 6, l: 1, w: 670, h: 16 },
    { v: 'ghost', t: 28, l: 1, w: 670, h: 24 },
    { v: 'ghost', t: 58, l: 73, w: 526, h: 48 },
    { v: 'ghost', t: 112, l: 73, w: 526, h: 48 },
    { v: 'ghost', t: 188, l: 73, w: 526, h: 36 },
    { v: 'ghost', t: 230, l: 73, w: 526, h: 36 },
    { v: 'ghost', t: 272, l: 73, w: 526, h: 36 },
    { v: 'ghost', t: 314, l: 73, w: 526, h: 36 },
  ],
  chips: [
    { text: '搜索模块', t: 0, l: 302 },
    { text: '筛选栏', t: 30, l: 309 },
    { text: '航班卡片', t: 96, l: 302 },
    { text: '运价卡片', t: 259, l: 304 },
  ],
}

const annoAfter = {
  w: 672,
  h: 351,
  boxes: [
    { v: 'ghost', t: 6, l: 1, w: 670, h: 16 },
    { v: 'ghost', t: 46, l: 56, w: 560, h: 28 },
    { v: 'ghost', t: 86, l: 56, w: 560, h: 62 },
    { v: 'ghost', t: 160, l: 63, w: 132, h: 168 },
    { v: 'ghost', t: 160, l: 201, w: 132, h: 168 },
    { v: 'ghost', t: 160, l: 339, w: 132, h: 168 },
    { v: 'ghost', t: 160, l: 477, w: 132, h: 168 },
  ],
  chips: [
    { text: '搜索模块', t: 4, l: 302 },
    { text: '筛选栏', t: 50, l: 309 },
    { text: '航班卡片', t: 107, l: 302 },
    { text: '运价卡片', t: 234, l: 304 },
  ],
}

/* 右侧页面结构示意(330×182) */
const schemaBefore = {
  w: 330,
  h: 182,
  boxes: [
    { v: 'light', t: 0, l: 0, w: 330, h: 8 },
    { v: 'light', t: 14, l: 0, w: 330, h: 14 },
    { v: 'frame', t: 34, l: 0, w: 330, h: 148 },
    { v: 'light', t: 40, l: 38, w: 254, h: 40 },
    { v: 'light', t: 86, l: 38, w: 254, h: 24 },
    { v: 'light', t: 116, l: 38, w: 254, h: 24 },
    { v: 'light', t: 146, l: 38, w: 254, h: 24 },
  ],
}

const schemaAfter = {
  w: 330,
  h: 182,
  boxes: [
    { v: 'light', t: 0, l: 0, w: 330, h: 8 },
    { v: 'light', t: 14, l: 0, w: 330, h: 14 },
    { v: 'frame', t: 34, l: 0, w: 330, h: 148 },
    { v: 'light', t: 40, l: 38, w: 254, h: 44 },
    { v: 'light', t: 90, l: 38, w: 59, h: 80 },
    { v: 'light', t: 90, l: 103, w: 59, h: 80 },
    { v: 'light', t: 90, l: 168, w: 59, h: 80 },
    { v: 'light', t: 90, l: 233, w: 59, h: 80 },
  ],
}

/* 三个设计构想 */
const frameConcepts = [
  {
    kicker: '设计构想 1',
    em: '搜索模块',
    rest: '默认展开',
    stage: {
      w: 330,
      h: 182,
      boxes: [
        { v: 'accent', t: 0, l: 0, w: 330, h: 68 },
        { v: 'light', t: 74, l: 0, w: 330, h: 14 },
        { v: 'frame', t: 94, l: 0, w: 330, h: 88 },
        { v: 'light', t: 100, l: 38, w: 254, h: 40 },
        { v: 'light', t: 146, l: 38, w: 254, h: 24 },
      ],
    },
    adv: '提升可见性；减少页面跳出；降低学习成本',
    dis: '低频功能占用首屏空间；影响信息聚焦',
    adopted: false,
  },
  {
    kicker: '设计构想 2',
    em: '筛选栏',
    rest: '侧边栏展示',
    stage: {
      w: 330,
      h: 182,
      boxes: [
        { v: 'light', t: 0, l: 0, w: 330, h: 8 },
        { v: 'frame', t: 14, l: 0, w: 330, h: 168 },
        { v: 'accent', t: 20, l: 38, w: 66, h: 150 },
        { v: 'light', t: 20, l: 112, w: 180, h: 60 },
        { v: 'light', t: 86, l: 112, w: 180, h: 24 },
        { v: 'light', t: 116, l: 112, w: 180, h: 24 },
        { v: 'light', t: 146, l: 112, w: 180, h: 24 },
      ],
    },
    adv: '提高筛选信息拓展性；利于筛选项回显',
    dis: '挤压航班卡片展示宽度；影响页面加载',
    adopted: false,
  },
  {
    kicker: '设计构想 3',
    em: '运价卡片',
    rest: '水平排列',
    stage: {
      w: 330,
      h: 182,
      boxes: [
        { v: 'light', t: 0, l: 0, w: 330, h: 8 },
        { v: 'light', t: 14, l: 0, w: 330, h: 14 },
        { v: 'frame', t: 34, l: 0, w: 330, h: 148 },
        { v: 'light', t: 40, l: 38, w: 254, h: 44 },
        { v: 'accent', t: 90, l: 38, w: 59, h: 80 },
        { v: 'accent', t: 90, l: 103, w: 59, h: 80 },
        { v: 'accent', t: 90, l: 168, w: 59, h: 80 },
        { v: 'accent', t: 90, l: 233, w: 59, h: 80 },
      ],
    },
    adv: '与航班卡片形成对比，明确层级关系；卡片内容集中更利于阅读',
    dis: null,
    adopted: true,
  },
]

function Strategy1() {
  return (
    <section data-node-id="1:364">
      <div className="proj-strathead">
        <strong>01</strong>
        <span>页面框架重构</span>
      </div>

      {/* BEFORE */}
      <div className="p1-frame-grid">
        <p className="proj-stagelabel">Before</p>
        <div className="p1-frame-shot">
          <div className="proj-figure">
            <img src={introStep2} alt="改版前机票列表页截图" />
            <span
              className="proj-figure__patch"
              style={{ left: '92.7%', top: '77.2%', width: '6.1%', height: '23.6%' }}
            />
          </div>
          <WfStage className="wf-stage--overlay" {...annoBefore} />
        </div>
        <div className="p1-frame-side">
          <WfStage {...schemaBefore} />
          <p>各主要部分展示形式雷同，页面占比不合理，导致页面结构缺乏拓展性</p>
        </div>
      </div>
      <hr className="proj-divider" />

      {/* DESIGN */}
      <div className="p1-concept-grid">
        <p className="proj-stagelabel">Design</p>
        {frameConcepts.map((c) => (
          <div className="p1-concept" key={c.kicker}>
            <p className="p1-concept__kicker">{c.kicker}</p>
            <p className="p1-concept__title">
              <strong>{c.em}</strong>
              {c.rest}
            </p>
            <WfStage {...c.stage} />
            <dl>
              <dt>优势：</dt>
              <dd className={c.dis ? undefined : 'p1-concept__dd--tall'}>{c.adv}</dd>
              {c.dis && (
                <>
                  <dt>劣势：</dt>
                  <dd>{c.dis}</dd>
                </>
              )}
            </dl>
            <hr />
            <p className={`p1-concept__verdict${c.adopted ? ' p1-concept__verdict--adopted' : ''}`}>
              {c.adopted ? '★ 采用此构想' : '未采用此构想'}
            </p>
          </div>
        ))}
      </div>
      <hr className="proj-divider" />

      {/* AFTER */}
      <div className="p1-frame-grid">
        <p className="proj-stagelabel">After</p>
        <div className="p1-frame-shot">
          <div className="proj-figure">
            <img src={frameAfter} alt="改版后机票列表页截图" />
          </div>
          <WfStage className="wf-stage--overlay" {...annoAfter} />
        </div>
        <div className="p1-frame-side">
          <WfStage {...schemaAfter} />
        </div>
      </div>
      <div className="p1-after-notes">
        <hr />
        <dl>
          <dt>搜索模块</dt>
          <dd>在不提高页面占比的前提下，优化各业务场景信息展示</dd>
        </dl>
        <dl>
          <dt>筛选栏</dt>
          <dd>调整展示位置，提高筛选项与筛选结果（航班卡片）的关联度</dd>
        </dl>
        <dl>
          <dt>运价卡片</dt>
          <dd>采用卡片形式提高拓展性，强化航班卡片和运价卡片的从属关系</dd>
        </dl>
      </div>
      <hr className="proj-divider" />
    </section>
  )
}

/* 优先级色块示意舞台:块/标签/图/虚线全部按百分比绝对定位 */
function PriStage({ w, h, style, items }) {
  const S = (x, y, ww, hh) => ({
    left: pct(x, w),
    top: pct(y, h),
    ...(ww != null && { width: pct(ww, w) }),
    ...(hh != null && { height: pct(hh, h) }),
  })
  return (
    <div className="p1-pri-stage" style={{ aspectRatio: `${w} / ${h}`, ...style }}>
      {items.map((it, i) => {
        if (it.k === 'block')
          return <div key={i} className={`p1-pri-block p1-pri-block--${it.v}`} style={S(it.x, it.y, it.w, it.h)} />
        if (it.k === 'img')
          return (
            <div key={i} className="p1-pri-img" style={S(it.x, it.y, it.w)}>
              <img src={it.src} alt={it.alt} />
            </div>
          )
        if (it.k === 'label')
          return (
            <span
              key={i}
              className={`p1-pri-label${it.lit ? ' p1-pri-label--lit' : ''}${it.align ? ` p1-pri-label--${it.align}` : ''}`}
              style={S(it.x, it.y)}
            >
              {it.text}
            </span>
          )
        if (it.k === 'title')
          return (
            <span key={i} className={`p1-pri-title${it.s ? ' p1-pri-title--s' : ''}`} style={S(it.x, it.y)}>
              {it.text}
            </span>
          )
        if (it.k === 'desc')
          return (
            <span key={i} className="p1-pri-desc" style={S(it.x, it.y)}>
              {it.text}
            </span>
          )
        if (it.k === 'sq') return <span key={i} className={`p1-pri-sq p1-pri-sq--${it.o}`} style={S(it.x, it.y)} />
        if (it.k === 'vdash')
          return <div key={i} className="p1-pri-vdash" style={{ ...S(it.x, it.y), height: pct(it.h, h) }} />
        if (it.k === 'hdash')
          return <div key={i} className="p1-pri-hdash" style={{ ...S(it.x, it.y), width: pct(it.w, w) }} />
        return null
      })}
    </div>
  )
}

/* 目标1 · 策略02 航班卡片信息元素分区(1:480)*/

/* BEFORE:卡片元素按优先级拆解(舞台 1062×208,较内容列左溢 24px) */
const priBefore = [
  { k: 'block', v: 'a20', x: 0, y: 0, w: 282, h: 110 },
  { k: 'block', v: 'a50', x: 294, y: 0, w: 272, h: 208 },
  { k: 'block', v: 'a20', x: 578, y: 0, w: 98, h: 87 },
  { k: 'block', v: 'a50', x: 688, y: 0, w: 280, h: 110 },
  { k: 'block', v: 'a50', x: 110, y: 122, w: 172, h: 86 },
  { k: 'block', v: 'a50', x: 578, y: 106, w: 98, h: 102 },
  { k: 'block', v: 'a20', x: 688, y: 122, w: 280, h: 86 },
  { k: 'img', src: cardBeforeMask, alt: '航班卡片元素高亮拆解', x: 24, y: 52, w: 920 },
  { k: 'label', text: '航班信息', x: 24, y: 8 },
  { k: 'label', text: '行程信息', x: 306, y: 8, lit: true },
  { k: 'label', text: '详情按钮', x: 590, y: 8 },
  { k: 'label', text: '运价信息', x: 944, y: 8, lit: true, align: 'right' },
  { k: 'label', text: '航班舒适度', x: 122, y: 180, lit: true },
  { k: 'label', text: '碳排放信息', x: 590, y: 180, lit: true },
  { k: 'label', text: '运价标签', x: 944, y: 180, align: 'right' },
  { k: 'sq', o: 20, x: 980, y: 138 },
  { k: 'label', text: '低优先级', x: 1000, y: 136 },
  { k: 'sq', o: 50, x: 980, y: 182 },
  { k: 'label', text: '高优先级', x: 1000, y: 180, lit: true },
]

/* AFTER:商品陈列 / 动作唤起 分区(舞台 1156×360,左溢 118px) */
const priAfter = [
  { k: 'title', text: '商品陈列', x: 118, y: 0 },
  { k: 'title', text: '动作唤起', x: 894, y: 0, s: true },
  { k: 'desc', text: '航班行程信息、航班优势信息', x: 118, y: 52 },
  { k: 'desc', text: '运价相关信息、CTA', x: 894, y: 52 },
  { k: 'label', text: '低优先级', x: 629.5, y: 48, align: 'center' },
  { k: 'vdash', x: 630, y: 76, h: 256 },
  { k: 'hdash', x: 0, y: 195, w: 1156 },
  { k: 'block', v: 'a20', x: 94, y: 100, w: 530, h: 89 },
  { k: 'block', v: 's20', x: 636, y: 100, w: 426, h: 89 },
  { k: 'block', v: 'a50', x: 94, y: 201, w: 376, h: 106 },
  { k: 'block', v: 'a50', x: 482, y: 201, w: 142, h: 106 },
  { k: 'block', v: 's50', x: 636, y: 201, w: 270, h: 106 },
  { k: 'block', v: 's50', x: 918, y: 201, w: 144, h: 106 },
  { k: 'img', src: cardAfterMask, alt: '新版航班卡片分区高亮', x: 118, y: 152, w: 920 },
  { k: 'label', text: '航班信息', x: 118, y: 108 },
  { k: 'label', text: '运价标签', x: 1032, y: 108, align: 'right' },
  { k: 'label', text: '行程信息', x: 118, y: 279, lit: true },
  { k: 'label', text: '舒适度/碳排放', x: 494, y: 279, lit: true },
  { k: 'label', text: '运价信息', x: 648, y: 279, lit: true },
  { k: 'label', text: 'CTA', x: 1038, y: 279, lit: true, align: 'right' },
  { k: 'label', text: '高优先级', x: 629.5, y: 340, lit: true, align: 'center' },
]

function Strategy2() {
  return (
    <section data-node-id="1:480">
      <div className="proj-strathead">
        <strong>02</strong>
        <span>航班卡片信息元素分区</span>
      </div>

      {/* BEFORE */}
      <div className="p1-split">
        <p className="proj-stagelabel">Before</p>
        <div>
          <img className="p1-split__card" src={cardBefore} alt="改版前航班卡片" />
          <PriStage
            w={1062}
            h={208}
            style={{ marginLeft: '-2.312%', width: '102.312%' }}
            items={priBefore}
          />
        </div>
      </div>
      <div className="p1-after-notes">
        <hr />
        <dl>
          <dt>问题 1</dt>
          <dd>信息展示缺乏分类和主次关系</dd>
        </dl>
        <dl>
          <dt>问题 2</dt>
          <dd>信息展示空间分割不合理</dd>
        </dl>
        <dl>
          <dt>问题 3</dt>
          <dd>布局破碎造成阅读动线跳跃</dd>
        </dl>
      </div>
      <hr className="proj-divider" />

      {/* AFTER */}
      <div className="p1-split">
        <p className="proj-stagelabel">After</p>
        <div>
          <p className="p1-card-title">基于功能和信息优先级，分割卡片，创建信息结构</p>
          <img className="p1-split__card" src={cardAfter} alt="改版后航班卡片" />
          <PriStage
            w={1156}
            h={360}
            style={{ marginLeft: '-11.368%', width: '111.368%', marginTop: '32px' }}
            items={priAfter}
          />
        </div>
      </div>
      <div className="p1-after-notes">
        <hr />
        <dl>
          <dt>设计策略 1</dt>
          <dd>按照功能，在水平方向将卡片分区</dd>
        </dl>
        <dl>
          <dt>设计策略 2</dt>
          <dd>按照信息优先级，在垂直方向将卡片分区</dd>
        </dl>
        <hr style={{ marginTop: 32 }} />
        <dl className="p1-notes-wide">
          <dt>拓展性展示：</dt>
          <dd>
            <img src={cardExpand} alt="航班卡片拓展性展示" />
          </dd>
        </dl>
      </div>
      <hr className="proj-divider" />
    </section>
  )
}

/* 目标1 · 策略03 使用容器拓展页面层级(1:566)*/
function Strategy3() {
  return (
    <section data-node-id="1:566">
      <div className="proj-strathead">
        <strong>03</strong>
        <span>使用容器拓展页面层级</span>
      </div>

      {/* BEFORE:问题清单 + 用户诉求拼贴 */}
      <div className="p1-ctn-before">
        <p className="proj-stagelabel">Before</p>
        <ul className="p1-ctn-issues">
          <li>多个筛选项回显需要左右翻页查看</li>
          <li>大量运价在页面平铺展开，大幅增加页面长度，影响航班列表展示</li>
        </ul>
        <div className="p1-ctn-composite">
          <img className="p1-ctn-base" src={ctnBefore} alt="改版前:筛选栏与运价卡片的用户诉求标注" />
        </div>
      </div>
      <hr className="proj-divider" />

      {/* AFTER */}
      <div className="p1-split">
        <p className="proj-stagelabel">After</p>
        <p className="p1-card-title" style={{ marginBottom: 0 }}>
          页面展示核心筛选项和运价，弹窗展示拓展内容为页面减负
        </p>
      </div>
      <div className="p1-ctn-after">
        <div className="col-2 p1-ctn-collage">
          <img className="p1-ctn-img" src={ctnFilters} alt="筛选弹窗层叠展示" />
        </div>
        <div className="col-34 p1-ctn-composite">
          <img className="p1-ctn-base" src={ctnAfter} alt="改版后:核心筛选项与推荐运价展示" />
          <img
            className="p1-ctn-hand"
            src={handCursor}
            alt=""
            style={{ left: '58.3%', top: '15.8%' }}
          />
          <span className="p1-ctn-overlay p1-ctn-overlay--right" style={{ left: '90.1%', top: '33.7%' }}>
            ★ 推荐运价*4
          </span>
        </div>
        <p className="col-2 p1-ctn-caption">核心筛选项 + 其他</p>
        <p className="col-34 p1-ctn-caption">推荐运价 + 其他</p>
        <p className="col-2 p1-ctn-desc">
          根据用户调研和热力图分析，确立点击率最高的核心筛选项在页面展示；低频筛选项统一展示在弹窗内
        </p>
        <p className="col-34 p1-ctn-desc" style={{ maxWidth: 448 }}>
          在航班卡片下展示推荐逻辑下优先级最高的运价，在弹窗内展示其他更多运价，满足用户特别需求
        </p>
        <div className="col-2 p1-ctn-popup">
          <img className="p1-ctn-img" src={ctnPopupFilters} alt="More Filters 筛选弹窗" />
        </div>
        <div className="col-34 p1-ctn-popup">
          <img className="p1-ctn-img" style={{ width: '65.5%' }} src={ctnPopupFares} alt="Select fare 运价弹窗" />
        </div>
      </div>
    </section>
  )
}

/* 目标2 · 策略01 页面核心流程强化(1:649)*/

/* 功能分区爆炸图:同源截图裁片(crop = 稿内百分比参数直译) */
const coreFrags = [
  /* 右侧暗化底图 */
  { x: 531, y: 0, w: 507, h: 290, op: 0.2, r: 8, crop: { h: '109.31%', l: '-0.02%', t: '0', w: '100.04%' } },
  { x: 797, y: 2, w: 24, h: 14, op: 0.2, crop: { h: '2264.28%', l: '-1108.75%', t: '-14.29%', w: '2113.33%' } },
  { x: 920, y: 35, w: 76, h: 16, op: 0.4, crop: { h: '1981.25%', l: '-511.97%', t: '-218.75%', w: '667.37%' } },
  { x: 800, y: 35, w: 47, h: 16, op: 0.2, crop: { h: '1981.25%', l: '-572.55%', t: '-218.75%', w: '1079.15%' } },
  { x: 886, y: 2, w: 110, h: 14, op: 0.2, crop: { h: '2264.29%', l: '-322.82%', t: '-14.29%', w: '461.09%' } },
  { x: 938, y: 69, w: 58, h: 84, op: 1, crop: { h: '377.38%', l: '-701.9%', t: '-82.14%', w: '874.48%' } },
  { x: 573, y: 252, w: 423, h: 28, op: 1, crop: { h: '1132.14%', l: '-9.95%', t: '-900%', w: '119.91%' } },
  { x: 573, y: 157, w: 423, h: 80, op: 0.4, crop: { h: '396.25%', l: '-9.95%', t: '-196.25%', w: '119.91%' } },
  { x: 573, y: 53, w: 327, h: 100, op: 0.4, crop: { h: '317%', l: '-12.87%', t: '-53%', w: '155.11%' } },
  { x: 573, y: 35, w: 227, h: 16, op: 0.4, crop: { h: '1981.25%', l: '-18.55%', t: '-218.75%', w: '223.44%' } },
  { x: 573, y: 2, w: 220, h: 14, op: 0.4, crop: { h: '2264.29%', l: '-19.14%', t: '-14.29%', w: '230.55%' } },
]

const coreFragLabels = [
  { text: '基本功能', x: 750, y: 111 },
  { text: '进阶功能', x: 882, y: 9 },
  { text: '核心流程', x: 808, y: 280 },
  { text: '核心流程', x: 1056, y: 101 },
]

function O2Strategy1() {
  const XW = 1038
  const XH = 300
  return (
    <section data-node-id="1:649">
      <div className="proj-strathead">
        <strong>01</strong>
        <span>页面核心流程强化</span>
      </div>

      {/* BEFORE:黑白处理的现状截图 ×2 */}
      <div className="p1-bg-grid">
        <p className="proj-stagelabel">Before</p>
        <div className="proj-figure">
          <img
            src={coreBeforeA}
            alt="黑白处理的旧版列表页(视觉重心分析)"
            style={{ objectPosition: 'bottom' }}
          />
          <span
            className="proj-figure__patch"
            style={{ left: '91.7%', top: '86.8%', width: '7.3%', height: '10.7%', background: '#f9f9f9' }}
          />
        </div>
        <div className="proj-figure">
          <img
            src={coreBeforeB}
            alt="黑白处理的旧版运价展开页(视觉重心分析)"
            style={{ objectPosition: 'bottom' }}
          />
          <span
            className="proj-figure__patch"
            style={{ left: '92.7%', top: '77.9%', width: '7.3%', height: '22.1%' }}
          />
        </div>
        <p className="p1-note-right">*通过黑白处理观察视觉重心</p>
      </div>
      <div className="p1-after-notes">
        <hr />
        <dl>
          <dt>问题 1</dt>
          <dd>视觉重心分散，信息传达效率低</dd>
        </dl>
        <dl>
          <dt>问题 2</dt>
          <dd>核心操作缺乏指引，导致用户误操作率高</dd>
        </dl>
        <dl>
          <dt>问题 3</dt>
          <dd>低频功能缺少管理，占据页面重要位置展示</dd>
        </dl>
      </div>
      <hr className="proj-divider" />

      {/* AFTER:功能分级漏斗 + 分区爆炸图 */}
      <div className="p1-split" style={{ paddingBottom: 0 }}>
        <p className="proj-stagelabel">After</p>
        <p className="p1-card-title" style={{ marginBottom: 0 }}>
          建立页面功能分级模型，确保核心功能优先
        </p>
      </div>
      <div className="p1-flow-band">
        <img src={coreFunnel} alt="功能分级模型:核心流程 / 基本功能 / 进阶功能" />
      </div>
      <div className="p1-xstage" style={{ aspectRatio: `${XW} / ${XH}` }}>
        {/* 左:新版页面截图(全彩) */}
        <div
          className="p1-crop"
          style={{ left: 0, top: 0, width: pct(507, XW), height: pct(290, XH), borderRadius: 8 }}
        >
          <img
            src={coreAfter}
            alt="新版机票列表页"
            style={{ height: '109.31%', left: '-0.02%', top: 0, width: '100.04%' }}
          />
        </div>
        {/* 右:按功能分级拆分的裁片 */}
        {coreFrags.map((f, i) => (
          <div
            key={i}
            className="p1-crop"
            style={{
              left: pct(f.x, XW),
              top: pct(f.y, XH),
              width: pct(f.w, XW),
              height: pct(f.h, XH),
              opacity: f.op,
              ...(f.r && { borderRadius: f.r }),
            }}
          >
            <img src={coreAfter} alt="" style={{ height: f.crop.h, left: f.crop.l, top: f.crop.t, width: f.crop.w }} />
          </div>
        ))}
        {coreFragLabels.map((l) => (
          <span
            key={`${l.text}-${l.x}`}
            className="p1-pri-label p1-pri-label--lit p1-pri-label--right"
            style={{ left: pct(l.x, XW), top: pct(l.y, XH) }}
          >
            {l.text}
          </span>
        ))}
      </div>
      <div className="p1-after-notes" style={{ marginTop: 22, paddingBottom: 104 }}>
        <hr />
        <dl>
          <dt>核心流程</dt>
          <dd>使用按钮提高操作引导性和用户决策确定性</dd>
        </dl>
        <dl>
          <dt>基本功能</dt>
          <dd>作为页面内容主体部分在不同模块清晰展示</dd>
        </dl>
        <dl>
          <dt>进阶功能</dt>
          <dd>仅在页面保留入口，并控制页面展示比重</dd>
        </dl>
      </div>
      <hr className="proj-divider" />
    </section>
  )
}

/* 目标2 · 策略02 关键信息减轻查看依赖(1:725)*/

/* 暗化条带的同源裁切参数(稿内直译) */
const depBeforeCropTop = { h: '750%', l: '-14.07%', t: '-390.18%', w: '128.14%' }
const depBeforeCropBot = { h: '750%', l: '-14.07%', t: '-203.57%', w: '128.14%' }

/* 条带组件:定位容器 + 内部裁切/整图 */
function Strip({ x, y, w, h, W, H, src, crop, opacity, radius = 8, alt = '' }) {
  return (
    <div
      className="p1-crop"
      style={{
        left: pct(x, W),
        top: pct(y, H),
        width: pct(w, W),
        height: pct(h, H),
        opacity,
        borderRadius: radius,
      }}
    >
      {crop ? (
        <img src={src} alt={alt} style={{ height: crop.h, left: crop.l, top: crop.t, width: crop.w }} />
      ) : (
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'static' }} />
      )}
    </div>
  )
}

const depAfterRows = [
  { y: 28, dt: '直飞航班', dd: '使用正向色凸显航班优势' },
  { y: 168, dt: '一次中转', dd: '展示中转城市 & 时间，便于快速获取重要航班信息' },
  { y: 308, dt: '多次中转', dd: '优先展示中转次数，便于用户筛选航班' },
  { y: 448, dt: '包含中转特别提醒', dd: '引导用户打开浮层查看内容' },
]

const depStrips = [depStrip1, depStrip2, depStrip3, depStrip4]

function O2Strategy2() {
  /* BEFORE 舞台 1440×330,AFTER 舞台 1440×616 */
  const BW = 1440
  const BH = 330
  const AH = 616
  return (
    <section data-node-id="1:725">
      <div className="proj-strathead">
        <strong>02</strong>
        <span>关键信息减轻查看依赖</span>
      </div>

      {/* BEFORE:暗化旧卡片 + 放大镜面板 */}
      <div className="p1-spot" style={{ aspectRatio: `${BW} / ${BH}` }}>
        <p className="proj-stagelabel" style={{ left: pct(24, BW), top: 0 }}>
          Before
        </p>
        <Strip x={614} y={32} w={1180} h={112} W={BW} H={BH} src={depBeforeTop} crop={depBeforeCropTop} opacity={0.4} alt="旧版航班卡片(暗化)" />
        <Strip x={614} y={154} w={1180} h={112} W={BW} H={BH} src={depBeforeBot} crop={depBeforeCropBot} opacity={0.4} alt="旧版航班卡片(暗化)" />
        <div
          className="p1-spot-panel"
          style={{ left: pct(938, BW), top: 0, width: pct(390, BW), height: pct(298, BH) }}
        >
          <Strip x={-325} y={31} w={1180} h={112} W={390} H={298} src={depBeforeTop} crop={depBeforeCropTop} alt="旧版卡片中部放大:外显信息不足" />
          <Strip x={-325} y={153} w={1180} h={112} W={390} H={298} src={depBeforeBot} crop={depBeforeCropBot} alt="旧版卡片中部放大:依赖浮层查看" />
        </div>
      </div>
      <hr className="p1-spot-rule" />
      <p className="p1-spot-note">外显信息不足，过分依赖浮层（点击打开）提供必要信息，如中转时间等</p>
      <hr className="proj-divider" style={{ marginTop: 64 }} />

      {/* AFTER:四类航班的关键信息外显 + 放大镜面板 */}
      <div className="p1-split" style={{ paddingBottom: 0 }}>
        <p className="proj-stagelabel">After</p>
        <p className="p1-card-title" style={{ marginBottom: 0 }}>
          外显航班关键信息，缩短查看路径
        </p>
      </div>
      <div className="p1-spot" style={{ aspectRatio: `${BW} / ${AH}` }}>
        {depAfterRows.map((row) => (
          <div key={row.dt} style={{ display: 'contents' }}>
            <hr
              className="p1-spot-row-rule"
              style={{ left: pct(24, BW), top: pct(row.y, AH), width: pct(566, BW) }}
            />
            <span className="p1-spot-dt" style={{ left: pct(24, BW), top: pct(row.y + 32, AH) }}>
              {row.dt}
            </span>
            <span
              className="p1-spot-dd"
              style={{ left: pct(378, BW), top: pct(row.y + 32, AH), width: pct(212, BW) }}
            >
              {row.dd}
            </span>
          </div>
        ))}
        {depStrips.map((src, i) => (
          <Strip
            key={i}
            x={614}
            y={32 + i * 140}
            w={1180}
            h={132}
            W={BW}
            H={AH}
            src={src}
            opacity={0.4}
            radius={0}
            alt="新版航班卡片(暗化)"
          />
        ))}
        <div
          className="p1-spot-panel"
          style={{ left: pct(622, BW), top: 0, width: pct(440, BW), height: pct(616, AH) }}
        >
          {depStrips.map((src, i) => (
            <Strip
              key={i}
              x={-9}
              y={31 + i * 140}
              w={1180}
              h={132}
              W={440}
              H={616}
              src={src}
              radius={0}
              alt="新版航班卡片左侧放大:关键信息外显"
            />
          ))}
        </div>
      </div>
      <hr className="proj-divider" style={{ marginTop: 104 }} />
    </section>
  )
}

/* 目标2 · 策略03 卡片交互方式规范化(1:764)
   交互区标注合成图 = 整屏导出后 CSS 切片;文字/图例/分割线保持真实元素 */

/* 整屏切片:(x,y) 为舞台内摆放位置,(sx,sy) 为 1440×1738 全图内的裁切原点 */
function IntSlice({ x, y, w, h, W, H, sx, sy }) {
  return (
    <div
      className="p1-crop"
      style={{ left: pct(x, W), top: pct(y, H), width: pct(w, W), height: pct(h, H), borderRadius: 0 }}
    >
      <img
        src={interactScreen}
        alt="卡片交互区标注"
        style={{ width: pct(1440, w), left: pct(-sx, w), top: pct(-sy, h) }}
      />
    </div>
  )
}

function O2Strategy3() {
  const W = 1440
  return (
    <section data-node-id="1:764">
      <div className="proj-strathead">
        <strong>03</strong>
        <span>卡片交互方式规范化</span>
      </div>

      {/* BEFORE:问题清单 + 交互区标注(切片) */}
      <div className="p1-spot" style={{ aspectRatio: `${W} / 444` }}>
        <p className="proj-stagelabel" style={{ left: pct(24, W), top: 0 }}>
          Before
        </p>
        {[
          { y: 0, text: '点击入口分散且存在功能重叠，干扰用户决策' },
          { y: 88, text: '可交互（点击/悬停）区域和层级不清' },
          { y: 176, text: '缺少交互提示，难以形成用户预期' },
        ].map((row) => (
          <div key={row.y} style={{ display: 'contents' }}>
            <hr
              className="p1-spot-row-rule"
              style={{ left: pct(378, W), top: pct(row.y, 444), width: pct(330, W) }}
            />
            <span
              className="p1-spot-dd"
              style={{ left: pct(378, W), top: pct(row.y + 32, 444), width: pct(330, W) }}
            >
              {row.text}
            </span>
          </div>
        ))}
        <span className="p1-pri-sq p1-pri-sq--sec p1-pri-sq--40" style={{ left: pct(659, W), top: pct(318, 444) }} />
        <span className="p1-pri-label" style={{ left: pct(679, W), top: pct(316, 444) }}>点击</span>
        <span className="p1-pri-sq p1-pri-sq--40" style={{ left: pct(659, W), top: pct(362, 444) }} />
        <span className="p1-pri-label" style={{ left: pct(679, W), top: pct(360, 444) }}>悬停</span>
        <IntSlice x={708} y={0} w={708} h={400} W={W} H={444} sx={708} sy={160} />
      </div>
      <hr className="proj-divider" />

      {/* AFTER:规则说明 + 交互区标注(切片) */}
      <div className="p1-spot" style={{ aspectRatio: `${W} / 520` }}>
        <p className="proj-stagelabel" style={{ left: pct(24, W), top: 0 }}>
          After
        </p>
        <p className="p1-int-title" style={{ left: pct(378, W), top: 0 }}>
          明确卡片交互区域和规则，强化体验一致性
        </p>
        {[
          { y: 108, text: '归纳功能，精简点击入口数量' },
          { y: 196, text: '明确点击和悬停交互的层级' },
        ].map((row) => (
          <div key={row.y} style={{ display: 'contents' }}>
            <hr
              className="p1-spot-row-rule"
              style={{ left: pct(378, W), top: pct(row.y, 520), width: pct(330, W) }}
            />
            <span
              className="p1-spot-dd"
              style={{ left: pct(378, W), top: pct(row.y + 32, 520), width: pct(274, W) }}
            >
              {row.text}
            </span>
          </div>
        ))}
        <span className="p1-spot-dt" style={{ left: pct(378, W), top: pct(284, 520) }}>
          点击：主流程操作，页面跳转 / 弹窗打开
        </span>
        <span className="p1-spot-dt" style={{ left: pct(378, W), top: pct(324, 520) }}>
          悬停：页面内辅助信息展示
        </span>
        <span className="p1-pri-sq p1-pri-sq--sec p1-pri-sq--40" style={{ left: pct(659, W), top: pct(426, 520) }} />
        <span className="p1-pri-label" style={{ left: pct(679, W), top: pct(424, 520) }}>点击</span>
        <span className="p1-pri-sq p1-pri-sq--40" style={{ left: pct(659, W), top: pct(470, 520) }} />
        <span className="p1-pri-label" style={{ left: pct(679, W), top: pct(468, 520) }}>悬停</span>
        <IntSlice x={708} y={108} w={708} h={380} W={W} H={520} sx={708} sy={776} />
      </div>
      <hr className="p1-inset-rule" />

      {/* 点击入口指向性文案 */}
      <div className="p1-spot" style={{ aspectRatio: `${W} / 152`, marginTop: 0 }}>
        <p className="p1-int-note" style={{ left: pct(378, W), top: pct(32, 152), width: pct(274, W) }}>
          全部<strong className="em-s">点击</strong>入口具备清晰的指向性文案
        </p>
        <IntSlice x={724} y={24} w={696} h={104} W={W} H={152} sx={724} sy={1212} />
      </div>
      <hr className="p1-inset-rule" />

      {/* 统一悬浮提示浮层 */}
      <div className="p1-spot" style={{ aspectRatio: `${W} / 302`, marginTop: 0 }}>
        <p className="p1-int-note" style={{ left: pct(378, W), top: pct(32, 302), width: pct(274, W) }}>
          统一<strong className="em-a">悬浮</strong>提示浮层，保持交互一致性
        </p>
        <IntSlice x={724} y={24} w={696} h={278} W={W} H={302} sx={724} sy={1364} />
      </div>
      <div style={{ height: 96 }} />
    </section>
  )
}

/* 目标3 · 策略01 航班优势信息强化(1:919)*/

/* 旧卡片截图的两种裁切(同源) */
const advCropTop = { h: '750%', l: '-14.07%', t: '-203.57%', w: '128.14%' }
const advCropBot = { h: '750%', l: '-14.07%', t: '-307.14%', w: '128.14%' }

/* 小药丸放大镜:内部两条同源条带 */
function AdvPill({ x, y, w, h, W, H, innerX, innerTops, crops, imgs }) {
  return (
    <div className="p1-spot-panel" style={{ left: pct(x, W), top: pct(y, H), width: pct(w, W), height: pct(h, H) }}>
      {innerTops.map((t, i) => (
        <Strip
          key={i}
          x={innerX}
          y={t}
          w={1180}
          h={crops ? 112 : 132}
          W={w}
          H={h}
          src={imgs ? imgs[i] : advSrc}
          crop={crops ? crops[i] : undefined}
          radius={crops ? 8 : 0}
        />
      ))}
    </div>
  )
}

const advChipIcons = {
  gray: [icMealGray, icWifiGray, icWifi2Gray, icChargeGray],
  green: [icMealGreen, icWifiGreen, icWifi2Green, icChargeGreen],
  mixed: [icMealGreen, icWifiGreen, icWifi2Gray, icChargeGreen],
}

function O3Strategy1() {
  const W = 1440
  const BH = 416
  const AH = 771
  return (
    <section data-node-id="1:919">
      <div className="proj-strathead">
        <strong>01</strong>
        <span>航班优势信息强化</span>
      </div>

      {/* BEFORE:徽标散落的旧卡片(暗化)+ 4 个药丸放大镜 */}
      <div className="p1-spot" style={{ aspectRatio: `${W} / ${BH}` }}>
        <p className="proj-stagelabel" style={{ left: pct(24, W), top: 0 }}>
          Before
        </p>
        <Strip x={496} y={0} w={1180} h={112} W={W} H={BH} src={advSrc} crop={advCropTop} opacity={0.4} alt="旧版航班卡片(暗化)" />
        <Strip x={496} y={120} w={1180} h={112} W={W} H={BH} src={advSrc} crop={advCropBot} opacity={0.4} alt="旧版航班卡片(暗化)" />
        <AdvPill x={598} y={76} w={110} h={32} W={W} H={BH} innerX={-103} innerTops={[-77, 43]} crops={[advCropTop, advCropBot]} />
        <AdvPill x={598} y={198} w={110} h={32} W={W} H={BH} innerX={-103} innerTops={[-199, -79]} crops={[advCropTop, advCropBot]} />
        <AdvPill x={1206} y={64} w={120} h={32} W={W} H={BH} innerX={-711} innerTops={[-65, 55]} crops={[advCropTop, advCropBot]} />
        <AdvPill x={1206} y={184} w={120} h={32} W={W} H={BH} innerX={-711} innerTops={[-185, -65]} crops={[advCropTop, advCropBot]} />
        <hr className="p1-spot-row-rule" style={{ left: pct(496, W), top: pct(264, BH), width: pct(920, W) }} />
        <span className="p1-spot-dt" style={{ left: pct(496, W), top: pct(296, BH) }}>航班舒适度信息</span>
        <span className="p1-spot-dt" style={{ left: pct(968, W), top: pct(296, BH) }}>碳排放信息</span>
        <span className="p1-spot-dd" style={{ left: pct(496, W), top: pct(328, BH) }}>
          仅展示包含服务，用户对优势航班缺乏感知
        </span>
        <span className="p1-spot-dd" style={{ left: pct(968, W), top: pct(328, BH) }}>
          孤立展示，位置突兀不易理解
        </span>
      </div>
      <hr className="proj-divider" />

      {/* AFTER:统一后的优势徽标(暗化)+ 高亮竖窗 + 徽标样例 */}
      <div className="p1-spot" style={{ aspectRatio: `${W} / ${AH}` }}>
        <p className="proj-stagelabel" style={{ left: pct(24, W), top: 0 }}>
          After
        </p>
        <Strip x={496} y={32} w={1180} h={132} W={W} H={AH} src={advStripA} opacity={0.4} radius={0} alt="新版航班卡片(暗化)" />
        <Strip x={496} y={172} w={1180} h={132} W={W} H={AH} src={advStripB} opacity={0.4} radius={0} alt="新版航班卡片(暗化)" />
        <AdvPill x={964} y={0} w={160} h={336} W={W} H={AH} innerX={-469} innerTops={[31, 171]} imgs={[advStripA, advStripB]} />
        <hr className="p1-spot-row-rule" style={{ left: pct(496, W), top: pct(400, AH), width: pct(920, W) }} />
        <span className="p1-int-title" style={{ left: pct(496, W), top: pct(432, AH) }}>集中展示区域</span>
        <span className="p1-int-title" style={{ left: pct(968, W), top: pct(432, AH) }}>统一展示方式</span>
        <span className="p1-spot-dt" style={{ left: pct(496, W), top: pct(508, AH), width: pct(330, W) }}>
          形成视觉聚焦，方便用户对比航班的优势信息，快速决策
        </span>
        <span className="p1-spot-dt" style={{ left: pct(968, W), top: pct(508, AH), width: pct(330, W) }}>
          仅使用颜色提示优势信息，确保用户认知的一致性，放大航班优势
        </span>
        <span className="p1-adv-chip p1-adv-chip--gray" style={{ left: pct(968, W), top: pct(588, AH), width: pct(94, W) }}>
          8% CO2e
        </span>
        <span className="p1-adv-chip p1-adv-chip--green" style={{ left: pct(1086, W), top: pct(588, AH), width: pct(94, W) }}>
          -27% CO2e
        </span>
        {[
          { x: 968, icons: 'gray' },
          { x: 1086, icons: 'green' },
          { x: 1206, icons: 'mixed' },
        ].map((chip) => (
          <span
            key={chip.x}
            className="p1-adv-chip p1-adv-chip--gray"
            style={{ left: pct(chip.x, W), top: pct(643.5, AH), width: pct(94, W) }}
          >
            {advChipIcons[chip.icons].map((src, i) => (
              <img key={i} src={src} alt="" />
            ))}
          </span>
        ))}
      </div>
      <hr className="proj-divider" />
      <div style={{ height: 40 }} />
    </section>
  )
}

function Project1() {
  return (
    <>
      <Hero />
      <Background />
      <Introduction />
      <Problem />
      <Objectives />
      <ObjectiveOpener
        nodeId="1:344"
        heading="Objective No.1"
        goal="提升拓展性"
        cnTitle="优化信息展示结构"
        enSub="Scalable Structure"
        strategies={['页面框架重构', '航班卡片信息元素分区', '使用容器拓展页面层级']}
      />
      <Strategy1 />
      <Strategy2 />
      <Strategy3 />
      <ObjectiveOpener
        nodeId="1:629"
        heading="Objective No.2"
        goal="提升可用性"
        cnTitle="交互链路提效"
        enSub="Interaction Flow"
        strategies={['页面核心流程强化', '关键信息减轻查看依赖', '卡片交互方式规范化']}
      />
      <O2Strategy1 />
      <O2Strategy2 />
      <O2Strategy3 />
      <ObjectiveOpener
        nodeId="1:902"
        heading="Objective No.3"
        goal="提升可用性"
        cnTitle="强化关键信息感知"
        enSub="Information Visibility"
        strategies={['航班优势信息强化', '多运价信息对比效率提升']}
      />
      <O3Strategy1 />
      {/* TODO: 目标3 最后内容屏(1:1009) */}
      {/* TODO: 目标3(1:901) */}
      {/* TODO: 对比&总结(1:1045) */}
    </>
  )
}

export default Project1
