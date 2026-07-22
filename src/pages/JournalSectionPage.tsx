import { Navigate, useParams } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { PlaceholderPanel } from '../components/PlaceholderPanel'
import { findSection, journalSections } from '../data/site'

export function JournalSectionPage() {
  const { section } = useParams()
  const current = findSection(journalSections, section)

  if (!current) {
    return <Navigate to="/journal" replace />
  }

  return (
    <>
      <PageHero
        en={current.label}
        title={current.poetic}
        lead={current.desc}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Journal', to: '/journal' },
          { label: current.title },
        ]}
      />
      <section className="page-panel">
        <div className="container">
          <PlaceholderPanel
            title="Blank page under moonlight"
            text="Entries will arrive as handwritten notes—dates, titles, and quiet lines."
          />
        </div>
      </section>
    </>
  )
}
