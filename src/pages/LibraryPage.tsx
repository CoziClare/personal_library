import { Link } from 'react-router-dom'
import { MistReveal } from '../components/MistReveal'
import { PageHero } from '../components/PageHero'
import { librarySections } from '../data/site'

export function LibraryPage() {
  return (
    <>
      <PageHero
        en="Library"
        title="书海无涯"
        lead="Books are not collected. They arrive."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Library' }]}
      />

      <section className="page-panel">
        <div className="container">
          <div className="shelf-grid">
            {librarySections.map((section, index) => (
              <MistReveal key={section.slug} delayMs={index * 100}>
                <Link className="shelf-item" to={`/library/${section.slug}`}>
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
