import { Link } from 'react-router-dom'

/** 404 —— project 会被增删,失效链接需要兜底。 */
function NotFound() {
  return (
    <main className="page page--not-found">
      <h1>404</h1>
      <p>这个页面不存在,或已被移除。</p>
      <Link to="/">回首页</Link>
    </main>
  )
}

export default NotFound
