import { lazy, Suspense } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProject } from '../data/projects.js'
import NotFound from './NotFound.jsx'

/* slug → 页面组件;还原完成一个就在这里挂一个(按路由代码分割) */
const pages = {
  'project-1': lazy(() => import('./projects/Project1.jsx')),
}

/**
 * Project 子页外壳(二级页面,Dark 主题 + 项目专属强调色)。
 */
function Project() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) return <NotFound />

  const Page = pages[slug]

  return (
    <main className="page page--project" data-theme="dark" data-project={project.accent}>
      {Page ? (
        <Suspense fallback={null}>
          <Page />
        </Suspense>
      ) : (
        <div className="page--center" style={{ minHeight: '100svh' }}>
          <header className="project-header">
            <Link to="/">← PFLO</Link>
            <h1 style={{ color: 'var(--accent-primary)' }}>{project.title}</h1>
            <p>内容还原中 —— 对应 Figma 画板 {project.figmaNodeId}</p>
          </header>
        </div>
      )}
    </main>
  )
}

export default Project
