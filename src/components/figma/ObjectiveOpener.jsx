import SectionHeading from './SectionHeading.jsx'
import { makeAt } from './coords.js'

const W = 1440
const H = 532
const at = makeAt(W, H)

/**
 * 章节开屏(主色横幅)。
 *
 * ⚠️ 主色带在稿中是**固定** 1440×532,策略条目钉在 y = 124 + i×136,
 * 分割线 y = 228 + (i−1)×136 —— 不随策略条数伸缩。做成内容撑高的话,
 * 只有 2 条策略的章节会整体塌陷(目标3 曾因此少 173px)。
 *
 * 坐标为带内相对值(稿中绝对 y 减去带顶 96)。
 */
export default function ObjectiveOpener({ heading, goal, cnTitle, enSub, strategies, nodeId, screen }) {
  return (
    <section data-node-id={nodeId} data-screen={screen}>
      <SectionHeading>{heading}</SectionHeading>
      <div className="proj-objopen">
        {/* goal 可选:project 1 是「设计目标 提升拓展性」,project 2 只有标签 */}
        <p className="proj-objopen__goal" style={at(24, 64)}>
          设计目标{goal && <strong>{goal}</strong>}
        </p>
        <h3 className="proj-objopen__title" style={at(24, 108)}>
          {cnTitle}
        </h3>
        <p className="proj-objopen__sub" style={at(24, 200, 302)}>
          {enSub}
        </p>
        <p className="proj-kicker" style={at(968, 64)}>
          设计策略
        </p>
        {strategies.map((s, i) => (
          <strong className="proj-objopen__num" key={`n${s}`} style={at(968, 124 + i * 136)}>
            {String(i + 1).padStart(2, '0')}
          </strong>
        ))}
        {strategies.map((s, i) => (
          <span className="proj-objopen__item" key={`t${s}`} style={at(1048, 132 + i * 136, 368)}>
            {s}
          </span>
        ))}
        {strategies.slice(1).map((s, i) => (
          <hr className="proj-objopen__rule" key={`r${s}`} style={at(968, 228 + i * 136, 448)} />
        ))}
      </div>
    </section>
  )
}
