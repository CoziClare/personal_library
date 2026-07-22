import { Link } from 'react-router-dom'
import { MistReveal } from '../components/MistReveal'
import { journalNotes, librarySections, site } from '../data/site'

export function HomePage() {
  return (
    <>
      <section className="hero" aria-label="Entrance">
        <div className="container hero__content">
          <h1 className="hero__poem">{site.heroPoem}</h1>
          <p className="hero__line">{site.heroLine}</p>
          <p className="hero__lead">{site.heroLead}</p>
          <div className="hero__actions">
            <Link className="btn" to="/library">
              Enter the Pavilion
            </Link>
            <Link className="btn btn--gold" to="/about">
              山中人
            </Link>
          </div>
          <p className="hero__door">Open the bamboo door. The moonlight is already here.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <MistReveal>
            <div className="section__head">
              <p className="section__en">Library</p>
              <h2 className="section__title">藏书</h2>
              <div className="section__rule" />
              <p className="section__verse">{'一卷在手，\n山河俱静。'}</p>
              <p className="section__desc">Books are not collected. They arrive.</p>
            </div>
          </MistReveal>

          <div className="shelf-grid">
            {librarySections.map((section, index) => (
              <MistReveal key={section.slug} delayMs={index * 120}>
                <Link className="shelf-item" to={`/library/${section.slug}`}>
                  <h3 className="shelf-item__poetic">{section.poetic}</h3>
                  <p className="shelf-item__label">{section.label}</p>
                  <p className="shelf-item__desc">{section.desc}</p>
                </Link>
              </MistReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <MistReveal>
            <div className="section__head">
              <p className="section__en">Journal</p>
              <h2 className="section__title">最新随笔</h2>
              <div className="section__rule" />
              <p className="section__desc">Notes that feel handwritten under moonlight.</p>
            </div>
          </MistReveal>

          <div className="note-list">
            {journalNotes.map((note, index) => (
              <MistReveal key={note.title} delayMs={index * 140}>
                <article className="note-card">
                  <h3 className="note-card__title">{note.title}</h3>
                  <p className="note-card__en">{note.en}</p>
                  <p className="note-card__body">{note.body}</p>
                </article>
              </MistReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <MistReveal>
            <div className="section__head">
              <p className="section__en">Projects</p>
              <h2 className="section__title">造物</h2>
              <div className="section__rule" />
              <p className="section__desc">Ideas hung like scrolls—unfold slowly.</p>
            </div>
          </MistReveal>

          <MistReveal delayMs={120}>
            <Link className="btn" to="/projects">
              View scrolls
            </Link>
          </MistReveal>
        </div>
      </section>
    </>
  )
}
