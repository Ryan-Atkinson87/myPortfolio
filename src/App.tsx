import { Route, Routes } from 'react-router-dom'

import { Layout } from '@/components/Layout'
import { ThemeProvider } from '@/components/ThemeProvider'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'
import { Home } from '@/pages/Home'
import { Links } from '@/pages/Links'
import { NotFound } from '@/pages/NotFound'
import { ProjectDetail } from '@/pages/ProjectDetail'
import { Projects } from '@/pages/Projects'
import { Skills } from '@/pages/Skills'
import { Writing } from '@/pages/Writing'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="skills" element={<Skills />} />
          <Route path="about" element={<About />} />
          <Route path="links" element={<Links />} />
          <Route path="contact" element={<Contact />} />
          <Route path="writing" element={<Writing />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
