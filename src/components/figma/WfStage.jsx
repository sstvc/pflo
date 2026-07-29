import { pct } from './coords.js'

/**
 * 线框示意图舞台。用 CSS 方块还原稿中的结构示意,
 * 好处是跟随 --accent-* 自动换项目色、缩放不糊、零资产体积。
 *
 * boxes: [{ v, l, t, w, h }]  v = light | accent | frame | ghost
 * chips: [{ text, l, t }]     叠在截图上的标注小标签
 * w/h  : 该示意图在设计稿中的尺寸
 */
export default function WfStage({ w, h, boxes = [], chips = [], className = '' }) {
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
