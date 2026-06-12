import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { ArrowIcon } from '@/components/ArrowIcon'
import { Reveal } from '@/components/Reveal'
import { Seo } from '@/components/Seo'
import { projects, type Project } from '@/lib/projects'

import './Projects.css'

interface FilterGroup {
  id: string
  label: string
  test?: (project: Project) => boolean
}

const FILTER_GROUPS: FilterGroup[] = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web apps', test: (p) => /web|saas|orchestration/i.test(p.kind) },
  { id: 'hw', label: 'Hardware', test: (p) => /hardware|iot/i.test(p.kind) },
  { id: 'live', label: 'Live', test: (p) => p.status === 'live' },
]

const STATUS_LABEL: Record<string, string> = {
  live: 'Live',
  building: 'Building',
  design: 'Design',
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState(FILTER_GROUPS[0].id)
  const group = FILTER_GROUPS.find((g) => g.id === activeFilter) ?? FILTER_GROUPS[0]
  const visible = group.test ? projects.filter(group.test) : projects

  return (
    <main>
      <Seo
        title="Projects | Ryan Atkinson"
        description="Selected projects by Ryan Atkinson: full-stack web apps and connected hardware."
      />
      <section className="page-head">
        <div className="wrap">
          <div className="seclabel reveal in">
            <span className="num">02</span>
            <span>Projects · The core</span>
          </div>
          <h1 className="h1 reveal in">
            Things I’ve made,
            <br />
            and why they exist.
          </h1>
          <p className="lede reveal in" style={{ maxWidth: 640, marginTop: 28 }}>
            Each of these started as a real problem (mine, my son’s, or a community’s) and got built properly.
            Here’s the why, the stack, what’s done, and where each one is going.
          </p>
          <div className="filters reveal in">
            {FILTER_GROUPS.map((g) => (
              <button
                key={g.id}
                type="button"
                className={`chip${g.id === activeFilter ? ' active' : ''}`}
                onClick={() => setActiveFilter(g.id)}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <div className="plist">
            {visible.map((project) => (
              <Reveal as="article" className="prow in" key={project.slug}>
                <NavLink className="prow-link" to={`/projects/${project.slug}`} aria-label={project.title} />
                <div className="ph pcover" data-label={project.title}>
                  {project.image && <img src={project.image} alt="" />}
                </div>
                <div className="pbody">
                  <div className="prow-top">
                    <span className="pkind">{project.kind}</span>
                    <span className={`badge ${project.status}`}>
                      <span className="dot" />
                      {STATUS_LABEL[project.status]}
                    </span>
                    <span className="mono" style={{ color: 'var(--color-ink-subtle)' }}>
                      {project.year}
                    </span>
                  </div>
                  <h2 className="h3">{project.title}</h2>
                  <p className="psum">{project.summary}</p>
                  <div className="tag-row">
                    {project.stackShort.map((tech) => (
                      <span className="tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="pgo">
                  <ArrowIcon strokeWidth="1.7" />
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
