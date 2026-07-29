import { Navigate, useParams } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { MistReveal } from '../components/MistReveal'
import { PlaceholderPanel } from '../components/PlaceholderPanel'
import { findSection, journalSections, thoughtEntries } from '../data/site'

export function JournalSectionPage() {
  const { section } = useParams()
  const current = findSection(journalSections, section)

  if (!current) {
    return <Navigate to="/journal" replace />
  }
const isThoughts = current.slug === 'thoughts'

  
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
          {isThoughts ? (
            <div className="note-list">
              {thoughtEntries.map((entry, index) => (
                <MistReveal key={`${entry.date}-${entry.title}`} delayMs={index * 120}>
                  <article className="note-card">
                    <p className="note-card__en">{entry.date}</p>
                    <h2 className="note-card__title">{entry.title}</h2>
                    <p className="note-card__body">{entry.body}</p>
                  </article>
                </MistReveal>
              ))}
            </div>
          ) : (
            <PlaceholderPanel
              title="Blank page under moonlight"
              text="Entries will arrive as handwritten notes—dates, titles, and quiet lines."
            />
          )}
        </div>
      </section>
    </>
  )
}
