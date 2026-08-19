import { Navigate, useParams } from 'react-router-dom'
import { MistReveal } from '../components/MistReveal'
import { PageHero } from '../components/PageHero'
import { PlaceholderPanel } from '../components/PlaceholderPanel'
import { findSection, librarySections, liBaiPoems, psychologyBooks } from '../data/site'

export function LibrarySectionPage() {
  const { section } = useParams()
  const current = findSection(librarySections, section)

  if (!current) {
    return <Navigate to="/library" replace />
  }

  const isPsychology = current.slug === 'psychology'
  const isChineseCulture = current.slug === 'chinese-culture'

  return (
    <>
      <PageHero
        en={current.label}
        title={current.poetic}
        lead={
          isChineseCulture
            ? '李白诗词 · Li Bai — brief bilingual readings'
            : current.desc
        }
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
          ) : isChineseCulture ? (
            <div className="poem-list">
              {liBaiPoems.map((poem, index) => (
                <MistReveal key={poem.titleZh} delayMs={index * 100}>
                  <article className="poem-card">
                    <p className="poem-card__poet">李白 · Li Bai</p>
                    <h2 className="poem-card__title-zh">{poem.titleZh}</h2>
                    <p className="poem-card__title-en">{poem.titleEn}</p>
                    <div className="poem-card__rule" />
                    <div className="poem-card__verse poem-card__verse--zh">
                      {poem.linesZh.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                    <div className="poem-card__verse poem-card__verse--en">
                      {poem.linesEn.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                    <div className="poem-card__rule poem-card__rule--short" />
                    <p className="poem-card__label">赏析 · Reading</p>
                    <p className="poem-card__note-zh">{poem.noteZh}</p>
                    <p className="poem-card__note-en">{poem.noteEn}</p>
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
