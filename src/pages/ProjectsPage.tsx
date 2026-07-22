import { Link } from 'react-router-dom'
import { MistReveal } from '../components/MistReveal'
import { PageHero } from '../components/PageHero'
import { projectSections } from '../data/site'

export function ProjectsPage() {
  return (
    <>
      <PageHero
        en="Projects"
        title="造物"
        lead="Each project hangs like a scroll—hover, and it unfolds."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Projects' }]}
      />

      <section className="page-panel">
        <div className="container">
          <div className="scroll-list">
            {projectSections.map((section, index) => (
              <MistReveal key={section.slug} delayMs={index * 140}>
                <Link className="scroll-item" to={`/projects/${section.slug}`}>
                  <p className="scroll-item__poetic">{section.poetic}</p>
                  <h2 className="scroll-item__title">{section.title}</h2>
                  <p className="scroll-item__desc">{section.desc}</p>
                </Link>
              </MistReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
