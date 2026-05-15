import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Linkedin, Globe, FileDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageShell from '../components/layout/PageShell'
import Seo from '../components/seo/Seo'
import { SEO_COPY } from '../constants/seo'
import { SITE_URL } from '../constants/portfolio'
import { OWNER_EMAIL, getEmailJsConfig, isEmailJsConfigured } from '../constants/contact'
import { downloadResumePdf } from '../utils/downloadResume'

const chip =
  'inline-flex min-h-[48px] items-center gap-2 rounded-lg border border-zinc-800/80 bg-zinc-900/30 px-4 py-2.5 text-zinc-400 transition hover:border-sea/45 hover:text-sea-hover/95 touch-manipulation'

const input =
  'w-full rounded-lg border border-zinc-800/90 bg-zinc-950/40 px-4 py-3 text-zinc-200 placeholder-zinc-600 transition focus:border-sea/65 focus:outline-none focus:ring-1 focus:ring-sea/35'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [pdfBusy, setPdfBusy] = useState(false)
  const [sendState, setSendState] = useState('idle')
  const [sendError, setSendError] = useState('')
  const [sentOk, setSentOk] = useState(false)

  const { publicKey, serviceId, templateId } = getEmailJsConfig()

  useEffect(() => {
    if (publicKey) {
      emailjs.init({ publicKey })
    }
  }, [publicKey])

  const handlePdf = async () => {
    setPdfBusy(true)
    try {
      await downloadResumePdf()
    } finally {
      setPdfBusy(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSendError('')
    if (!privacyAccepted) {
      setSendError('Please accept the Privacy Policy to send a message.')
      return
    }

    if (!isEmailJsConfigured()) {
      window.location.href = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(`Portfolio: ${formData.name}`)}&body=${encodeURIComponent(`${formData.message}\n\nFrom: ${formData.email}`)}`
      return
    }

    setSendState('sending')

    try {
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
        user_consented: privacyAccepted ? 'yes' : 'no',
        sent_at: new Date().toLocaleString('en-GB', {
          weekday: 'short',
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short',
          timeZone: 'Africa/Algiers',
        }),
      })
      setSendState('idle')
      setSentOk(true)
      setFormData({ name: '', email: '', message: '' })
      setPrivacyAccepted(false)
      window.setTimeout(() => setSentOk(false), 8000)
    } catch (err) {
      console.error(err)
      setSendState('idle')
      setSendError('Something went wrong sending the message. Try email directly or check your connection.')
    }
  }

  return (
    <PageShell>
      <Seo title={SEO_COPY.contact.title} description={SEO_COPY.contact.description} path="/contact" />
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center sm:mb-14">
            <h1 className="font-display text-2xl text-zinc-50 sm:text-3xl">Contact</h1>
            <p className="mt-2 text-zinc-500">Tell me what you&apos;re building — I&apos;ll reply when I can.</p>
            {!isEmailJsConfigured() && (
              <p className="mx-auto mt-4 max-w-xl text-xs text-zinc-600">
                EmailJS isn&apos;t configured in this build yet (missing env vars). The button below opens your mail app
                instead. Add <code className="rounded bg-zinc-900 px-1 text-zinc-400">.env</code> keys from{' '}
                <code className="rounded bg-zinc-900 px-1 text-zinc-400">.env.example</code>.
              </p>
            )}
          </div>

          <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-zinc-200">Where to find me</h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <a href={`mailto:${OWNER_EMAIL}`} className={chip}>
                  <Mail className="h-4 w-4" />
                  Email
                </a>
                <a
                  href="https://linkedin.com/in/hamzaboukhari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={chip}
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className={chip}>
                  <Globe className="h-4 w-4" />
                  Website
                </a>
              </div>

              <div className="rounded-xl border border-zinc-800/70 bg-zinc-900/25 p-5">
                <h3 className="text-sm font-medium text-zinc-300">Résumé — PDF</h3>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                  Same ATS-oriented PDF as on the home page.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={handlePdf}
                    disabled={pdfBusy}
                    className={`${chip} cursor-pointer disabled:opacity-50`}
                  >
                    <FileDown className="h-4 w-4" />
                    {pdfBusy ? 'Building PDF…' : 'Download CV (PDF)'}
                  </button>
                </div>
              </div>

              <p className="text-xs text-zinc-600">
                Before sending the form, read the{' '}
                <Link to="/privacy" className="text-sea/90 underline-offset-2 hover:text-sea-hover hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 shadow-lg shadow-black/20 backdrop-blur-sm"
            >
              <div>
                <label className="mb-1.5 block text-sm text-zinc-500" htmlFor="contact-name">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={input}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm text-zinc-500" htmlFor="contact-email">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={input}
                  placeholder="you@…"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm text-zinc-500" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${input} resize-none`}
                  placeholder="What you need, timelines, links…"
                />
              </div>

              <label className="flex cursor-pointer gap-3 text-sm text-zinc-400">
                <input
                  type="checkbox"
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 rounded border-zinc-600 bg-zinc-950 text-sea focus:ring-sea/40"
                />
                <span>
                  I&apos;ve read and accept the{' '}
                  <Link to="/privacy" className="text-sea/90 underline-offset-2 hover:text-sea-hover hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {sendError && <p className="text-sm text-red-400/90">{sendError}</p>}
              {sentOk && (
                <p className="text-sm text-sea-hover">Thanks — message sent. I&apos;ll get back to you when I can.</p>
              )}

              <button
                type="submit"
                disabled={sendState === 'sending'}
                className="w-full min-h-[48px] rounded-lg bg-brand font-semibold text-brand-foreground shadow-md shadow-brand/20 transition hover:bg-brand-hover disabled:opacity-60 touch-manipulation"
              >
                {sendState === 'sending'
                  ? 'Sending…'
                  : isEmailJsConfigured()
                    ? 'Send message'
                    : 'Open email app'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
