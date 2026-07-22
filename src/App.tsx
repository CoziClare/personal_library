import { Routes, Route } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { HomePage } from './pages/HomePage'
import { LibraryPage } from './pages/LibraryPage'
import { LibrarySectionPage } from './pages/LibrarySectionPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ProjectSectionPage } from './pages/ProjectSectionPage'
import { JournalPage } from './pages/JournalPage'
import { JournalSectionPage } from './pages/JournalSectionPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ScrollToTop } from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="library" element={<LibraryPage />} />
          <Route path="library/:section" element={<LibrarySectionPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:section" element={<ProjectSectionPage />} />
          <Route path="journal" element={<JournalPage />} />
          <Route path="journal/:section" element={<JournalSectionPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
