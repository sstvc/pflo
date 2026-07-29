import { pct } from './coords.js'

/**
 * 条带:定位容器 + 内部整图或同源裁切。
 *
 * (x, y, w, h) 是它在舞台 (W, H) 中的位置尺寸,均为设计稿坐标。
 * crop 传 Figma 导出代码里那组百分比({ h, l, t, w }),即可从一张大图里
 * 取出任意局部 —— 同一张源图可复用无数次,不必导出多份资产。
 */
export function Strip({ x, y, w, h, W, H, src, crop, opacity, radius = 8, alt = '' }) {
  return (
    <div
      className="proj-crop"
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

/**
 * 整屏导出图的切片。
 *
 * 用于「几十个碎标注叠在一张截图上」的子屏:整屏 1x 导出一次(深色底常
 * 只有几百 KB),再按区域切片摆放,比逐个还原标注现实得多。
 *
 * (x, y) 是切片在舞台中的摆放位置,(sx, sy) 是它在整图 (imgW × imgH) 内的裁切原点。
 */
export function IntSlice({ x, y, w, h, W, H, sx, sy, src, imgW = 1440, alt = '' }) {
  return (
    <div
      className="proj-crop"
      style={{ left: pct(x, W), top: pct(y, H), width: pct(w, W), height: pct(h, H), borderRadius: 0 }}
    >
      <img src={src} alt={alt} style={{ width: pct(imgW, w), left: pct(-sx, w), top: pct(-sy, h) }} />
    </div>
  )
}

/**
 * 放大镜面板:描边圆角容器,内部用同源图全亮显示局部。
 *
 * 配合「底层放暗化的完整截图」使用 —— 这是本项目最常用的手法,全 CSS,
 * 不需要为高亮态额外导出资产。
 *
 * ⚠️ 面板的内发光在稿中是**最后一个子元素**(画在内容之上),
 * 已在 .proj-spot-panel::after 实现,不要塌成父元素的 box-shadow: inset。
 */
export function AdvPill({ x, y, w, h, W, H, innerX, innerTops, crops, imgs, src, stripH }) {
  return (
    <div className="proj-spot-panel" style={{ left: pct(x, W), top: pct(y, H), width: pct(w, W), height: pct(h, H) }}>
      {innerTops.map((t, i) => (
        <Strip
          key={i}
          x={innerX}
          y={t}
          w={1180}
          h={stripH ?? (crops ? 112 : 132)}
          W={w}
          H={h}
          src={imgs ? imgs[i] : src}
          crop={crops ? crops[i] : undefined}
          radius={crops ? 8 : 0}
        />
      ))}
    </div>
  )
}
