import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

/**
 * 临时首页 —— 仅作为 project 子页的入口。
 * 等 Figma 里的正式首页稿出来后整页替换。
 */
function Home() {
  return (
    <main className="page page--home">
      <h1>PFLO</h1>
      <nav aria-label="Projects">
        <ul className="home-project-list">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link to={`/projects/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  )
}

export default Home
