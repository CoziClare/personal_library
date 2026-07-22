import { Navigate, useParams } from 'react-router-dom'
import { MistReveal } from '../components/MistReveal'
import { PageHero } from '../components/PageHero'
import { PlaceholderPanel } from '../components/PlaceholderPanel'
import { findSection, librarySections, psychologyBooks } from '../data/site'

export function LibrarySectionPage() {
  const { section } = useParams()
  const current = findSection(librarySections, section)

  if (!current) {
    return <Navigate to="/library" replace />
  }

  const isPsychology = current.slug === 'psychology'

  return (
    <>
      <PageHero
        en={current.label}
        title={current.poetic}
        lead={current.desc}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Library', to: '/library' },
          { label: current.label },
        ]}
      />
      <section className="page-panel">
        <div className="container">
          {isPsychology ? (
            <div className="book-list">
              {psychologyBooks.map((book) => (
                <MistReveal key={book.url}>
                  <article className="book-label">
                    <h2 className="book-label__zh">{book.titleZh}</h2>
                    <p className="book-label__title">{book.title}</p>
                    <p className="book-label__author">{book.author}</p>
                    <div className="book-label__rule" />
                    <p className="book-label__quote">“{book.quote}”</p>
                    <p className="book-label__note">心得</p>
                    <p className="book-label__intro">{book.intro}</p>
                    <a
                      className="btn btn--gold"
                      href={book.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Amazon
                    </a>
                  </article>
                </MistReveal>
              ))}
            </div>
          ) : (
            <PlaceholderPanel
              title={`${current.verse} · awaiting pages`}
              text="Titles will appear here like museum labels—large spacing, quiet quotes, and room to breathe."
            />
          )}
        </div>
      </section>
    </>
  )
}
