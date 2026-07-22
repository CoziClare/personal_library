import { MistReveal } from '../components/MistReveal'
import { PageHero } from '../components/PageHero'
import { contactLinks } from '../data/site'

export function ContactPage() {
  return (
    <>
      <PageHero
        en="Contact"
        title="鸿雁"
        lead="A letter need not be loud to arrive."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />
      <section className="page-panel">
        <div className="container">
          <MistReveal>
            <p className="contact-lead">飞鸟可传书。</p>
            <div className="seal-list">
              {contactLinks.map((link) => (
                <a key={link.label} className="seal" href={link.href}>
                  <div>
                    <div className="seal__label">{link.label}</div>
                    <div className="seal__note">{link.note}</div>
                  </div>
                </a>
              ))}
            </div>
          </MistReveal>
        </div>
      </section>
    </>
  )
}
