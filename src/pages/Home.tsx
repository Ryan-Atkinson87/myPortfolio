import { NavLink } from 'react-router-dom'

import { ArrowIcon } from '@/components/ArrowIcon'
import { Reveal } from '@/components/Reveal'
import { Seo } from '@/components/Seo'
import { projects } from '@/lib/projects'
import { homeHero, homeIntro } from '@/lib/sections'

import './Home.css'

const STATUS_LABEL: Record<string, string> = {
  live: 'Live',
  building: 'Building',
  design: 'Design',
}

const EXPLORE_LINKS = [
  { n: '03', to: '/skills', title: 'Skills', body: 'Languages, frameworks, databases & tools I work with.' },
  { n: '04', to: '/about', title: 'About', body: 'How I got here, and what keeps me building.' },
  { n: '05', to: '/links', title: 'Links', body: 'GitHub, LinkedIn, résumé & the Trive ventures.' },
  { n: '06', to: '/contact', title: 'Contact', body: 'The fastest ways to reach me.' },
]

export function Home() {
  const featured = projects.slice(0, 4)
  const { availability, stats, portrait } = homeHero.frontmatter
  const HeroLede = homeHero.Body
  const Intro = homeIntro.Body

  return (
    <>
      <Seo
        title="Ryan Atkinson | Software Engineer"
        description="Ryan Atkinson, software engineer building full-stack products and the hardware they run on. Part of the Trive Group."
      />
      <main>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy reveal in">
            <div className="hero-avail">
              <span className="pulse" /> {availability}
            </div>
            <h1>
              <span className="l1">
                Hi, I’m <span className="nm">Ryan</span>.
              </span>
              <span className="l2">
                I build <em className="g">software</em>
              </span>
              <span className="l2" style={{ fontWeight: 200 }}>
                &amp; the hardware it runs on.
              </span>
            </h1>
            <div className="hero-sub lede">
              <HeroLede />
            </div>
            <div className="hero-cta">
              <NavLink className="btn btn-primary btn-lg" to="/projects">
                View my work <ArrowIcon className="arrow" />
              </NavLink>
              <NavLink className="btn btn-secondary btn-lg" to="/contact">
                Get in touch
              </NavLink>
            </div>
            <div className="hero-meta">
              {stats.map((stat) => (
                <div className="stat" key={stat.k}>
                  <div className="n">{stat.n}</div>
                  <div className="k">{stat.k}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-aside reveal in">
            <div className="ph portrait" data-label="Portrait: drop in">
              {portrait && <img src={portrait} alt="Ryan Atkinson" />}
            </div>
            <span className="ticks" style={{ top: -7, right: -7 }} />
            <span className="ticks" style={{ bottom: -7, left: -7, transform: 'rotate(180deg)' }} />
            <div className="hero-card">
              <div className="bar">
                <i /> <i /> <i />
              </div>
              <div className="ln">
                <span className="c1">~</span> whoami
              </div>
              <div className="ln">
                <span className="c2">ryan</span>: engineer &amp; maker
              </div>
              <div className="ln">
                <span className="c1">$</span> currently building
              </div>
              <div className="ln">
                <span className="c2">trive-services</span>, <span className="c2">code-runner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="section-sm">
        <div className="wrap">
          <Reveal className="intro">
            <h2 className="h2">
              I care about the whole
              <br />
              problem, not just the&nbsp;<em className="g">part&nbsp;I’m&nbsp;handed.</em>
            </h2>
            <div className="body">
              <Intro />
              <NavLink className="tlink mt-2" to="/about">
                More about me <ArrowIcon />
              </NavLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FEATURED PROJECTS ============ */}
      <section className="section">
        <div className="wrap">
          <Reveal className="feat-head">
            <div>
              <div className="eyebrow">Selected work</div>
              <h2 className="h2 mt-4">A few things I’ve built.</h2>
            </div>
            <NavLink className="tlink" to="/projects">
              All projects <ArrowIcon />
            </NavLink>
          </Reveal>
          <div className="feat-grid">
            {featured.map((project) => (
              <Reveal as={NavLink} className="card card-hover pcard" to={`/projects/${project.slug}`} key={project.slug}>
                <div className="ph pcover" data-label={`${project.title}: screenshot`}>
                  {project.image && <img src={project.image} alt="" />}
                </div>
                <div className="ptop">
                  <span className="pkind">{project.kind}</span>
                  <span className={`badge ${project.status}`}>
                    <span className="dot" />
                    {STATUS_LABEL[project.status]}
                  </span>
                </div>
                <h3 className="h4">{project.title}</h3>
                <p className="psum">{project.summary}</p>
                <div className="pfoot">
                  <div className="tag-row">
                    {project.stackShort.slice(0, 3).map((tech) => (
                      <span className="tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="tlink" style={{ fontSize: 14 }}>
                    View <ArrowIcon style={{ width: 17, height: 17 }} />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EXPLORE ============ */}
      <section className="section-sm">
        <div className="wrap">
          <div className="seclabel reveal in">
            <span className="num">→</span>
            <span>Explore the rest</span>
          </div>
          <Reveal as="nav" className="explore">
            {EXPLORE_LINKS.map((link) => (
              <NavLink to={link.to} key={link.to}>
                <div className="x-n">{link.n}</div>
                <h3>{link.title}</h3>
                <p>{link.body}</p>
              </NavLink>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
    </>
  )
}
