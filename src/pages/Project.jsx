import { Link, useParams } from 'react-router-dom'
import { getProject } from '../data/projects.js'
import NotFound from './NotFound.jsx'

/**
 * Project 子页(二级页面,Dark 主题)。
 * 目前是占位骨架;逐个还原 Figma 稿时替换内容区。
 */
function Project() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) return <NotFound />

  return (
    <main className="page page--project" data-theme="dark" data-project={project.accent}>
      <header className="project-header">
        <Link to="/">← PFLO</Link>
        <h1 style={{ color: 'var(--accent-primary)' }}>{project.title}</h1>
        <p>内容还原中 —— 对应 Figma 画板 {project.figmaNodeId}</p>
      </header>
    </main>
  )
}

export default Project
