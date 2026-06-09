interface Env {
  RESEND_API_KEY: string
}

interface ContactBody {
  name?: unknown
  email?: unknown
  subject?: unknown
  message?: unknown
  website?: unknown  // honeypot — must be empty
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  let body: ContactBody
  try {
    body = await context.request.json<ContactBody>()
  } catch {
    return json({ error: 'Invalid JSON' }, 400)
  }

  // Silently discard honeypot trips — bots that fill a hidden "website" field
  if (body.website) {
    return json({ ok: true }, 200)
  }

  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const subject = typeof body.subject === 'string' ? body.subject.trim() : ''
  const message = typeof body.message === 'string' ? body.message.trim() : ''

  if (!name || !email || !message) {
    return json({ error: 'name, email and message are required' }, 400)
  }
  if (!EMAIL_RE.test(email)) {
    return json({ error: 'Invalid email address' }, 400)
  }

  // NOTE: using Resend's onboarding sender until a custom domain is verified at
  // resend.com and added here as "from". Replace with e.g. noreply@trivedev.uk
  // once the sending domain is verified. Add RESEND_API_KEY as a Cloudflare
  // Pages secret (Settings → Environment variables → Production).
  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['ryan@trivedev.uk'],
      reply_to: email,
      subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] Message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${esc(name)} &lt;${esc(email)}&gt;</p>\n<p><strong>Subject:</strong> ${esc(subject) || '(none)'}</p>\n<hr/>\n<p>${esc(message).replace(/\n/g, '<br>')}</p>`,
    }),
  })

  if (!resendRes.ok) {
    return json({ error: 'Failed to send email' }, 500)
  }

  return json({ ok: true }, 200)
}

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}
