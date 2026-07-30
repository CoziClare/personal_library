import { MistReveal } from '../components/MistReveal'
import { PageHero } from '../components/PageHero'
import { aboutLines } from '../data/site'
import portrait from '../assets/portrait.jpg'

export function AboutPage() {
  return (
    <>
      <PageHero
        en="About"
        title="山中人"
        lead="A quiet self-portrait beside the pavilion."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      <section className="page-panel">
        <div className="container">
          <MistReveal>
            <div className="about-grid">
              <div className="about-poem">
                {aboutLines.map((line, index) => (
                  <div key={index}>{line || '\u00A0'}</div>
                ))}
              </div>

              <div className="about-portrait">
                <img src={portrait} alt="Portrait of the author" />
              </div>
            </div>
          </MistReveal>
        </div>
      </section>
    </>
  )
}
