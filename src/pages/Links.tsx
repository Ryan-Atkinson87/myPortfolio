import { NavLink } from 'react-router-dom'

import { LinkIcon } from '@/components/LinkIcon'
import { Seo } from '@/components/Seo'
import { ExternalLinkIcon } from '@/components/icons'
import { links } from '@/lib/sections'

import './Links.css'

export function Links() {
  const { items } = links.frontmatter

  return (
    <main>
      <Seo
        title="Links — Ryan Atkinson"
        description="Profiles, résumé and writing — GitHub, LinkedIn and more."
      />
      <section className="page-head">
        <div className="wrap">
          <div className="seclabel reveal in">
            <span className="num">05</span>
            <span>Links &amp; profiles</span>
          </div>
          <h1 className="h1 reveal in">Verify the work.</h1>
          <p className="lede reveal in" style={{ maxWidth: 600, marginTop: 28 }}>
            Everything’s public. Browse the code, check the profiles, or grab a one-page résumé to print.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div className="ln-list">
            {items.map((item) => {
              const content = (
                <>
                  <span className="ln-ico">
                    <LinkIcon icon={item.icon} />
                  </span>
                  <span className="ln-main">
                    <h4 className="h4">{item.name}</h4>
                    <span className="u">{item.handle}</span>
                  </span>
                  <span className="ln-tag">{item.tag}</span>
                  <span className="ln-go">
                    <ExternalLinkIcon width={20} height={20} />
                  </span>
                </>
              )

              return item.url.startsWith('/') ? (
                <NavLink className="ln-row reveal in" to={item.url} key={item.name}>
                  {content}
                </NavLink>
              ) : (
                <a
                  className="ln-row reveal in"
                  href={item.url}
                  key={item.name}
                  {...(item.url.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}
                >
                  {content}
                </a>
              )
            })}
          </div>

          <div className="resume reveal in">
            <div className="rl">
              <span className="ln-ico" style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)', background: 'var(--color-surface)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 3 14 8 19 8" />
                  <line x1="9" y1="13" x2="15" y2="13" />
                  <line x1="9" y1="17" x2="13" y2="17" />
                </svg>
              </span>
              <div>
                <h4 className="h4">Résumé / CV</h4>
                <p className="small" style={{ margin: '3px 0 0' }}>
                  One page, recruiter-ready. PDF.
                </p>
              </div>
            </div>
            <a className="btn btn-primary btn-lg" href="/assets/ryan-atkinson-cv.pdf" download>
              Download PDF
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="4" x2="12" y2="15" />
                <polyline points="7 11 12 16 17 11" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
