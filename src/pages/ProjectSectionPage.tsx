import { Navigate, useParams } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { PlaceholderPanel } from '../components/PlaceholderPanel'
import { findSection, projectSections } from '../data/site'

export function ProjectSectionPage() {
  const { section } = useParams()
  const current = findSection(projectSections, section)

  if (!current) {
    return <Navigate to="/projects" replace />
  }

  return (
    <>
      <PageHero
        en={current.label}
        title={current.poetic}
        lead={current.desc}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Projects', to: '/projects' },
          { label: current.title },
        ]}
      />
      <section className="page-panel">
        <div className="container">
          <PlaceholderPanel
            title="Scroll still furled"
            text="Notes, demos, and iterations will appear here when ready."
          />
        </div>
      </section>
    </>
  )
}
