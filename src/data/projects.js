/**
 * 项目注册表 —— 站点内所有 project 的唯一数据源。
 * 增删项目 = 改这里 + 对应的页面组件;首页/未来的索引页都从这里读。
 *
 * accent: 对应 Figma「项目主题色」编号(data-project 属性),各项目独立使用,不跨项目混用。
 * figmaNodeId: Page 1 上对应画板的节点 id,便于回溯设计稿。
 */
export const projects = [
  { slug: 'project-1', title: 'Project 1', accent: 1, figmaNodeId: '1:161' },
  { slug: 'project-2', title: 'Project 2', accent: 2, figmaNodeId: '1:1128' },
  { slug: 'project-3', title: 'Project 3', accent: 3, figmaNodeId: '167:501' },
  { slug: 'project-4', title: 'Project 4', accent: 4, figmaNodeId: '167:998' },
]

export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}
