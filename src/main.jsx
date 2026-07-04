import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// 自托管可变字体(与站点同源,境内外访问一致;中文按 unicode-range 切片按需加载)
import '@fontsource-variable/montserrat'
import '@fontsource-variable/inter'
import '@fontsource-variable/noto-sans-sc'

import './index.css'
import Home from './pages/Home.jsx'
import Project from './pages/Project.jsx'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/projects/:slug', element: <Project /> },
  { path: '*', element: <NotFound /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
