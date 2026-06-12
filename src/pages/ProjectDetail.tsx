import { Navigate, NavLink, useParams } from 'react-router-dom'

import { Reveal } from '@/components/Reveal'
import { Seo } from '@/components/Seo'
import { BackArrowIcon, CheckIcon, ExternalLinkIcon, GithubIcon, PlayIcon } from '@/components/icons'
import { projectBySlug, projects } from '@/lib/projects'

import './ProjectDetail.css'

const STATUS_LABEL: Record<string, string> = {
  live: 'Live',
  building: 'Building',
  design: 'Design',
}

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? projectBySlug[slug] : undefined

  if (!project) return <Navigate to="/projects" replace />

  const idx = projects.findIndex((p) => p.slug === project.slug)
  const prev = projects[(idx - 1 + projects.length) % projects.length]
  const next = projects[(idx + 1) % projects.length]
  const Why = project.Why

  return (
    <main className="wrap">
      <Seo
        title={`${project.title} | Ryan Atkinson`}
        description={project.summary}
      />
      <NavLink className="pd-back" to="/projects">
        <BackArrowIcon /> All projects
      </NavLink>

      <Reveal as="header" className="pd-head in">
        <div className="pd-top">
          <span className={`badge ${project.status}`}>
            <span className="dot" />
            {STATUS_LABEL[project.status]}
          </span>
          <span className="mono">{project.kind}</span>
        </div>
        <h1 className="h1 pd-title">{project.title}</h1>
        <p className="pd-summary lede">{project.summary}</p>
        <div className="pd-actions">
          {project.links.live && (
            <a className="btn btn-primary" href={project.links.live} target="_blank" rel="noopener">
              Visit live site <ExternalLinkIcon />
            </a>
          )}
          {project.links.github && (
            <a className="btn btn-secondary" href={project.links.github} target="_blank" rel="noopener">
              <GithubIcon /> View code
            </a>
          )}
          {project.links.video && project.links.video !== '#' && (
            <a className="btn btn-secondary" href={project.links.video} target="_blank" rel="noopener">
              <PlayIcon /> Walkthrough
            </a>
          )}
        </div>
        <div className="pd-facts">
          <div>
            <div className="k">Year</div>
            <div className="v">{project.year}</div>
          </div>
          <div>
            <div className="k">My role</div>
            <div className="v">{project.role}</div>
          </div>
          <div>
            <div className="k">Core stack</div>
            <div className="v">{project.stackShort.join(' · ')}</div>
          </div>
        </div>
      </Reveal>

      <Reveal as="div" className="ph pd-hero" data-label={`${project.title}: hero screenshot / demo`} />

      <div className="pd-body">
        <div className="pd-main">
          <Reveal as="section" className="pd-block">
            <h2 className="seclabel">
              <span className="num">01</span>
              <span>The why</span>
            </h2>
            <div className="why">
              <Why />
            </div>
          </Reveal>

          <Reveal as="section" className="pd-block">
            <h2 className="seclabel">
              <span className="num">02</span>
              <span>What’s built</span>
            </h2>
            <ul className="checks">
              {project.milestones.map((milestone) => (
                <li key={milestone}>
                  <span className="ck">
                    <CheckIcon />
                  </span>
                  <span className="t">{milestone}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {project.inProgress && (
            <Reveal as="section" className="pd-block">
              <h2 className="seclabel">
                <span className="num">03</span>
                <span>In progress</span>
              </h2>
              <div className="inprog">{project.inProgress}</div>
            </Reveal>
          )}

          <Reveal as="section" className="pd-block">
            <h2 className="seclabel">
              <span className="num">{project.inProgress ? '04' : '03'}</span>
              <span>Where it’s going</span>
            </h2>
            <ul className="future">
              {project.future.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal as="aside" className="pd-aside">
          <div className="stack-card">
            <div className="sc-head">Tech stack</div>
            {project.stack.map((group) => (
              <div className="stack-grp" key={group.group}>
                <div className="g">{group.group}</div>
                <div className="tag-row">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <nav className="pd-nav">
        <NavLink className="prev" to={`/projects/${prev.slug}`}>
          <div className="lab">← Previous</div>
          <h3 className="h4">{prev.title}</h3>
        </NavLink>
        <NavLink className="next" to={`/projects/${next.slug}`}>
          <div className="lab">Next →</div>
          <h3 className="h4">{next.title}</h3>
        </NavLink>
      </nav>
    </main>
  )
}
