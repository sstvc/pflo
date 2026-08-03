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
import iconPhone from '../../assets/projects/p2/d58-icon-phone.svg'
import d59Bars from '../../assets/projects/p2/d59-bars.svg'
import d59Img1 from '../../assets/projects/p2/d59-img1.png'
import d59Img12 from '../../assets/projects/p2/d59-img12.png'
import d59Img2 from '../../assets/projects/p2/d59-img2.png'
import d59Img2042 from '../../assets/projects/p2/d59-img2042.png'
import d59Img2043 from '../../assets/projects/p2/d59-img2043.png'
import d59Img2044 from '../../assets/projects/p2/d59-img2044.png'
import d59Img5 from '../../assets/projects/p2/d59-img5.png'
import d59Img6 from '../../assets/projects/p2/d59-img6.png'
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
          src={d59Img2042}
          alt="出差申请页表单下半部分"
          box={d59At(968, 270, 448, 250)}
          radius="0 0 8px 8px"
          img={{ width: '100.1%', height: '336.01%', left: '-0.05%', top: '-232.01%' }}
        />
        <img src={d59Rect303} alt="" style={d59At(841, 260, 590, 234)} />
        <Crop
          src={d59Img2044}
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
          src={d59Img6}
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
      {/* TODO: D-62 1464 / D-61 1452 */}

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
