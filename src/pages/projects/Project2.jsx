import { Fragment } from 'react'

import '../../styles/project.css'

import {
  IntSlice,
  makeAt,
  ObjectiveOpener,
  pct,
  ProjectHero,
  SectionHeading,
} from '../../components/figma/index.js'

import d73Screen from '../../assets/projects/p2/d73-screen.png'
import hof1 from '../../assets/projects/p2/d58-hof-1.svg'
import hof2 from '../../assets/projects/p2/d58-hof-2.svg'
import hof3 from '../../assets/projects/p2/d58-hof-3.svg'
import hof4 from '../../assets/projects/p2/d58-hof-4.svg'
import hof5 from '../../assets/projects/p2/d58-hof-5.svg'
import hof6 from '../../assets/projects/p2/d58-hof-6.svg'
import iconPc from '../../assets/projects/p2/d58-icon-pc.svg'
import iconPhone from '../../assets/projects/p2/p2-icon-phone.svg'
import d59Bars from '../../assets/projects/p2/d59-bars.svg'
import d59Img1 from '../../assets/projects/p2/d59-img1.png'
import d59Img12 from '../../assets/projects/p2/d59-img12.png'
import d59Img2 from '../../assets/projects/p2/d59-img2.png'
import d63FormOs from '../../assets/projects/p2/d63-form-os.png'
import d63InfoOs from '../../assets/projects/p2/d63-info-os.png'
import d63Lang1 from '../../assets/projects/p2/d63-lang1.png'
import d63Lang2 from '../../assets/projects/p2/d63-lang2.png'
import d63Lang3 from '../../assets/projects/p2/d63-lang3.png'
import d63SchemaCn from '../../assets/projects/p2/d63-schema-cn.svg'
import d63SchemaOs from '../../assets/projects/p2/d63-schema-os.svg'
import d64Arrow from '../../assets/projects/p2/d64-arrow.svg'
import d64Caret from '../../assets/projects/p2/d64-caret.svg'
import d64Cursor from '../../assets/projects/p2/d64-cursor.svg'
import d64Hover from '../../assets/projects/p2/d64-hover.png'
import d64Korean from '../../assets/projects/p2/d64-korean.png'
import d64Popup from '../../assets/projects/p2/d64-popup.png'
import d64TableWide from '../../assets/projects/p2/d64-table-wide.png'
import d66Cursor from '../../assets/projects/p2/d66-cursor.svg'
import d66SelectOs from '../../assets/projects/p2/d66-select-os.png'
import d66TripCn from '../../assets/projects/p2/d66-trip-cn.png'
import d66TripOs1 from '../../assets/projects/p2/d66-trip-os1.png'
import d66TripOs2 from '../../assets/projects/p2/d66-trip-os2.png'
import d66WedgeA from '../../assets/projects/p2/d66-wedge-a.svg'
import d66WedgeB from '../../assets/projects/p2/d66-wedge-b.svg'
import d67A1 from '../../assets/projects/p2/d67-a1.png'
import d67A2 from '../../assets/projects/p2/d67-a2.png'
import d67A3 from '../../assets/projects/p2/d67-a3.png'
import d67A4 from '../../assets/projects/p2/d67-a4.png'
import d67A5 from '../../assets/projects/p2/d67-a5.png'
import d67A6 from '../../assets/projects/p2/d67-a6.png'
import d67A7 from '../../assets/projects/p2/d67-a7.png'
import d67B1 from '../../assets/projects/p2/d67-b1.png'
import d67B2 from '../../assets/projects/p2/d67-b2.png'
import d67B3 from '../../assets/projects/p2/d67-b3.png'
import d67B4 from '../../assets/projects/p2/d67-b4.png'
import d67B5 from '../../assets/projects/p2/d67-b5.png'
import d67B6 from '../../assets/projects/p2/d67-b6.png'
import d67B7 from '../../assets/projects/p2/d67-b7.png'
import d67IconPc from '../../assets/projects/p2/d67-icon-pc.svg'
import d77WordLaunch from '../../assets/projects/p2/d77-word-launch.svg'
import d77WordOverseas from '../../assets/projects/p2/d77-word-overseas.svg'
import d77WordTravel from '../../assets/projects/p2/d77-word-travel.svg'
import d59Img2043 from '../../assets/projects/p2/d59-img2043.png'
import d61Bars from '../../assets/projects/p2/d61-bars.svg'
import d61Tips from '../../assets/projects/p2/d61-tips.png'
import d59Img5 from '../../assets/projects/p2/d59-img5.png'
import d62Avatar from '../../assets/projects/p2/d62-avatar.svg'
import d62Dialog from '../../assets/projects/p2/d62-dialog.png'
import d62FlowBack from '../../assets/projects/p2/d62-flow-back.svg'
import d62FlowLong from '../../assets/projects/p2/d62-flow-long.svg'
import d62FlowShort from '../../assets/projects/p2/d62-flow-short.svg'
/* 申请页的两张截图被多个子屏共用(md5 相同),故不带屏号:
   折叠态 D-59 + D-62,表单上半 D-59 + D-61,表单下半 D-59 + D-63,
   单据列表 D-62 + D-64,中国站整页 D-63 + D-66 */
import p2ApplyCollapsed from '../../assets/projects/p2/p2-apply-collapsed.png'
import p2ApplyForm from '../../assets/projects/p2/p2-apply-form.png'
import p2ApplyFormLower from '../../assets/projects/p2/p2-apply-form-lower.png'
import p2CnPage from '../../assets/projects/p2/p2-cn-page.png'
import p2List from '../../assets/projects/p2/p2-list.png'
import d59Rect303 from '../../assets/projects/p2/d59-rect303.svg'
import d59Rect304 from '../../assets/projects/p2/d59-rect304.svg'
import d59Rect305 from '../../assets/projects/p2/d59-rect305.svg'
import d59Rect322 from '../../assets/projects/p2/d59-rect322.svg'

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

/* D-58 · DESIGN PRINCIPLES(高 1685;标题块 96 在舞台外 → 舞台 1589)
   一屏两段:「差异因素」中国站/海外站三组对照,「共性基础」收在最后。
   除霍夫斯泰德柱群与两枚设备图标是导出的 SVG,其余全部是真实文字/CSS。 */
const prAt = makeAt(1440, 1589)
const P = (y) => y - 96 // 稿中绝对 y → 舞台内 y

/* 文化维度图:6 组柱子(导出 SVG)+ 6 个真实文字标签,自成一个 684×168 小舞台 */
const hofAt = makeAt(684, 168)
const hofBars = [
  [hof1, '权力距离', 0, 0, 94, 140],
  [hof2, '个人主义', 118, 75.6, 94, 64.4],
  [hof3, '男性化', 236, 7, 94, 133],
  [hof4, '不确定性规避', 354, 11.2, 94, 128.8],
  [hof5, '长期导向', 472, 0, 94, 140],
  [hof6, '放任主义', 590, 58.8, 94, 79.8],
]
const hofLegend = [
  ['中国', 'var(--accent-secondary)'],
  ['日本', 'var(--series-jp)'],
  ['韩国', 'var(--series-kr)'],
  ['泰国', 'var(--series-th)'],
  ['马来西亚', 'var(--series-my)'],
]

/* 语言 chip:[文案, 中心 x, 顶 y, 框宽(null=按内容), 是否 70% 透明] */
const langPills = [
  ['简体中文', 720.5, 876, 65, false],
  ['English', 1209, 848, 62, false],
  ['Tiếng Việt', 1293, 848, 82, true],
  ['한국어', 1067, 848, 48, true],
  ['ภาษาไทย', 1134.5, 848, null, true],
  ['简体中文', 1229.5, 876, 65, false],
  ['Deutsch', 1088, 876, 68, true],
  ['日本語', 1159.5, 876, 51, false],
  ['Bahasa Melayu', 1333, 876, 118, true],
  ['Français', 1287, 904, 70, true],
  ['Nederlands', 1038.5, 904, 93, true],
  ['Español', 1130, 904, 66, true],
  ['繁體中文', 1207.5, 904, 65, false],
]

/* 三组「中国站 / 海外站」对照:分割线 y、小标题 y、标题 */
const compareRows = [
  [704, 736, '界面语言'],
  [980, 1012, '业务熟练度'],
  [1164, 1196, '使用平台'],
]

