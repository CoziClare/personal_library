import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Crumb = {
  label: string
  to?: string
}

type PageHeroProps = {
  en: string
  title: string
  lead: string
  crumbs?: Crumb[]
  children?: ReactNode
}

export function PageHero({ en, title, lead, crumbs, children }: PageHeroProps) {
  return (
    <header className="page-hero">
      <div className="container">
        {crumbs && crumbs.length > 0 && (
          <p className="page-hero__crumb">
            {crumbs.map((crumb, index) => (
              <span key={`${crumb.label}-${index}`}>
                {index > 0 && ' / '}
                {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : crumb.label}
              </span>
            ))}
          </p>
        )}
        <p className="page-hero__en">{en}</p>
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__lead">{lead}</p>
        {children}
      </div>
    </header>
  )
}
