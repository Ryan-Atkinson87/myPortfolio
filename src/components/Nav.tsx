import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { ThemeToggle } from '@/components/ThemeToggle'
import { useTheme } from '@/lib/theme'

const NAV_LINKS = [
  { label: 'Home', to: '/', end: true },
  { label: 'Projects', to: '/projects', end: false },
  { label: 'Skills', to: '/skills', end: false },
  { label: 'About', to: '/about', end: false },
  { label: 'Links', to: '/links', end: false },
  { label: 'Contact', to: '/contact', end: false },
]

const MARK_LIGHT = '/assets/trive-symbol.png'
const MARK_DARK = '/assets/trive-symbol-dark.png'

export function Nav() {
  const { theme } = useTheme()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the mobile menu when the route changes — derived during render
  // (not an effect) per React's "adjusting state on prop change" pattern.
  const [lastPathname, setLastPathname] = useState(location.pathname)
  if (location.pathname !== lastPathname) {
    setLastPathname(location.pathname)
    setMenuOpen(false)
  }

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <NavLink className="brand" to="/" aria-label="Ryan Atkinson, home">
          <img className="mark" src={theme === 'dark' ? MARK_DARK : MARK_LIGHT} alt="Trive mark" />
          <span className="wm">
            <span className="name">RYAN ATKINSON</span>
            <span className="sub">Software Engineer</span>
          </span>
        </NavLink>

        <nav className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-right">
          <ThemeToggle />
          <button
            type="button"
            className="nav-burger"
            id="navBurger"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
