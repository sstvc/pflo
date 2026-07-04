import '../../styles/project.css'

import bgOldListA from '../../assets/projects/p1/bg-old-list-a.png'
import bgOldListB from '../../assets/projects/p1/bg-old-list-b.png'
import introStep1 from '../../assets/projects/p1/intro-step1.png'
import introStep2 from '../../assets/projects/p1/intro-step2.png'
import introStep3 from '../../assets/projects/p1/intro-step3.png'
import problemOldPage from '../../assets/projects/p1/problem-old-page.png'
import frameAfter from '../../assets/projects/p1/frame-after.png'

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
      {/* TODO: 目标1 其余子屏(1:480 / 1:566) */}
      {/* TODO: 目标2(1:628) */}
      {/* TODO: 目标3(1:901) */}
      {/* TODO: 对比&总结(1:1045) */}
    </>
  )
}

export default Project1
