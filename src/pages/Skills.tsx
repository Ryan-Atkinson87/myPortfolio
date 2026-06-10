import { Reveal } from '@/components/Reveal'
import { Seo } from '@/components/Seo'
import { SkillIcon } from '@/components/SkillIcon'
import { skills } from '@/lib/sections'

import './Skills.css'

export function Skills() {
  const { groups, howIWork } = skills.frontmatter

  return (
    <main>
      <Seo
        title="Skills | Ryan Atkinson"
        description="Technologies Ryan Atkinson works with: languages, frameworks, databases, infrastructure and hardware."
      />
      <section className="page-head">
        <div className="wrap">
          <div className="seclabel reveal in">
            <span className="num">03</span>
            <span>Technical skills</span>
          </div>
          <h1 className="h1 reveal in">The tools I reach&nbsp;for.</h1>
          <p className="lede reveal in" style={{ maxWidth: 640, marginTop: 28 }}>
            No percentages or progress bars: just the technologies I’m genuinely confident building with, grouped by
            where they live in the stack. Most of these are load-bearing in a shipped or in-build project.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="wrap">
          <div className="sk-grid">
            {groups.map((group) => (
              <Reveal as="div" className="card sk-card in" key={group.name}>
                <div className="sk-top">
                  <span className="sk-ico">
                    <SkillIcon icon={group.icon} />
                  </span>
                  <div>
                    <h4 className="h4">{group.name}</h4>
                    <div className="sk-note">{group.note}</div>
                  </div>
                </div>
                <div className="tag-row">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="seclabel reveal in">
            <span className="num">→</span>
            <span>How I work</span>
          </div>
          <div className="howrow reveal in">
            {howIWork.map((step) => (
              <div key={step.n}>
                <div className="n">{step.n}</div>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
