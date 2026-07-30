<div className="about-portrait">
  <img src={portrait} alt="Portrait" />
</div>import { MistReveal } from '../components/MistReveal'
import { PageHero } from '../components/PageHero'
import { aboutLines } from '../data/site'

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
              <p className="about-poem">{aboutLines.join('\n')}</p>
              <div className="about-portrait">
                <img src={portrait} alt="IMG_9837" />
              </div>
            </div>
          </MistReveal>
        </div>
      </section>
    </>
  )
}
