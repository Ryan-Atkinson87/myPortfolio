import { NavLink } from 'react-router-dom'

import { HobbyIcon } from '@/components/HobbyIcon'
import { Reveal } from '@/components/Reveal'
import { Seo } from '@/components/Seo'
import { about } from '@/lib/sections'

import './About.css'

export function About() {
  const { basedIn, currently, openTo, portrait, drives, hobbies, ventures } = about.frontmatter
  const Bio = about.Body

  return (
    <main>
      <Seo
        title="About | Ryan Atkinson"
        description="About Ryan Atkinson, software engineer, maker, and dad in Burnley, UK."
      />
      <section className="page-head">
        <div className="wrap">
          <div className="seclabel reveal in">
            <span className="num">04</span>
            <span>About me</span>
          </div>
          <h1 className="h1 reveal in">
            Engineer by trade,
            <br />
            <em className="g">maker</em> by instinct.
          </h1>

          <div className="ab-grid">
            <Reveal as="div" className="ab-portrait">
              <div className="ph" data-label="Portrait / workspace">
                {portrait && <img src={portrait} alt="Ryan Atkinson" />}
              </div>
              <div className="ab-card">
                <div className="k">Based in</div>
                <div className="v">{basedIn}</div>
                <hr />
                <div className="k">Currently</div>
                <div className="v">{currently}</div>
                <hr />
                <div className="k">Open to</div>
                <div className="v">{openTo}</div>
              </div>
            </Reveal>

            <Reveal as="div" className="ab-prose">
              <Bio />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <h2 className="seclabel reveal in">
            <span className="num">→</span>
            <span>What drives me</span>
          </h2>
          <div className="drives">
            {drives.map((drive) => (
              <div className="card reveal in" key={drive.label}>
                <span className="n">{drive.label}</span>
                <h3 className="h4">{drive.title}</h3>
                <p>{drive.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <h2 className="seclabel reveal in">
            <span className="num">→</span>
            <span>Beyond the keyboard</span>
          </h2>
          <div className="hobbies">
            {hobbies.map((hobby) => (
              <div className="hobby reveal in" key={hobby.title}>
                <span className="ico">
                  <HobbyIcon icon={hobby.icon} />
                </span>
                <h3>{hobby.title}</h3>
                <p>{hobby.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <h2 className="seclabel reveal in">
            <span className="num">→</span>
            <span>The Trive ecosystem</span>
          </h2>
          <p className="body reveal in" style={{ maxWidth: 640, marginBottom: 8 }}>
            My projects ship under Trive Group, a small family of ventures I run. A few you can visit:
          </p>
          <div className="ventures reveal in">
            {ventures.map((venture) => (
              <a href={venture.url} target="_blank" rel="noopener" key={`${venture.name}-${venture.accent}`}>
                <div className="vname">
                  {venture.name} <span className="d">{venture.accent}</span>
                </div>
                <p>{venture.body}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="ab-cta reveal in">
            <div>
              <h3 className="h3">Like how I think?</h3>
              <p className="muted mt-2" style={{ margin: '6px 0 0' }}>
                I’d love to hear what you’re working on.
              </p>
            </div>
            <div className="row gap-3">
              <NavLink className="btn btn-primary btn-lg" to="/contact">
                Get in touch
              </NavLink>
              <NavLink className="btn btn-secondary btn-lg" to="/projects">
                See the work
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