function DesignPrinciples() {
  return (
    <section data-screen="D-58">
      <SectionHeading>DESIGN PRINCIPLES</SectionHeading>
      <div className="p2-stage" style={{ aspectRatio: `${1440} / ${1589}` }}>
        <p className="proj-kicker" style={prAt(24, P(160))}>
          设计要点
        </p>
        <p className="p2-body" style={prAt(496, P(160), 448)}>
          将中国站功能国际化并非简单的文本翻译，亦非重新发明轮子。我从中国站和海外站的“差异因素”与“共性基础”出发明确了设计方向
        </p>
        <hr className="p2-rule" style={prAt(24, P(296), 1392)} />

        {/* ---- 差异因素 ---- */}
        <p className="proj-kicker" style={prAt(24, P(328))}>
          差异因素
        </p>
        <p className="p2-subhead" style={prAt(260, P(328))}>
          用户背景
        </p>
        <p className="p2-body" style={prAt(496, P(328), 448)}>
          不同文化背景的用户有不同的特点，通过调研挖掘中国用户与海外用户的代表性差异
        </p>
        <hr className="p2-rule" style={prAt(496, P(408), 920)} />
        <p className="p2-body" style={prAt(496, P(440))}>
          调研案例：霍夫斯泰德文化理论模型
        </p>

        <div className="p2-hof" style={prAt(496, P(496), 684, 168)}>
          {hofBars.map(([src, label, x, y, w, h]) => (
            <Fragment key={label}>
              <div style={hofAt(x, y, w, h)}>
                <img src={src} alt="" />
              </div>
              <span className="p2-hof-label" style={hofAt(x, 148, w)}>
                {label}
              </span>
            </Fragment>
          ))}
        </div>
        <ul className="p2-legend" style={prAt(1204, P(575), 212)}>
          {hofLegend.map(([name, color]) => (
            <li key={name}>
              <i style={{ '--series': color }} />
              {name}
            </li>
          ))}
        </ul>

        {compareRows.map(([ruleY, headY, title]) => (
          <Fragment key={title}>
            <hr className="p2-rule" style={prAt(260, P(ruleY), 1156)} />
            <p className="p2-subhead" style={prAt(260, P(headY))}>
              {title}
            </p>
            <p className="p2-body p2-body--dim" style={prAt(496, P(headY))}>
              中国站
            </p>
            <p className="p2-body p2-body--dim" style={prAt(968, P(headY))}>
              海外站
            </p>
          </Fragment>
        ))}

        {/* 界面语言 */}
        <p className="p2-body" style={prAt(496, P(768), 330)}>
          界面语言主要为简体中文
        </p>
        <p className="p2-body" style={prAt(968, P(768), 330)}>
          总计将超过10种语言
        </p>
        <div className="p2-dashbox" style={prAt(496, P(824), 448, 124)} />
        <div className="p2-dashbox" style={prAt(968, P(824), 448, 124)} />
        {langPills.map(([text, cx, y, w, faded], i) => (
          <span
            className={`p2-pill${faded ? ' p2-pill--faded' : ''}`}
            key={`${text}-${i}`}
            style={{ ...prAt(cx, P(y), w ?? undefined), height: pct(20, 1589) }}
          >
            {text}
          </span>
        ))}

        {/* 业务熟练度:两个等高容器,内部色块四周内缩 3 */}
        <p className="p2-body" style={prAt(496, P(1044), 330)}>
          长期客户居多，大多已深谙商旅审批流程页面
        </p>
        <p className="p2-body" style={prAt(968, P(1044), 330)}>
          新签海外客户对于携程商旅审批流程并不熟悉
        </p>
        <div className="p2-gauge" style={prAt(850, P(1012), 94, 120)} />
        <div className="p2-gauge" style={prAt(1322, P(1012), 94, 120)} />
        <div className="p2-gauge-fill" style={prAt(853, P(1032), 88, 97)} />
        <div className="p2-gauge-fill" style={prAt(1325, P(1092), 88, 37)} />

        {/* 使用平台:App / PC 占比条,合计 448 宽,中间 4 留缝 */}
        <p className="p2-body" style={prAt(496, P(1228))}>
          App访问量占绝大多数
        </p>
        <p className="p2-body" style={prAt(968, P(1228))}>
          PC端访问量占据明显优势
        </p>
        <div className="p2-prog" style={prAt(496, P(1284), 340, 64)} />
        <div className="p2-prog p2-prog--sec" style={prAt(840, P(1284), 104, 64)} />
        <div className="p2-prog" style={prAt(968, P(1284), 68, 64)} />
        <div className="p2-prog p2-prog--sec" style={prAt(1040, P(1284), 376, 64)} />
        <img src={iconPhone} alt="" style={prAt(508, P(1296), 28, 40)} />
        <img src={iconPc} alt="" style={prAt(888, P(1299), 44, 34)} />
        <img src={iconPhone} alt="" style={prAt(980, P(1296), 28, 40)} />
        <img src={iconPc} alt="" style={prAt(1360, P(1299), 44, 34)} />
        <p className="p2-pctnum" style={prAt(552, P(1294))}>
          &gt;75%
        </p>
        {/* 稿中这句是右对齐的(贴在设备图标左侧),故按右边距定位 */}
        <p
          className="p2-pctnum"
          style={{ right: pct(96, 1440), top: pct(P(1294), 1589), textAlign: 'right' }}
        >
          &gt;85%
        </p>

        {/* ---- 共性基础 ---- */}
        <hr className="p2-rule" style={prAt(24, P(1412), 1392)} />
        <p className="proj-kicker" style={prAt(24, P(1444))}>
          共性基础
        </p>
        <p className="p2-subhead" style={prAt(260, P(1444))}>
          底层逻辑
        </p>
        <hr className="p2-rule" style={prAt(260, P(1512), 1156)} />
        <p className="p2-subhead" style={prAt(260, P(1544))}>
          目标：用户高效、准确的完成出差申请单的申请和使用
        </p>
      </div>
    </section>
  )
}

/* D-71 · DESIGN OBJECTIVES(高 736;标题块 96 在舞台外 → 舞台 640)
   三栏总览,纯文字 + CSS。每栏固定三条分割线(400/488/576),
   即使该栏只有两条策略,末尾那条也照留 —— 稿中就是这样。 */
const objAt = makeAt(1440, 640)
const O = (y) => y - 96 // 稿中绝对 y → 舞台内 y

const objectives = [
  [
    '01',
    378,
    '使用体验优化',
    ['拆解表单，简化复杂任务', '新增草稿功能，解决用户痛点', '增加提示，提供即时帮助'],
  ],
  ['02', 732, '多语言与本地化适配', ['按多语言要求调整字段展示', '制定特殊场景字段展示规则']],
  ['03', 1086, '高效推进与体验保障', ['基于固有逻辑，通过前端展示优化体验', 'PC & App 分批上线']],
]

function DesignObjectives() {
  return (
    <section data-screen="D-71">
      <SectionHeading>DESIGN OBJECTIVES</SectionHeading>
      <div className="p2-stage" style={{ aspectRatio: `${1440} / ${640}` }}>
        <p className="proj-kicker" style={objAt(24, O(160))}>
          设计目标
        </p>
        <div className="p2-fill" style={objAt(24, O(228), 40, 72)} />

        {objectives.map(([num, x, title, items]) => (
          <Fragment key={num}>
            <p className="p2-objnum" style={objAt(x, O(144))}>
              {num}
            </p>
            <p className="p2-objtitle" style={objAt(x, O(324))}>
              {title}
            </p>
            {[400, 488, 576].map((y) => (
              <hr className="p2-rule" key={y} style={objAt(x, O(y), 330)} />
            ))}
            {items.map((s, i) => (
              <p className="p2-objitem" key={s} style={objAt(x, O(432 + i * 88))}>
                {s}
              </p>
            ))}
          </Fragment>
        ))}
      </div>
    </section>
  )
}

/* D-59 · 策略 01「拆解表单，简化复杂任务」(高 2428)
   这类策略详情屏**没有区块大标题**,舞台就是整块画板。
   结构:顶部策略名 → PROBLEM(两条现象 + 霍夫斯泰德柱图)
        → DESIGN 01 步骤条 → DESIGN 02 表单折叠。
   截图一律「定框 + 内部 <img> 百分比取景」,不预裁图。 */
const d59At = makeAt(1440, 2428)

/* 裁切框:box 是框在稿中的位置尺寸,img 是内部图相对框的百分比偏移 */
function Crop({ src, alt, box, img, radius }) {
  return (
    <div className="p2-crop" style={{ ...box, borderRadius: radius }}>
      <img src={src} alt={alt} style={img} />
    </div>
  )
}

/* 表单折叠对比:右栏 5 张小卡 y 递增 51,左栏两张大卡 */
const foldRight = [1900, 1951, 2002, 2053, 2104]

