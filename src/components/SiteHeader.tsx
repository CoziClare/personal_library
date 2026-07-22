import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { navItems, site } from '../data/site'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__mark">{site.brand}</span>
          <span className="brand__en">{site.brandEn}</span>
        </Link>

        <button
          type="button"
          className={`nav-toggle${open ? ' is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
        </button>

        <nav className={`nav${open ? ' is-open' : ''}`} aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              <span className="nav-link__en">{item.label}</span>
              <span className="nav-link__zh">{item.poetic}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
