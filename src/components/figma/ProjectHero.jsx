/**
 * 项目页头图(稿中名为「10x」的首个子屏,固定 812 高)。
 *
 * 各项目页结构完全一致,只换文案 —— 元素坐标在稿中逐项相同:
 * 主色带 y=492 h=320、英文主标题 y=136 h=240、中文标题 y=392 h=84、
 * 元信息标签 y=508 / 值 y=532,四列从 33.33%+16px 起。
 *
 * meta 按稿中列序传入(Timeline / Platform / Category / Tool),
 * 不同项目的列名可能不同(project 2 用的是 Tools 复数),照抄源文字。
 */
export default function ProjectHero({ label, enTitle, cnTitle, meta, nodeId, screen }) {
  return (
    <section className="proj-hero" data-node-id={nodeId} data-screen={screen}>
      <header className="proj-hero__top">
        <span>{label}</span>
      </header>
      <h1 className="proj-hero__title-en">{enTitle}</h1>
      <p className="proj-hero__title-cn">{cnTitle}</p>
      <div className="proj-hero__band">
        <dl className="proj-hero__meta">
          {meta.map(([dt, dd]) => (
            <div key={dt}>
              <dt>{dt}</dt>
              <dd>{dd}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
