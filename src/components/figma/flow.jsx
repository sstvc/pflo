/**
 * 用户 ↔ 平台流程图的箭头。Figma 导出为线条 SVG,直接内联(体积小于一次请求)。
 */
export function FlowArrow() {
  return (
    <svg width="138" height="36" viewBox="0 0 138 36" fill="none" aria-hidden="true">
      <path d="M130 5L137 18.0001L130 31" stroke="var(--light-border)" />
      <path d="M137 18H0" stroke="var(--light-border)" />
    </svg>
  )
}

/** 流程图节点:圆形=用户,方形=平台 */
export function FlowNode({ shape, label }) {
  return (
    <div className="proj-flow__node">
      <div className={shape === 'circle' ? 'proj-flow__circle' : 'proj-flow__square'} />
      <span>{label}</span>
    </div>
  )
}

/**
 * 手型光标叠加。
 *
 * ⚠️ SVG 无固有尺寸,**必须显式锁 aspect-ratio**,且 height 要显式为 auto ——
 * 否则一旦被 `.parent img { width/height }` 这类宽选择器命中就会撑爆
 * (曾出现占满整屏的巨手)。
 */
export function Cursor({ src, left, top, width = '1.34%', ratio = '7 / 9' }) {
  return (
    <img
      className="proj-cursor"
      src={src}
      alt=""
      style={{ left, top, width, height: 'auto', aspectRatio: ratio }}
    />
  )
}
