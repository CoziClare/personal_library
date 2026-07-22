import { site } from '../data/site'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__rule" />
        <p className="site-footer__poem">
          {site.footerPoem.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <div className="site-footer__meta">
          <span>© {new Date().getFullYear()} {site.brand}</span>
          <span>{site.location}</span>
        </div>
      </div>
    </footer>
  )
}
