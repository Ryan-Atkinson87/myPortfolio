import { NavLink } from 'react-router-dom'

import { useTheme } from '@/lib/theme'

const SITE_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'About', to: '/about' },
  { label: 'Links', to: '/links' },
  { label: 'Contact', to: '/contact' },
]

const MARK_LIGHT = '/assets/trive-symbol.png'
const MARK_DARK = '/assets/trive-symbol-dark.png'

export function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div className="brand-col">
            <NavLink className="brand" to="/" style={{ marginBottom: 16 }}>
              <img className="mark" src={theme === 'dark' ? MARK_DARK : MARK_LIGHT} alt="" style={{ width: 34, height: 34 }} />
              <span className="wm">
                <span className="name">RYAN ATKINSON</span>
                <span className="sub">Software Engineer</span>
              </span>
            </NavLink>
            <p className="blurb">
              Software engineer building full-stack products and connected hardware: from booking platforms to
              aquarium monitors. Part of the Trive Group.
            </p>
          </div>
          <div>
            <h5>Site</h5>
            {SITE_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <div>
            <h5>Elsewhere</h5>
            <a href="https://github.com/Ryan-Atkinson87" target="_blank" rel="noopener">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/ryan-atkinson-804a5b1a8" target="_blank" rel="noopener">
              LinkedIn ↗
            </a>
            <a href="mailto:ryan@trivedev.uk">ryan@trivedev.uk</a>
            <a href="https://trivedev.uk" target="_blank" rel="noopener">
              trivedev.uk ↗
            </a>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© {new Date().getFullYear()} Ryan Atkinson · portfolio.trivedev.uk</div>
          <div>A Trive Group venture</div>
        </div>
      </div>
    </footer>
  )
}
