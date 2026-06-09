import { NavLink } from 'react-router-dom'

import { ArrowIcon } from '@/components/ArrowIcon'
import { Seo } from '@/components/Seo'

const QUICK_LINKS = [
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function NotFound() {
  return (
    <main>
      <Seo title="404 — Ryan Atkinson" description="" />
      <section style={{ padding: '96px 0' }}>
        <div className="wrap">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-accent)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <span style={{ width: 30, height: 1, background: 'var(--color-accent)', display: 'block' }} />
            404
          </div>
          <h1 className="h1" style={{ marginBottom: 28 }}>
            Page not found.
          </h1>
          <p className="lede" style={{ maxWidth: 520, marginBottom: 40 }}>
            That URL doesn't lead anywhere. It may have moved, or it may never have existed. Pick a page below to get back on track.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 64 }}>
            <NavLink className="btn btn-primary btn-lg" to="/">
              Back to home <ArrowIcon className="arrow" />
            </NavLink>
            <NavLink className="btn btn-secondary btn-lg" to="/projects">
              View projects
            </NavLink>
          </div>
          <div style={{ borderTop: '1px solid var(--color-line)', paddingTop: 40, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 4 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-ink-subtle)', marginRight: 16 }}>
              Quick links
            </span>
            {QUICK_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} className="btn btn-ghost btn-sm">
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
