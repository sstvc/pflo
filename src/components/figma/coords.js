/**
 * 设计稿坐标 → CSS 百分比。
 *
 * 所有还原用的「舞台」都按此工作:容器用 aspect-ratio 锁住设计稿比例,
 * 子元素用百分比定位。这样整页随视口宽等比缩放,不会因为固定 px
 * 与百分比混用而错位(1440 视口带滚动条时缩放约 0.9896)。
 */
export const pct = (v, base) => `${((v / base) * 100).toFixed(3)}%`

/**
 * 生成某个舞台的定位函数。坐标直接填设计稿数值,可读性最好。
 *
 *   const at = makeAt(1440, 532)
 *   <span style={at(24, 160)}>…</span>          // x=24, y=160
 *   <span style={at(24, 200, 302)}>…</span>     // 再指定宽度 302
 */
export const makeAt =
  (W, H) =>
  (x, y, w, h) => ({
    left: pct(x, W),
    top: pct(y, H),
    ...(w != null && { width: pct(w, W) }),
    ...(h != null && { height: pct(h, H) }),
  })

/** 舞台容器的 style:锁定设计稿比例 */
export const stageStyle = (W, H, extra) => ({ aspectRatio: `${W} / ${H}`, ...extra })
