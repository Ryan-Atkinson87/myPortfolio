import { useRef, useState, type FormEvent } from 'react'
import { NavLink } from 'react-router-dom'

import { Reveal } from '@/components/Reveal'
import { Seo } from '@/components/Seo'
import { CheckIcon, GithubIcon } from '@/components/icons'
import { contact } from '@/lib/sections'

import './Contact.css'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const Intro = contact.Body

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = formRef.current
    if (!form || !form.checkValidity()) {
      form?.reportValidity()
      return
    }

    setStatus('submitting')
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        setStatus('error')
        return
      }
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main>
      <Seo
        title="Contact | Ryan Atkinson"
        description="Get in touch with Ryan Atkinson: roles, freelance, or just to say hello."
      />
      <section style={{ padding: '72px 0 0' }}>
        <div className="wrap">
          <div className="seclabel reveal in">
            <span className="num">06</span>
            <span>Contact</span>
          </div>
          <h1 className="h1 reveal in">Let’s talk.</h1>
          <div className="lede reveal in" style={{ maxWidth: 600, marginTop: 28 }}>
            <Intro />
          </div>

          <div className="ct-grid">
            <Reveal as="div">
              {status === 'success' ? (
                <div className="sent show">
                  <div className="ok">
                    <CheckIcon width={28} height={28} strokeWidth={2.4} />
                  </div>
                  <h3 className="h3">Thanks, that’s on its way.</h3>
                  <p className="muted mt-2">
                    I’ll get back to you soon. In the meantime, feel free to browse{' '}
                    <NavLink className="tlink" to="/projects" style={{ display: 'inline' }}>
                      the projects
                    </NavLink>
                    .
                  </p>
                </div>
              ) : (
                <>
                  <form ref={formRef} onSubmit={handleSubmit} noValidate>
                    {/* honeypot — hidden from humans, bots fill it, server silently discards */}
                    <div style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                    </div>
                    <div className="field-row">
                      <div className="field">
                        <label htmlFor="name">Name</label>
                        <input className="input" id="name" name="name" type="text" placeholder="Your name" required />
                      </div>
                      <div className="field">
                        <label htmlFor="email">Email</label>
                        <input className="input" id="email" name="email" type="email" placeholder="you@company.com" required />
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="subject">Subject</label>
                      <input className="input" id="subject" name="subject" type="text" placeholder="What’s this about?" />
                    </div>
                    <div className="field">
                      <label htmlFor="message">Message</label>
                      <textarea
                        className="textarea"
                        id="message"
                        name="message"
                        placeholder="Tell me a little about what you have in mind…"
                        required
                      />
                    </div>
                    <button className="btn btn-primary btn-lg" type="submit" style={{ width: '100%' }} disabled={status === 'submitting'}>
                      {status === 'submitting' ? 'Sending…' : 'Send message'}
                      <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" y1="12" x2="19" y2="12" />
                        <polyline points="13 6 19 12 13 18" />
                      </svg>
                    </button>
                  </form>
                  {status === 'error' && (
                    <p className="ct-error">
                      Something went wrong sending that. Try again, or email me directly at ryan@trivedev.uk.
                    </p>
                  )}
                </>
              )}
            </Reveal>

            <Reveal as="aside">
              <div className="ct-direct">
                <a href="mailto:ryan@trivedev.uk">
                  <span className="ci">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <polyline points="3 7 12 13 21 7" />
                    </svg>
                  </span>
                  <span>
                    <span className="k">Email</span>
                    <span className="v">ryan@trivedev.uk</span>
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/ryan-atkinson-804a5b1a8" target="_blank" rel="noopener">
                  <span className="ci">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V21H17.6v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9z" />
                    </svg>
                  </span>
                  <span>
                    <span className="k">LinkedIn</span>
                    <span className="v">in/ryan-atkinson</span>
                  </span>
                </a>
                <a href="https://github.com/Ryan-Atkinson87" target="_blank" rel="noopener">
                  <span className="ci">
                    <GithubIcon width={21} height={21} />
                  </span>
                  <span>
                    <span className="k">GitHub</span>
                    <span className="v">Ryan-Atkinson87</span>
                  </span>
                </a>
                <div className="di">
                  <span className="ci">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s7-7 7-13a7 7 0 1 0-14 0c0 6 7 13 7 13z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </span>
                  <span>
                    <span className="k">Based in</span>
                    <span className="v">Burnley, Lancashire · UK</span>
                  </span>
                </div>
                <div className="di">
                  <span className="ci">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <polyline points="12 7 12 12 15.5 14" />
                    </svg>
                  </span>
                  <span>
                    <span className="k">Timezone</span>
                    <span className="v">GMT / BST · usually replies same day</span>
                  </span>
                </div>
              </div>
              <NavLink className="btn btn-secondary" to="/links" style={{ width: '100%', marginTop: 16 }}>
                All links &amp; résumé
              </NavLink>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
