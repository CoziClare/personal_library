import { Link } from 'react-router-dom'
import { MistReveal } from '../components/MistReveal'
import { PageHero } from '../components/PageHero'
import { journalSections } from '../data/site'

export function JournalPage() {
  return (
    <>
      <PageHero
        en="Journal"
        title="随笔"
        lead="Lighter than finished essays. More intentional than raw drafts."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Journal' }]}
      />

      <section className="page-panel">
        <div className="container">
          <div className="shelf-grid">
            {journalSections.map((section, index) => (
              <MistReveal key={section.slug} delayMs={index * 100}>
                <Link className="shelf-item" to={`/journal/${section.slug}`}>
                  <h2 className="shelf-item__poetic">{section.poetic}</h2>
                  <p className="shelf-item__label">{section.label}</p>
                  <p className="shelf-item__desc">{section.desc}</p>
                </Link>
              </MistReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