function Strategy01() {
  return (
    <section data-screen="D-59">
      <div className="p2-stage" style={{ aspectRatio: `${1440} / ${2428}` }}>
        {/* ---- 顶部策略名 ---- */}
        <p className="p2-strat-num" style={d59At(24, 28)}>
          01
        </p>
        <h3 className="p2-strat-title" style={d59At(74, 24)}>
          拆解表单，简化复杂任务
        </h3>

        {/* ---- PROBLEM ---- */}
        <p className="p2-eyebrow" style={d59At(24, 160)}>
          PROBLEM
        </p>
        <hr className="p2-rule" style={d59At(378, 160, 330)} />
        <p className="p2-body" style={d59At(378, 192, 330)}>
          申请页表单流程长
        </p>
        <p className="p2-body p2-body--dim" style={d59At(378, 224, 330)}>
          对于不熟悉流程的海外用户任务压力大，难以定位当前进度
        </p>
        <hr className="p2-rule" style={d59At(378, 304, 330)} />
        <p className="p2-body" style={d59At(378, 336, 330)}>
          存在超长表单场景
        </p>
        <p className="p2-body p2-body--dim" style={d59At(378, 368, 330)}>
          每个出差申请单中行程添加上限为20个，因此极易出现超长表单
        </p>

        {/* 超长表单示意:实心柱 + 两截撕口色块 */}
        <div className="p2-fill" style={d59At(732, 160, 94, 244)} />
        <p className="p2-label" style={d59At(750, 172)}>
          基础信息
        </p>
        <img src={d59Rect304} alt="" style={d59At(732, 420, 94, 66)} />
        <img
          src={d59Rect305}
          alt=""
          style={{ ...d59At(732, 480, 94, 40), transform: 'rotate(180deg)' }}
        />
        <p
          className="p2-label"
          style={{ ...d59At(778.5, 432), transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}
        >
          行程信息
        </p>

        {/* 申请页截图:上截图 → 灰色透视连接块 → 下截图 */}
        <Crop
          src={p2ApplyFormLower}
          alt="出差申请页表单下半部分"
          box={d59At(968, 270, 448, 250)}
          radius="0 0 8px 8px"
          img={{ width: '100.1%', height: '336.01%', left: '-0.05%', top: '-232.01%' }}
        />
        <img src={d59Rect303} alt="" style={d59At(841, 260, 590, 234)} />
        <Crop
          src={p2ApplyForm}
          alt="出差申请页表单上半部分"
          box={d59At(850, 160, 448, 320)}
          radius="8px 8px 0 0"
          img={{ width: '100%', height: '264.5%', left: 0, top: '-0.06%' }}
        />

        {/* 不确定性规避柱图 */}
        <hr className="p2-rule" style={d59At(378, 552, 1038)} />
        <div className="p2-gauge" style={d59At(378, 584, 142, 218)} />
        <img src={d59Bars} alt="各国不确定性规避指数对比" style={d59At(402, 633, 94, 125)} />
        <p className="p2-label p2-label--dim" style={d59At(544, 600)}>
          高
        </p>
        <p className="p2-label p2-label--dim" style={d59At(544, 746)}>
          低
        </p>
        <p
          className="p2-label p2-label--dim"
          style={{ ...d59At(449, 615), transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}
        >
          韩
        </p>
        <p
          className="p2-label p2-label--dim"
          style={{ ...d59At(429, 605, 14), transform: 'translateX(-50%)', textAlign: 'center' }}
        >
          日
        </p>
        <p
          className="p2-label p2-label--dim"
          style={{ ...d59At(449, 766, 142), transform: 'translateX(-50%)', textAlign: 'center' }}
        >
          不确定性规避
        </p>
        <p className="p2-body p2-body--dim" style={d59At(732, 584, 330)}>
          现象
        </p>
        <p className="p2-body" style={d59At(732, 616, 448)}>
          作为东亚国家代表的日本和韩国在“不确定性规避”指数上高于其他国家
        </p>
        <p className="p2-label p2-label--bright" style={d59At(544, 620)}>
          精确 &amp; 可预期
        </p>
        <hr className="p2-rule" style={d59At(732, 696, 684)} />
        <p className="p2-body p2-body--dim" style={d59At(732, 728, 330)}>
          设计方向
        </p>
        <p className="p2-label p2-label--bright" style={d59At(544, 766)}>
          灵活 &amp; 宽松
        </p>
        <p className="p2-body" style={d59At(732, 759, 369)}>
          强化信息披露，避免任务的不可预期感
        </p>

        {/* ---- DESIGN ---- */}
        <hr className="p2-rule" style={d59At(24, 866, 1392)} />
        <p className="p2-eyebrow" style={d59At(24, 930)}>
          DESIGN
        </p>

        {/* 做法 01 · 步骤条 */}
        <p className="p2-stepnum" style={d59At(378, 920)}>
          01
        </p>
        <p className="p2-h3" style={d59At(462, 930)}>
          将申请页拆解为两步，分页展示
        </p>
        <p className="p2-body" style={d59At(378, 1038, 330)}>
          在每页表单的顶部展示步骤条，确保用户在任务中对于当前进度和下一步操作有所预期，降低焦虑
        </p>
        <img
          className="p2-shot p2-shot--lift"
          src={d59Img1}
          alt="第二步:行程信息步骤条"
          style={d59At(850, 1102, 566, 109)}
        />
        <img
          className="p2-shot p2-shot--float"
          src={d59Img2}
          alt="第一步:基础信息步骤条"
          style={d59At(732, 1038, 566, 109)}
        />

        <p className="p2-marknum" style={d59At(496, 1269)}>
          1
        </p>
        <p className="p2-subhead" style={d59At(522, 1276)}>
          基础信息
        </p>
        <p className="p2-marknum" style={d59At(968, 1269)}>
          2
        </p>
        <p className="p2-subhead" style={d59At(1001, 1276)}>
          行程信息
        </p>
        <Crop
          src={d59Img12}
          alt="基础信息填写页"
          box={d59At(496, 1344, 448, 280)}
          radius="8px"
          img={{ width: '160%', height: '160.16%', left: '-30%', top: '-19.45%' }}
        />
        <Crop
          src={d59Img2043}
          alt="行程信息填写页"
          box={d59At(968, 1344, 448, 280)}
          radius="8px"
          img={{ width: '160%', height: '160.16%', left: '-30%', top: '-19.45%' }}
        />
        <hr className="p2-rule" style={d59At(378, 1344, 94)} />
        <p className="p2-body" style={d59At(378, 1376)}>
          填写步骤
        </p>
        <hr className="p2-rule" style={d59At(378, 1432, 94)} />
        <hr className="p2-rule p2-rule--accent" style={d59At(520, 1432, 872)} />
        <p className="p2-body" style={d59At(378, 1516)}>
          内容填写区
        </p>

        {/* 做法 02 · 表单折叠 */}
        <hr className="p2-rule" style={d59At(378, 1656, 1038)} />
        <p className="p2-stepnum" style={d59At(378, 1710)}>
          02
        </p>
        <p className="p2-h3" style={d59At(462, 1720)}>
          表单可折叠，方便快速浏览比对信息
        </p>
        <p className="p2-subhead" style={d59At(378, 1828)}>
          表单展开
        </p>
        <p className="p2-caption" style={d59At(483, 1837)}>
          默认状态，可编辑内容
        </p>
        <p className="p2-subhead" style={d59At(968, 1828)}>
          表单折叠
        </p>
        <p className="p2-caption" style={d59At(1073, 1837)}>
          一屏浏览多张卡片，快速查看信息
        </p>
        <Crop
          src={d59Img5}
          alt="表单展开状态"
          box={d59At(378, 1896, 448, 280)}
          radius="8px"
          img={{ width: '100%', height: '361.56%', left: 0, top: '-34.71%' }}
        />
        <Crop
          src={p2ApplyCollapsed}
          alt="表单折叠状态"
          box={d59At(968, 1896, 448, 280)}
          radius="8px"
          img={{ width: '100.09%', height: '173.93%', left: '-0.04%', top: '-34.64%' }}
        />
        <img src={d59Rect322} alt="" style={d59At(731, 1900, 332, 161)} />
        <p className="p2-label" style={d59At(838, 1924, 118)}>
          表单折叠时，展示已填写的主要信息
        </p>
        <div className="p2-card" style={d59At(481, 1900, 242, 160)} />
        <div className="p2-card" style={d59At(481, 2064, 242, 110)} />
        {foldRight.map((y) => (
          <div className="p2-card" key={y} style={d59At(1071, y, 242, 47)} />
        ))}
        <p className="p2-body" style={d59At(378, 2208)}>
          一屏内完整展示1个行程卡片，沉浸填写
        </p>
        <p className="p2-body" style={d59At(968, 2208)}>
          一屏内可完整展示5个行程卡片，全局概览
        </p>
        {/* 稿中这句右对齐到内容区右边 */}
        <p
          className="p2-label p2-label--dim"
          style={{ right: pct(24, 1440), top: pct(2264, 2428), textAlign: 'right', whiteSpace: 'nowrap' }}
        >
          *假定屏幕可见范围1440*900
        </p>
        <hr className="p2-rule" style={d59At(24, 2372, 1392)} />
      </div>
    </section>
  )
}

/* D-62 · 策略 02「新增草稿功能，解决用户痛点」(高 1464)
   PROBLEM:两条现状 + 一条「填写→提交→审批→打回重填」的流程示意
   DESIGN:三张申请页/单据列表截图压到 40%,局部细节同源裁切叠在上面全亮。 */
const d62At = makeAt(1440, 1464)

/* 居中定位的小字:稿中带 -translate-x-1/2,给的是中心 x */
const centered = (at) => ({ ...at, transform: 'translateX(-50%)', whiteSpace: 'nowrap' })

/* PROBLEM 两栏:[标题, 说明, x] */
const painPoints = [
  [
    '单据填写耗时长',
    '当前中国站平均用时7分钟，内容复杂的单据往往需要10分钟以上。对于业务熟练度较低的海外用户，耗时会进一步增加',
    378,
  ],
  ['每张单据需要审批', '每一张单据填写完成后都需要提交审批，审批通过后才会生效', 850],
]

/* 流程示意里的三个角色标签:[文案, 中心 x] */
const flowRoles = [
  ['提交人', 424.5],
  ['申请单', 896.5],
  ['审批人', 1132.5],
]

function Strategy02() {
  return (
    <section data-screen="D-62">
      <div className="p2-stage" style={{ aspectRatio: `${1440} / ${1464}` }}>
        <p className="p2-strat-num" style={d62At(24, 28)}>
          02
        </p>
        <h3 className="p2-strat-title" style={d62At(74, 24)}>
          新增草稿功能，解决用户痛点
        </h3>

        {/* ---- PROBLEM ---- */}
        <p className="p2-eyebrow" style={d62At(24, 160)}>
          PROBLEM
        </p>
        <hr className="p2-rule" style={d62At(378, 160, 1038)} />
        {painPoints.map(([head, note, x]) => (
          <Fragment key={head}>
            <p className="p2-body" style={d62At(x, 192, 448)}>
              {head}
            </p>
            <p className="p2-body p2-body--dim" style={d62At(x, 224, 448)}>
              {note}
            </p>
          </Fragment>
        ))}

        {/* 流程示意:提交人 —填写→ 申请单 —提交→ 审批人,审批结果回落重填 */}
        <img src={d62Avatar} alt="" style={d62At(378, 336, 94, 94)} />
        <div className="p2-chip" style={d62At(854, 340, 86, 86)} />
        <div className="p2-chip" style={d62At(862, 348, 70, 12)} />
        <div className="p2-chip" style={d62At(862, 368, 70, 50)} />
        <img src={d62Avatar} alt="" style={d62At(1086, 336, 94, 94)} />
        <img src={d62FlowLong} alt="" style={d62At(472, 365, 382, 36)} />
        <img src={d62FlowShort} alt="" style={d62At(940, 365, 146, 36)} />
        <p className="p2-body" style={centered(d62At(661, 351))}>
          填写
        </p>
        <p className="p2-body" style={centered(d62At(1015, 351))}>
          提交
        </p>
        <p className="p2-label p2-label--accent" style={centered(d62At(660.5, 391))}>
          耗时长
        </p>
        {flowRoles.map(([name, cx]) => (
          <p className="p2-label p2-label--dim" key={name} style={centered(d62At(cx, 438))}>
            {name}
          </p>
        ))}
        {/* 回流箭头:稿中做了一次水平镜像(rotate180 叠 scaleY(-1)) */}
        <img
          src={d62FlowBack}
          alt=""
          style={{ ...d62At(411, 470, 722, 32), transform: 'scaleX(-1)' }}
        />
        <p className="p2-body" style={centered(d62At(772, 510))}>
          审批结果
        </p>

        <hr className="p2-rule" style={d62At(378, 566, 1038)} />
        <p className="p2-body p2-body--dim" style={d62At(378, 598)}>
          痛点 1
        </p>
        <p className="p2-body" style={d62At(378, 630)}>
          填写中途若需要确认补充信息，确认后需要重新填写
        </p>
        <p className="p2-body p2-body--dim" style={d62At(850, 598)}>
          痛点 2
        </p>
        <p className="p2-body" style={d62At(850, 630)}>
          提交多张单据时，需要多次向审批人提交审批，效率低下
        </p>

        {/* ---- DESIGN ---- */}
        <hr className="p2-rule" style={d62At(24, 718, 1392)} />
        <p className="p2-eyebrow" style={d62At(24, 782)}>
          DESIGN
        </p>
        <p className="p2-h3" style={d62At(378, 782)}>
          使用草稿功能提高容错率，满足统一提交多张单据审批需求
        </p>
        <p className="p2-subhead" style={d62At(378, 890)}>
          申请页
        </p>
        <p className="p2-subhead" style={d62At(1086, 890)}>
          单据列表
        </p>

        {/* 三张压暗底图 */}
        <Crop
          src={p2ApplyCollapsed}
          alt="申请页"
          box={{ ...d62At(378, 958, 330, 210), opacity: 0.4 }}
          radius="8px"
          img={{ width: '100%', height: '170.67%', left: 0, top: '-65.81%' }}
        />
        <Crop
          src={p2ApplyCollapsed}
          alt="申请页"
          box={{ ...d62At(732, 958, 330, 210), opacity: 0.4 }}
          radius="8px"
          img={{ width: '100%', height: '170.67%', left: 0, top: '-65.81%' }}
        />
        <Crop
          src={p2List}
          alt="单据列表"
          box={{ ...d62At(1086, 958, 330, 210), opacity: 0.4 }}
          radius="8px"
          img={{ width: '100%', height: '104.76%', left: 0, top: 0 }}
        />
        {/* 叠在底图上的全亮局部 */}
        <Crop
          src={p2List}
          alt="列表顶部的草稿条目"
          box={d62At(1104, 1017, 294, 21)}
          radius="4px"
          img={{ width: '112.24%', height: '1047.62%', left: '-6.12%', top: '-280.95%' }}
        />
        <img
          className="p2-shot"
          src={d62Dialog}
          alt="保存草稿的二次确认弹窗"
          style={d62At(842, 1044, 110.4, 37.72)}
        />
        <Crop
          src={p2ApplyCollapsed}
          alt="保存草稿按钮"
          box={d62At(505, 1130, 50, 26)}
          radius="4px"
          img={{ width: '660%', height: '1378.53%', left: '-254%', top: '-1193.11%' }}
        />

        <hr className="p2-rule" style={d62At(378, 1200, 1038)} />
        <p className="p2-body p2-body--dim" style={d62At(378, 1232)}>
          保存草稿
        </p>
        <p className="p2-body" style={d62At(378, 1264)}>
          用户可在填写全流程选择保存当前进度
        </p>
        <p className="p2-body p2-body--dim" style={d62At(732, 1232)}>
          二次确认
        </p>
        <p className="p2-body" style={d62At(732, 1264)}>
          确认操作，并提示后续操作方式
        </p>
        <p className="p2-body p2-body--dim" style={d62At(1086, 1232)}>
          查看/编辑草稿
        </p>
        <ol className="p2-ol" style={d62At(1086, 1264)}>
          <li>在列表顶部展示草稿，方便用户查找并编辑</li>
          <li>可同时选择多个草稿合并提交审批</li>
        </ol>
        <hr className="p2-rule" style={d62At(24, 1424, 1392)} />
      </div>
    </section>
  )
}

/* D-61 · 策略 03「增加提示，提供即时帮助」(高 1452)
   与 D-59 同构:PROBLEM(两条现状 + 纵乐主义柱图)→ DESIGN(三条做法)。
   两张现状截图是同一张申请页表单图的不同取景。 */
const d61At = makeAt(1440, 1452)

/* PROBLEM 左栏三条:[分割线 y, 文案 y, 文案] */
const tipProblems = [
  [160, 192, '填写内容概念易混淆，缺乏解释说明'],
  [248, 280, '中文措辞在多语言翻译后，难以保证内容意思准确明了'],
]

/* DESIGN 左栏三条 */
const tipDesigns = [
  [920, 952, '填写框暗文字展示填写示例'],
  [1008, 1040, '在关键内容标题后新增说明入口'],
]

function Strategy03() {
  return (
    <section data-screen="D-61">
      <div className="p2-stage" style={{ aspectRatio: `${1440} / ${1452}` }}>
        <p className="p2-strat-num" style={d61At(24, 28)}>
          03
        </p>
        <h3 className="p2-strat-title" style={d61At(74, 24)}>
          增加提示，提供即时帮助
        </h3>

        {/* ---- PROBLEM ---- */}
        <p className="p2-eyebrow" style={d61At(24, 160)}>
          PROBLEM
        </p>
        {tipProblems.map(([ry, ty, text]) => (
          <Fragment key={text}>
            <hr className="p2-rule" style={d61At(378, ry, 330)} />
            <p className="p2-body" style={d61At(378, ty, 330)}>
              {text}
            </p>
          </Fragment>
        ))}
        <Crop
          src={p2ApplyForm}
          alt="填写内容缺乏解释说明"
          box={d61At(732, 160, 684, 136)}
          radius="8px"
          img={{ width: '185.05%', height: '1755.89%', left: '-38.41%', top: '-102.4%' }}
        />
        <Crop
          src={p2ApplyForm}
          alt="多语言翻译后措辞不明"
          box={d61At(732, 312, 684, 90)}
          radius="8px"
          img={{ width: '185.05%', height: '2653.35%', left: '-38.41%', top: '-679.18%' }}
        />

        {/* 纵乐主义柱图 */}
        <hr className="p2-rule" style={d61At(378, 434, 1038)} />
        <div className="p2-gauge" style={d61At(378, 466, 142, 218)} />
        <img src={d61Bars} alt="各国纵乐主义指数对比" style={d61At(402, 562, 94, 78)} />
        <p className="p2-label p2-label--dim" style={d61At(544, 482)}>
          高
        </p>
        <p className="p2-label p2-label--dim" style={d61At(544, 628)}>
          低
        </p>
        <p className="p2-label p2-label--dim" style={centered(d61At(490, 534))}>
          马
        </p>
        <p
          className="p2-label p2-label--dim"
          style={{ ...d61At(470, 551, 14), transform: 'translateX(-50%)', textAlign: 'center' }}
        >
          泰
        </p>
        <p
          className="p2-label p2-label--dim"
          style={{ ...d61At(449, 648, 142), transform: 'translateX(-50%)', textAlign: 'center' }}
        >
          纵乐主义
        </p>
        <p className="p2-body p2-body--dim" style={d61At(732, 466, 330)}>
          现象
        </p>
        <p className="p2-body" style={d61At(732, 498, 448)}>
          作为东南亚国家代表的泰国和马来西亚在“纵乐主义”指数上高于其他国家
        </p>
        <p className="p2-label p2-label--bright" style={d61At(544, 502)}>
          轻松 &amp; 低负担
        </p>
        <hr className="p2-rule" style={d61At(732, 578, 684)} />
        <p className="p2-body p2-body--dim" style={d61At(732, 610, 330)}>
          设计方向
        </p>
        <p className="p2-label p2-label--bright" style={d61At(544, 648)}>
          克制 &amp; 延迟满足
        </p>
        <p className="p2-body" style={d61At(732, 641, 369)}>
          简化复杂任务，减少认知负担，降低挫败感
        </p>

        {/* ---- DESIGN ----(稿中 y=748 有两条完全重合的分割线,只画一条) */}
        <hr className="p2-rule" style={d61At(24, 748, 1392)} />
        <p className="p2-eyebrow" style={d61At(24, 812)}>
          DESIGN
        </p>
        <p className="p2-h3" style={d61At(378, 812)}>
          通过填写示例和提示说明，帮助用户理解内容
        </p>
        {tipDesigns.map(([ry, ty, text]) => (
          <Fragment key={text}>
            <hr className="p2-rule" style={d61At(378, ry, 330)} />
            <p className="p2-body" style={d61At(378, ty, 330)}>
              {text}
            </p>
          </Fragment>
        ))}
        <Crop
          src={d61Tips}
          alt="填写示例与说明入口"
          box={d61At(732, 920, 684, 428)}
          radius="8px"
          img={{ width: '174.44%', height: '282.09%', left: '-37.22%', top: '-73.53%' }}
        />
      </div>
    </section>
  )
}

/* D-63 · 目标2 策略 01「按多语言要求调整字段展示」(高 2074)
   PROBLEM 三条多语言差异(三张截图)+ 核心问题;
   DESIGN 两组「中国站 vs 海外站」对照:表单版式、信息展示版式。 */
const d63At = makeAt(1440, 2074)

/* PROBLEM 三栏:[x, 序号, 说明…] */
const langDiffs = [
  [378, d63Lang1, '多语言差异 1', ['统一字段翻译后，字段长度差异显著 ', '同字号字段的视觉高度不一']],
  [732, d63Lang2, '多语言差异 2', ['不同的语言存在不同的词汇分界方式']],
  [1086, d63Lang3, '多语言差异 3', ['其他语言难以和中文一样通过缩略控制长度']],
]

/* 信息展示示意图的色条。左侧(中国站)两列四行,标签 40 + 内容 152;
   右侧(海外站)是通栏,尺寸各不相同,照抄。 */
const infoRowsCn = [1671, 1716, 1761, 1806]
const infoColsCn = [411, 638]
const infoBarsOs = [
  [949, 1699, 56, true],
  [1012, 1699, 372, false],
  [949, 1756, 435, false],
  [949, 1781, 56, true],
  [1012, 1781, 372, false],
  [949, 1813, 113, false],
]

function Localization01() {
  return (
    <section data-screen="D-63">
      <div className="p2-stage" style={{ aspectRatio: `${1440} / ${2074}` }}>
        <p className="p2-strat-num" style={d63At(24, 28)}>
          01
        </p>
        <h3 className="p2-strat-title" style={d63At(74, 24)}>
          按多语言要求调整字段展示
        </h3>

        {/* ---- PROBLEM ---- */}
        <p className="p2-eyebrow" style={d63At(24, 160)}>
          PROBLEM
        </p>
        {langDiffs.map(([x, src, kicker, notes]) => (
          <Fragment key={kicker}>
            <Crop
              src={src}
              alt={kicker}
              box={d63At(x, 160, 330, 266)}
              radius="8px"
              img={
                src === d63Lang3
                  ? { width: '100%', height: '105.09%', left: 0, top: '-4.99%' }
                  : { width: '100.17%', height: '105.26%', left: '-0.08%', top: '-2.63%' }
              }
            />
            <p className="p2-body p2-body--dim" style={d63At(x, 458)}>
              {kicker}
            </p>
            {notes.map((n, i) => (
              <p className="p2-body" key={n} style={d63At(x, 490 + i * 32, 330)}>
                {n}
              </p>
            ))}
          </Fragment>
        ))}
        <hr className="p2-rule" style={d63At(378, 578, 1038)} />
        <p className="p2-body p2-body--dim" style={d63At(378, 610)}>
          核心问题
        </p>
        <p className="p2-body" style={d63At(378, 642)}>
          多语言页面无法直接套用翻译基于中文环境设计规则的页面
        </p>

        {/* ---- DESIGN ---- */}
        <hr className="p2-rule" style={d63At(24, 730, 1392)} />
        <p className="p2-eyebrow" style={d63At(24, 794)}>
          DESIGN
        </p>
        <p className="p2-h3" style={d63At(378, 794)}>
          精简多余字段；调整信息展示结构，保留水平空间
        </p>

        {/* 对照一 · 表单版式 */}
        <p className="p2-subhead" style={d63At(378, 902)}>
          中国站
        </p>
        <p className="p2-subhead" style={d63At(909, 902)}>
          海外站
        </p>
        <div className="p2-fill" style={d63At(24, 970, 330, 94)} />
        <p className="p2-h3strong" style={d63At(48, 986)}>
          表单
        </p>
        <Crop
          src={p2ApplyFormLower}
          alt="中国站表单版式"
          box={{ ...d63At(378, 970, 507, 320), opacity: 0.8 }}
          radius="8px"
          img={{ width: '347.78%', height: '1042.38%', left: '-75.6%', top: '-528.25%' }}
        />
        <Crop
          src={d63FormOs}
          alt="海外站表单版式"
          box={d63At(909, 970, 507, 320)}
          radius="8px"
          img={{ width: '186.13%', height: '666.55%', left: '-43.04%', top: '-173.7%' }}
        />
        <img src={d63SchemaCn} alt="" style={d63At(378, 1322, 507, 112)} />
        <img src={d63SchemaOs} alt="" style={d63At(909, 1322, 507, 112)} />
        <p className="p2-body" style={d63At(378, 1466, 330)}>
          表单标签与右对齐与填写框水平排列
        </p>
        <p className="p2-body" style={d63At(909, 1466)}>
          表单标签与填写框左对齐垂直排列，减少标签字段长度限制
        </p>

        {/* 对照二 · 信息展示版式 */}
        <hr className="p2-rule" style={d63At(378, 1522, 1038)} />
        <p className="p2-subhead" style={d63At(378, 1586)}>
          中国站
        </p>
        <p className="p2-subhead" style={d63At(909, 1586)}>
          海外站
        </p>
        <div className="p2-fill" style={d63At(24, 1654, 330, 94)} />
        <p className="p2-h3strong" style={d63At(48, 1670)}>
          信息展示
        </p>
        <Crop
          src={p2CnPage}
          alt="中国站信息展示版式"
          box={{ ...d63At(378, 1654, 507, 188), opacity: 0.8 }}
          radius="8px"
          img={{ width: '107.01%', height: '330.25%', left: '-3.51%', top: '-55.15%' }}
        />
        <Crop
          src={d63InfoOs}
          alt="海外站信息展示版式"
          box={d63At(909, 1654, 507, 188)}
          radius="8px"
          img={{ width: '139.33%', height: '340.22%', left: '-3.99%', top: '-75.85%' }}
        />
        {infoRowsCn.flatMap((y) =>
          infoColsCn.map((x) => (
            <Fragment key={`${x}-${y}`}>
              <div className="p2-bar p2-bar--sec" style={d63At(x, y, 40, 10)} />
              <div className="p2-bar" style={d63At(x, y + 16, 152, 10)} />
            </Fragment>
          )),
        )}
        {infoBarsOs.map(([x, y, w, isSec]) => (
          <div
            className={`p2-bar${isSec ? ' p2-bar--sec' : ''}`}
            key={`${x}-${y}-${w}`}
            style={d63At(x, y, w, 10)}
          />
        ))}
        <p className="p2-body" style={d63At(378, 1874, 330)}>
          信息标题与内容对应
        </p>
        <p className="p2-body" style={d63At(378, 1906, 330)}>
          水平分栏展示信息
        </p>
        <p className="p2-body" style={d63At(909, 1874, 507)}>
          通过结构调整区分内容，省略非必要标题
        </p>
        <p className="p2-body" style={d63At(909, 1906, 507)}>
          取消水平分栏，充分利用空间宽度，避免长字段折行
        </p>
        <hr className="p2-rule" style={d63At(24, 2034, 1392)} />
      </div>
    </section>
  )
}

/* D-64 · 目标2 策略 02「制定特殊场景字段展示规则」(高 2868,本页最大一屏)
   PROBLEM 弹窗/表格两个受限载体的线框;
   DESIGN 01 按优先级定三档缩略方案(弹窗截图 + 三处放大细节);
   DESIGN 02 逐列标注表格列宽规则(六根列宽色条 + 韩语时间字段的举证)。 */
const d64At = makeAt(1440, 2868)

/* PROBLEM 线框里的浅色占位块。三组四行的规整部分用循环生成,零散的照抄。 */
const popupChips = [
  [756, 176, 70, 16],
  [756, 204, 164, 80],
  [844, 296, 32, 16],
  [888, 296, 32, 16],
]
const tableChipRows = [176, 212, 248, 284]
const tableChipCols = [
  [992, 94],
  [1092, 224],
  [1322, 70],
]

/* DESIGN 01 三档优先级:[分割线 y, 内容 y, 优先级, 字段名, 做法] */
const priorityRows = [
  [1006, 1038, '低优先级', '金额备注说明', '将信息缩略至图标，不外显'],
  [1150, 1182, '中优先级', '出行人', '在一行内展示，内容超出截断'],
  [1294, 1326, '高优先级', '可选城市', '完整展示信息，长字段折行'],
]

/* DESIGN 02 表格六列:[x, 宽, 色块高, 是否辅助色] */
const tableCols = [
  [60, 168, 250, false],
  [252, 278, 250, false],
  [554, 86, 362, false],
  [664, 168, 306, false],
  [856, 272, 250, false],
  [1152, 228, 250, true],
]
/* 列底的实心细条:[x, y, 宽, 是否辅助色] */
const tableUnderlines = [
  [60, 2168, 168, false],
  [252, 2168, 278, false],
  [856, 2168, 272, false],
  [1152, 2168, 228, true],
  [664, 2224, 168, false],
  [554, 2280, 86, false],
]
/* 列标注:[x, 字段名 y, 字段名, 规则 y, 规则, 规则宽] */
const tableNotes = [
  [60, 2208, '单据号', 2240, '11位数字，宽度固定', null],
  [252, 2208, '行程时段', 2240, '按照韩语场景确定字段最大长度', null],
  [664, 2264, '总金额', 2296, '以11位金额（百亿）作为最大宽度', null],
  [554, 2320, '出行人', 2352, '最多展示3个头像，宽度固定', null],
  [856, 2208, '申请日期', 2240, '按照韩语场景确定字段最大长度', null],
  [1152, 2208, '单据状态', 2240, '多种状态字段宽度难以确定，因此提前预留充足空间', 228],
]

function Localization02() {
  return (
    <section data-screen="D-64">
      <div className="p2-stage" style={{ aspectRatio: `${1440} / ${2868}` }}>
        <p className="p2-strat-num" style={d64At(24, 28)}>
          02
        </p>
        <h3 className="p2-strat-title" style={d64At(74, 24)}>
          制定特殊场景字段展示规则
        </h3>

        {/* ---- PROBLEM ---- */}
        <p className="p2-eyebrow" style={d64At(24, 160)}>
          PROBLEM
        </p>
        <hr className="p2-rule" style={d64At(378, 160, 330)} />
        <p className="p2-body" style={d64At(378, 192, 330)}>
          在弹窗和表格等空间十分受限的载体，多语言字段的适配面临更大的挑战
        </p>
        <div className="p2-gauge" style={{ ...d64At(732, 160, 212, 168), borderRadius: '4px' }} />
        <div className="p2-gauge" style={{ ...d64At(968, 160, 448, 168), borderRadius: '4px' }} />
        {popupChips.map(([x, y, w, h]) => (
          <div className="p2-chip" key={`${x}-${y}`} style={d64At(x, y, w, h)} />
        ))}
        {tableChipRows.flatMap((y) =>
          tableChipCols.map(([x, w]) => (
            <div className="p2-chip" key={`${x}-${y}`} style={d64At(x, y, w, 24)} />
          )),
        )}
        <p className="p2-body p2-body--dim" style={d64At(732, 360)}>
          弹窗
        </p>
        <p className="p2-body" style={d64At(732, 392, 212)}>
          弹窗应提供简洁和必要的信息帮助用户决策
        </p>
        <p className="p2-body p2-body--dim" style={d64At(968, 360)}>
          表格
        </p>
        <p className="p2-body" style={d64At(968, 392, 448)}>
          表格应尽量在每一栏完整展示信息，便于用户比对和定位，避免信息的折行和不完整展示
        </p>
        <hr className="p2-rule" style={d64At(24, 504, 1392)} />

        {/* ---- DESIGN 01 · 优先级缩略方案 ---- */}
        <p className="p2-eyebrow" style={d64At(24, 568)}>
          DESIGN
        </p>
        <p className="p2-stepnum" style={d64At(378, 558)}>
          01
        </p>
        <p className="p2-h3" style={d64At(462, 568)}>
          按照信息优先级定义不同的字段缩略方案
        </p>
        <hr className="p2-rule" style={d64At(378, 676, 684)} />
        <p className="p2-body" style={d64At(378, 708)}>
          案例：
        </p>
        <p className="p2-body" style={d64At(430, 708)}>
          出差申请单选择弹窗
        </p>
        <p className="p2-body p2-body--dim" style={d64At(732, 708, 330)}>
          预订行程前通过此弹窗选择一个出差申请单，选择后可在此单据范围内预订行程
        </p>
        <img
          className="p2-shot"
          src={d64Popup}
          alt="出差申请单选择弹窗"
          style={d64At(1086, 676, 330, 298)}
        />

        {priorityRows.map(([ruleY, y, level, field, how]) => (
          <Fragment key={level}>
            <hr className="p2-rule" style={d64At(24, ruleY, 684)} />
            <p className="p2-body p2-body--dim" style={d64At(24, y)}>
              {field}
            </p>
            <p className="p2-body" style={d64At(260, y)}>
              {level}
            </p>
            <p className="p2-body" style={d64At(496, y, 212)}>
              {how}
            </p>
          </Fragment>
        ))}
        {/* 弹窗底图压到 40%,三处做法各自用同源裁切全亮叠放 */}
        <Crop
          src={d64Popup}
          alt=""
          box={{ ...d64At(732, 1006, 684, 386), opacity: 0.4 }}
          radius="8px"
          img={{ width: '107.14%', height: '171.24%', left: '-3.57%', top: '-46.11%' }}
        />
        <Crop
          src={d64Popup}
          alt="缩略成图标的金额备注"
          box={d64At(852, 1086, 50, 50)}
          radius="4px"
          img={{ width: '1465.71%', height: '1321.99%', left: '-288.86%', top: '-515.96%' }}
        />
        <Crop
          src={d64Popup}
          alt="单行截断的出行人"
          box={d64At(755, 1196, 638, 40)}
          radius="4px"
          img={{ width: '114.87%', height: '1652.48%', left: '-7.43%', top: '-919.95%' }}
        />
        <Crop
          src={d64Popup}
          alt="完整折行展示的可选城市"
          box={d64At(755, 1255, 520, 66)}
          radius="4px"
          img={{ width: '140.93%', height: '1001.51%', left: '-9.12%', top: '-646.94%' }}
        />
        <p className="p2-label" style={centered(d64At(877, 1062))}>
          金额备注说明
        </p>
        <p className="p2-label" style={centered(d64At(1073.5, 1172))}>
          出行人
        </p>
        <p className="p2-label" style={centered(d64At(1014.5, 1325))}>
          可选城市
        </p>
        <hr className="p2-rule" style={d64At(24, 1424, 1392)} />

        {/* ---- DESIGN 02 · 表格列宽规则 ---- */}
        <p className="p2-stepnum" style={d64At(378, 1478)}>
          02
        </p>
        <p className="p2-h3" style={d64At(462, 1488)}>
          固定字段明确表格列宽，不固定字段强化拓展
        </p>
        <hr className="p2-rule" style={d64At(378, 1596, 566)} />
        <p className="p2-body" style={d64At(378, 1628)}>
          案例：
        </p>
        <p className="p2-body" style={d64At(430, 1628)}>
          出差申请单列表
        </p>
        <p className="p2-body p2-body--dim" style={d64At(732, 1628, 212)}>
          展示当前账户下全部状态的出差申请单，用户可在此查找和管理
        </p>
        <Crop
          src={p2List}
          alt="出差申请单列表"
          box={d64At(968, 1596, 448, 298)}
          radius="8px"
          img={{ width: '100.11%', height: '100.34%', left: '-0.06%', top: 0 }}
        />

        <Crop
          src={d64TableWide}
          alt="出差申请单列表表格"
          box={d64At(24, 1926, 1398.043, 218)}
          radius="8px"
          img={{ width: '122.03%', height: '521.74%', left: '-11.02%', top: '-115.22%' }}
        />
        {tableCols.map(([x, w, h, isSec]) => (
          <div
            className={`p2-bar p2-bar--20${isSec ? ' p2-bar--sec' : ''}`}
            key={`col-${x}`}
            style={d64At(x, 1926, w, h)}
          />
        ))}
        <div className="p2-bar p2-bar--20 p2-bar--sec" style={d64At(1152, 2320, 228, 120)} />
        {tableUnderlines.map(([x, y, w, isSec]) => (
          <div
            className={`p2-bar${isSec ? ' p2-bar--sec' : ''}`}
            key={`ul-${x}-${y}`}
            style={d64At(x, y, w, 8)}
          />
        ))}
        {tableNotes.map(([x, fy, field, ny, note, nw]) => (
          <Fragment key={field}>
            <p className="p2-body p2-body--dim" style={d64At(x, fy)}>
              {field}
            </p>
            <p className="p2-body" style={d64At(x, ny, nw ?? undefined)}>
              {note}
            </p>
          </Fragment>
        ))}
        {/* 稿中这枚箭头是 112×36 旋转 90°,按旋转后外框的中心反推放置 */}
        <img
          src={d64Arrow}
          alt=""
          style={{ ...d64At(368, 2334, 112, 36), transform: 'rotate(90deg)' }}
        />
        <p className="p2-label" style={centered(d64At(1266, 2376))}>
          隐藏式操作按钮
        </p>
        <p className="p2-label" style={centered(d64At(1266, 2404))}>
          解决多语言环境空间不足问题
        </p>

        {/* 韩语时间字段的举证 */}
        <hr className="p2-rule" style={d64At(378, 2440, 684)} />
        <p className="p2-body p2-body--dim" style={d64At(378, 2472, 330)}>
          为什么按照韩语场景确定时间字段最大宽度？
        </p>
        <p className="p2-body" style={d64At(378, 2528, 330)}>
          根据统计，在Trip.biz常用语言中，韩语的时间字段标准展示最长
        </p>
        <Crop
          src={d64Korean}
          alt="各语言时间字段长度统计"
          box={d64At(732, 2472, 330, 292)}
          radius="8px"
          img={{ width: '256.95%', height: '188.18%', left: '-51.96%', top: '-51.11%' }}
        />
        <div className="p2-card" style={d64At(742, 2661, 308, 30)} />
        <Crop
          src={d64Hover}
          alt="hover 时右侧出现的操作按钮"
          box={d64At(1140, 2472, 276, 156)}
          radius="0 8px 8px 0"
          img={{ width: '615.48%', height: '756.36%', left: '-459.91%', top: '-244.31%' }}
        />
        <img src={d64Caret} alt="" style={d64At(1234.5, 2582.44, 14, 19.15)} />
        <img src={d64Cursor} alt="" style={d64At(1276, 2524, 22, 26)} />
        <p className="p2-body" style={d64At(1152, 2660, 228)}>
          光标hover至列表，可用操作按钮在最右侧展示
        </p>
      </div>
    </section>
  )
}

/* D-66 · 目标3 策略 01「基于固有逻辑，通过前端展示优化体验」(高 2216)
   PROBLEM 一句现状 + 中国站/海外站共用底层逻辑的线框;
   DESIGN 01 母单/子单概念,DESIGN 02 消除「国内/国际」概念。
   两组都按「固有逻辑 → 问题 → 设计解决」三段铺开。 */
const d66At = makeAt(1440, 2216)

/* DESIGN 02 里叠在压暗底图上的全亮细节:[src, x, y, w, h, 取景] */
const tripDetails = [
  [d66TripCn, 390, 1614, 426, 94, { width: '361.33%', height: '1509.95%', left: '-80.41%', top: '-823.51%' }],
  [d66TripCn, 390, 1716, 426, 94, { width: '361.33%', height: '1509.95%', left: '-80.41%', top: '-932.02%' }],
  [d66TripOs1, 866, 1627, 534, 52, { width: '195.77%', height: '2352.55%', left: '-47.88%', top: '-444.91%' }],
  [d66TripOs1, 866, 1683, 153, 16, { width: '683.26%', height: '7645.77%', left: '-167.12%', top: '-1795.95%' }],
  [d66TripOs2, 866, 1760, 534, 52, { width: '195.77%', height: '2350%', left: '-47.88%', top: '-444.51%' }],
  [d66TripOs2, 866, 1816, 534, 68, { width: '195.77%', height: '1797.06%', left: '-47.88%', top: '-422.27%' }],
]

function Sustainable01() {
  return (
    <section data-screen="D-66">
      <div className="p2-stage" style={{ aspectRatio: `${1440} / ${2216}` }}>
        <p className="p2-strat-num" style={d66At(24, 28)}>
          01
        </p>
        <h3 className="p2-strat-title" style={d66At(74, 24)}>
          基于固有逻辑，通过前端展示优化体验
        </h3>

        {/* ---- PROBLEM ---- */}
        <p className="p2-eyebrow" style={d66At(24, 160)}>
          PROBLEM
        </p>
        <hr className="p2-rule" style={d66At(378, 160, 330)} />
        <p className="p2-body" style={d66At(378, 192, 330)}>
          不可修改的固有逻辑不满足海外用户使用场景
        </p>
        {/* 中国站/海外站共用同一套底层逻辑的示意 */}
        <div className="p2-chip" style={d66At(732, 160, 684, 204)} />
        <div className="p2-chip" style={d66At(760, 188, 298, 112)} />
        <div className="p2-chip" style={d66At(1090, 188, 298, 112)} />
        <p className="p2-label" style={centered(d66At(908.5, 234))}>
          中国站
        </p>
        <p className="p2-label" style={centered(d66At(1238.5, 234))}>
          海外站
        </p>
        <p className="p2-label" style={centered(d66At(1074.5, 328))}>
          底层逻辑
        </p>
        <p className="p2-body p2-body--dim" style={d66At(732, 396, 330)}>
          海外站页面需基于中国站原有代码逻辑复用，不允许重写核心流程
        </p>
        <p className="p2-body p2-body--dim" style={d66At(1086, 396, 330)}>
          存在不符合海外用户使用场景的固有底层逻辑造成交互体验下降
        </p>
        <hr className="p2-rule" style={d66At(24, 508, 1392)} />

        {/* ---- DESIGN 01 · 母单 / 子单 ---- */}
        <p className="p2-eyebrow" style={d66At(24, 572)}>
          DESIGN
        </p>
        <p className="p2-stepnum" style={d66At(378, 562)}>
          01
        </p>
        <p className="p2-h3" style={d66At(462, 572)}>
          保持单据在申请流程和选择使用时的展示一致性
        </p>
        <p className="p2-subhead" style={d66At(378, 680)}>
          中国站
        </p>
        <p className="p2-subhead" style={d66At(850, 680)}>
          海外站
        </p>
        <Crop
          src={p2CnPage}
          alt="中国站申请页"
          box={d66At(378, 748, 330, 376)}
          radius="8px"
          img={{ width: '100.11%', height: '100.27%', left: '-0.05%', top: 0 }}
        />
        {/* 稿中这张没有圆角 */}
        <Crop
          src={d66SelectOs}
          alt="海外站单据选择"
          box={d66At(850, 748, 566, 376)}
          img={{ width: '100%', height: '136.02%', left: 0, top: '-35.96%' }}
        />
        <img src={d66WedgeA} alt="" style={d66At(698, 784, 172, 144)} />
        <img src={d66WedgeB} alt="" style={d66At(698, 936, 172, 144)} />
        <div className="p2-card" style={d66At(396, 784, 294, 144)} />
        <div className="p2-card" style={d66At(396, 936, 294, 144)} />
        <div className="p2-card" style={d66At(878, 777, 510, 272)} />
        <p className="p2-label" style={d66At(720, 748, 118)}>
          多张单据展示为同张单据下的多个“子单”
        </p>
        <p className="p2-body p2-body--dim" style={d66At(378, 1156)}>
          固有逻辑
        </p>
        <p className="p2-body" style={d66At(378, 1188, 330)}>
          申请时添加多个行程在底层逻辑被拆分为多个单据
        </p>
        <p className="p2-body p2-body--dim" style={d66At(850, 1156)}>
          问题
        </p>
        <p className="p2-body" style={d66At(850, 1188, 566)}>
          申请时的一张单据在选择时变成多张，造成用户误解
        </p>
        <p className="p2-body p2-body--dim" style={d66At(850, 1244)}>
          设计解决
        </p>
        <p className="p2-body" style={d66At(850, 1276, 566)}>
          新增“母单/子单”概念，将单次申请后被拆分的全部单据合并展示为同一“母单”下的多张“子单”
        </p>
        <hr className="p2-rule" style={d66At(378, 1356, 1038)} />

        {/* ---- DESIGN 02 · 消除「国内 / 国际」 ---- */}
        <p className="p2-stepnum" style={d66At(378, 1410)}>
          02
        </p>
        <p className="p2-h3" style={d66At(462, 1420)}>
          消除中国视角的“国内/国际”概念
        </p>
        <p className="p2-subhead" style={d66At(378, 1528)}>
          中国站
        </p>
        <p className="p2-subhead" style={d66At(850, 1528)}>
          海外站
        </p>
        {/* 三张压暗底图 */}
        <Crop
          src={d66TripCn}
          alt="中国站行程添加"
          box={{ ...d66At(378, 1596, 450, 240), opacity: 0.4 }}
          radius="8px"
          img={{ width: '342.06%', height: '591.4%', left: '-73.46%', top: '-315.04%' }}
        />
        <Crop
          src={d66TripOs1}
          alt="海外站行程添加"
          box={{ ...d66At(850, 1596, 566, 118), opacity: 0.4 }}
          radius="8px"
          img={{ width: '184.7%', height: '1036.72%', left: '-42.35%', top: '-169.79%' }}
        />
        <Crop
          src={d66TripOs2}
          alt="海外站开启中国大陆行程后"
          box={{ ...d66At(850, 1730, 566, 166), opacity: 0.4 }}
          radius="8px"
          img={{ width: '184.7%', height: '736.14%', left: '-42.35%', top: '-121.17%' }}
        />
        {tripDetails.map(([src, x, y, w, h, img]) => (
          <Crop src={src} alt="" key={`${x}-${y}`} box={d66At(x, y, w, h)} radius="4px" img={img} />
        ))}
        <img src={d66Cursor} alt="" style={d66At(995, 1691, 22, 26)} />
        <p className="p2-label p2-label--bright" style={d66At(1023, 1688)}>
          添加中国大陆行程
        </p>
        <p className="p2-body p2-body--dim" style={d66At(378, 1928)}>
          固有逻辑
        </p>
        <p className="p2-body" style={d66At(378, 1960, 448)}>
          部分配置下国内（中国大陆）行程与国际行程分别仅可添加一组，且地点需要分别落库
        </p>
        <p className="p2-body p2-body--dim" style={d66At(852, 1928)}>
          问题
        </p>
        <p className="p2-body" style={d66At(852, 1960, 330)}>
          “国内/国际”概念在不同国家代表不同含义
        </p>
        <p className="p2-body p2-body--dim" style={d66At(850, 2016)}>
          设计解决
        </p>
        <p className="p2-body" style={d66At(850, 2048, 566)}>
          默认仅保留“国际行程”，中国大陆行程作为可通过开关开启的特殊可选项保留
        </p>
        <hr className="p2-rule" style={d66At(24, 2176, 1392)} />
      </div>
    </section>
  )
}

/* D-67 · 目标3 策略 02「PC & App 分批上线」(高 1576)
   上半 PROBLEM/DESIGN 是常规两栏,下半是两条 App 截图带:
   稿中各 1628 宽、分别从 x=-32 / x=-156 起,**出血到画板外**,
   靠 Figma frame 裁切 —— 这里用 .p2-stage--clip 补上。 */
const d67At = makeAt(1440, 1576)
const stripAt = makeAt(1628, 459)

const appStripA = [d67A1, d67A2, d67A3, d67A4, d67A5, d67A6, d67A7]
const appStripB = [d67B1, d67B2, d67B3, d67B4, d67B5, d67B6, d67B7]

/* 一条截图带:7 张 212×459,间距 24(0/236/472/…) */
function AppStrip({ shots, x, y, label }) {
  return (
    <div style={d67At(x, y, 1628, 459)}>
      {shots.map((src, i) => (
        <img
          className="p2-shot"
          key={src}
          src={src}
          alt={`${label} ${i + 1}`}
          style={{ position: 'absolute', ...stripAt(i * 236, 0, 212, 459) }}
        />
      ))}
    </div>
  )
}

function Sustainable02() {
  return (
    <section data-screen="D-67">
      <div className="p2-stage p2-stage--clip" style={{ aspectRatio: `${1440} / ${1576}` }}>
        <p className="p2-strat-num" style={d67At(24, 28)}>
          02
        </p>
        <h3 className="p2-strat-title" style={d67At(74, 24)}>
          PC &amp; App 分批上线
        </h3>

        {/* ---- PROBLEM ---- */}
        <p className="p2-eyebrow" style={d67At(24, 160)}>
          PROBLEM
        </p>
        <hr className="p2-rule" style={d67At(378, 160, 566)} />
        <p className="p2-body" style={d67At(378, 192, 566)}>
          本项目需快速上线，而开发资源有限，因此需优先PC端页面分批交付
        </p>
        {/* 与 D-58 同一根占比条:App 68 / PC 376 */}
        <div className="p2-prog" style={d67At(968, 160, 68, 64)} />
        <div className="p2-prog p2-prog--sec" style={d67At(1040, 160, 376, 64)} />
        <img src={iconPhone} alt="" style={d67At(980, 172, 28, 40)} />
        <img src={d67IconPc} alt="" style={d67At(1360, 175, 44, 34)} />
        <p
          className="p2-pctnum"
          style={{ right: pct(96, 1440), top: pct(170, 1576), textAlign: 'right' }}
        >
          &gt;85%
        </p>
        <p className="p2-body p2-body--dim" style={d67At(968, 256, 448)}>
          当前海外站在PC端使用率超过85%，占据压倒性优势
        </p>
        <hr className="p2-rule" style={d67At(24, 344, 1392)} />

        {/* ---- DESIGN ---- */}
        <p className="p2-eyebrow" style={d67At(24, 408)}>
          DESIGN
        </p>
        <p className="p2-h3" style={d67At(378, 414)}>
          基于PC端页面，拓展设计App端页面并如期上线
        </p>
        <AppStrip shots={appStripA} x={-32} y={522} label="App 端页面" />
        <AppStrip shots={appStripB} x={-156} y={1013} label="App 端页面" />
      </div>
    </section>
  )
}

/* D-77 · PRODUCT IMPACT(高 524;标题块 96 在舞台外 → 舞台 428)
   与 project 1 的同名子屏同构,复用 .proj-impact-* */
const impactAt = makeAt(1440, 428)
const I = (y) => y - 96

const impacts = [
  ['01', 24, '项目顺利落地', '功能上线并投入各海外站点使用，目前周均使用200+，未出现因交互问题产生的客诉'],
  [
    '02',
    614,
    '支持功能迭代',
    'PC端和App端依次上线之后，又在页面基础上陆续拓展了“单据修改”等更多功能，进一步丰富了服务范围',
  ],
]

function ProductImpact() {
  return (
    <section data-screen="D-77">
      <SectionHeading>PRODUCT IMPACT</SectionHeading>
      <div className="proj-impact" style={{ aspectRatio: `${1440} / ${428}` }}>
        <span className="proj-impact-kicker" style={impactAt(24, I(160))}>
          项目成果总结
        </span>
        {impacts.map(([num, x, title, body]) => (
          <Fragment key={num}>
            <span className="proj-impact-num" style={impactAt(x, I(228))}>
              {num}
            </span>
            <span className="proj-impact-title" style={impactAt(x, I(312))}>
              {title}
            </span>
            <p className="proj-impact-body" style={impactAt(x, I(372), 448)}>
              {body}
            </p>
          </Fragment>
        ))}
      </div>
    </section>
  )
}

/* 2026 · 收尾字幕(高 768,无区块标题)
   三行描边空心大字是导出的 SVG(稿中 opacity 0.6),不是可排版文本 */
const closeAt = makeAt(1440, 768)

function Closer() {
  return (
    <section data-screen="2026">
      <div className="p2-stage" style={{ aspectRatio: `${1440} / ${768}` }}>
        <hr className="p2-rule" style={closeAt(24, 24, 1392)} />
        <img
          src={d77WordTravel}
          alt="Travel Request"
          style={closeAt(24, 128, 1323, 159.568)}
        />
        <img src={d77WordLaunch} alt="Launch" style={closeAt(24, 287.57, 530.927, 133.287)} />
        <img
          src={d77WordOverseas}
          alt="for Overseas Site"
          style={closeAt(24, 421, 1392, 142.584)}
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
      <DesignPrinciples />
      <DesignObjectives />

      <ObjectiveOpener
        screen="D-37"
        heading="OBJECTIVE NO.1"
        cnTitle="使用体验优化"
        enSub="Usability Enhancement"
        strategies={['拆解表单，简化复杂任务', '新增草稿功能，解决用户痛点', '增加提示，提供即时帮助']}
      />
      <Strategy01 />
      <Strategy02 />
      <Strategy03 />

      <ObjectiveOpener
        screen="D-62a"
        heading="OBJECTIVE NO.2"
        cnTitle="多语言与本地化适配"
        enSub="Localization Adaptation"
        strategies={['按多语言要求调整字段展示', '制定特殊场景字段展示规则']}
      />
      <Localization01 />
      <Localization02 />

      {/* 第一条策略会折成两行；原稿将第二行的序号、文字和分割线整体下移 8px。 */}
      <ObjectiveOpener
        screen="D-65"
        heading="OBJECTIVE NO.3"
        cnTitle="高效推进与体验保障"
        enSub="Sustainable Experience"
        strategies={['基于固有逻辑，通过前端展示优化体验', 'PC & App 分批上线']}
        strategyOffsets={[0, 8]}
      />
      <Sustainable01 />
      <Sustainable02 />
      <ProductImpact />
      <Closer />
    </>
  )
}

export default Project2
