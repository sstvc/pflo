import { pct } from './coords.js'

/**
 * 优先级色块示意舞台 —— 块 / 标签 / 图 / 虚线全部按百分比绝对定位。
 *
 * items 每项用 k 区分类型:
 *   block  { v, x, y, w, h }   v = a20|a50|s20|s50(主色/辅色 × 20%/50% 透明度)
 *   img    { src, alt, x, y, w }
 *   label  { text, x, y, lit?, align? }   align = right | center
 *   title  { text, x, y, s? }             s = 用辅助色
 *   desc   { text, x, y }
 *   sq     { o, x, y }                    图例小方块,o = 20|40|50
 *   vdash  { x, y, h }  /  hdash { x, y, w }
 */
export default function PriStage({ w, h, style, items }) {
  const S = (x, y, ww, hh) => ({
    left: pct(x, w),
    top: pct(y, h),
    ...(ww != null && { width: pct(ww, w) }),
    ...(hh != null && { height: pct(hh, h) }),
  })
  return (
    <div className="proj-pri-stage" style={{ aspectRatio: `${w} / ${h}`, ...style }}>
      {items.map((it, i) => {
        if (it.k === 'block')
          return (
            <div key={i} className={`proj-pri-block proj-pri-block--${it.v}`} style={S(it.x, it.y, it.w, it.h)} />
          )
        if (it.k === 'img')
          return (
            <div key={i} className="proj-pri-img" style={S(it.x, it.y, it.w)}>
              <img src={it.src} alt={it.alt} />
            </div>
          )
        if (it.k === 'label')
          return (
            <span
              key={i}
              className={`proj-pri-label${it.lit ? ' proj-pri-label--lit' : ''}${it.align ? ` proj-pri-label--${it.align}` : ''}`}
              style={S(it.x, it.y)}
            >
              {it.text}
            </span>
          )
        if (it.k === 'title')
          return (
            <span key={i} className={`proj-pri-title${it.s ? ' proj-pri-title--s' : ''}`} style={S(it.x, it.y)}>
              {it.text}
            </span>
          )
        if (it.k === 'desc')
          return (
            <span key={i} className="proj-pri-desc" style={S(it.x, it.y)}>
              {it.text}
            </span>
          )
        if (it.k === 'sq') return <span key={i} className={`proj-pri-sq proj-pri-sq--${it.o}`} style={S(it.x, it.y)} />
        if (it.k === 'vdash')
          return <div key={i} className="proj-pri-vdash" style={{ ...S(it.x, it.y), height: pct(it.h, h) }} />
        if (it.k === 'hdash')
          return <div key={i} className="proj-pri-hdash" style={{ ...S(it.x, it.y), width: pct(it.w, w) }} />
        return null
      })}
    </div>
  )
}
