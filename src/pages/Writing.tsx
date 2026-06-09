import { NavLink } from 'react-router-dom'

import { ArrowIcon } from '@/components/ArrowIcon'
import { Reveal } from '@/components/Reveal'
import { Seo } from '@/components/Seo'

const PLANNED = [
  {
    label: 'Build diary',
    title: 'Building Trive Services with multi-agent Claude Code',
    body: 'How I orchestrated a wave-by-wave AI build workflow across a three-service platform — what worked, what blew up, and what Code Runner is designed to fix.',
  },
  {
    label: 'Hardware',
    title: 'From breadboard to PCB: designing the Aquasense HAT',
    body: 'A walkthrough of the transition from protoboard to a custom Pi HAT — sensor wiring, Fusion 360 PCB layout, and the enclosure that clips to the tank.',
  },
  {
    label: 'Post-mortem',
    title: 'Shipping Zwift Tool: the decisions that made it a real product',
    body: 'Auth, GDPR, Sentry, accessibility, mobile SVG drag. The boring parts that turned a weekend project into something I could launch on Reddit without embarrassment.',
  },
]

export function Writing() {
  return (
    <main>
      <Seo
        title="Writing — Ryan Atkinson"
        description="Writing by Ryan Atkinson — posts on software engineering, hardware, and building products."
      />
      <section style={{ padding: '72px 0 0' }}>
        <div className="wrap">
          <div className="seclabel reveal in">
            <span className="num">07</span>
            <span>Writing</span>
          </div>
          <h1 className="h1 reveal in">
            Build logs &amp;&nbsp;write&#8209;ups.
          </h1>
          <p className="lede reveal in" style={{ maxWidth: 600, marginTop: 28 }}>
            Project post-mortems, build diaries, and the occasional deep-dive. The first articles are in progress — subscribe to the{' '}
            <a href="https://github.com/Ryan-Atkinson87" target="_blank" rel="noopener" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>
              GitHub
            </a>{' '}
            to catch them when they drop.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div className="seclabel reveal in">
            <span className="num">→</span>
            <span>Coming up</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid var(--color-line)', marginTop: 8 }}>
            {PLANNED.map((item) => (
              <Reveal key={item.title} style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 32, padding: '32px 0', borderBottom: '1px solid var(--color-line-soft)', opacity: 0.6 }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 10 }}>
                    {item.label}
                  </div>
                  <h3 className="h4" style={{ marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ margin: 0, fontSize: 14.5, color: 'var(--color-ink-muted)', lineHeight: 1.6 }}>{item.body}</p>
                </div>
                <span className="badge">
                  <span className="dot" style={{ background: '#C08E1A' }} />
                  Soon
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <Reveal className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', padding: 44, border: '1px solid var(--color-line)', borderRadius: 'var(--radius-lg)', background: 'var(--color-surface)', marginTop: 40 }}>
            <div>
              <h3 className="h3">See the work now</h3>
              <p style={{ margin: '6px 0 0', color: 'var(--color-ink-muted)' }}>
                The projects themselves are already live.
              </p>
            </div>
            <NavLink className="btn btn-primary btn-lg" to="/projects">
              All projects <ArrowIcon className="arrow" />
            </NavLink>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
