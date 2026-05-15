import { Link } from 'react-router-dom'
import PageShell from '../components/layout/PageShell'
import Seo from '../components/seo/Seo'
import { SEO_COPY } from '../constants/seo'
import { OWNER_EMAIL } from '../constants/contact'

const p = 'text-sm leading-relaxed text-zinc-400'
const h2 = 'font-display mt-10 text-lg text-zinc-100 sm:text-xl'
const h3 = 'mt-6 text-sm font-semibold text-zinc-300'

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <Seo title={SEO_COPY.privacy.title} description={SEO_COPY.privacy.description} path="/privacy" />
      <article className="mx-auto max-w-2xl px-4 py-12 pb-24 sm:px-6 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">Legal</p>
        <h1 className="font-display mt-3 text-2xl text-zinc-50 sm:text-3xl">Privacy Policy</h1>
        <p className={`mt-4 ${p}`}>
          Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}.
          I&apos;m Hamza Boukhari, an individual freelance developer based in{' '}
          <strong className="text-zinc-300">Algeria</strong>. This policy describes how I handle personal data on this
          portfolio site. It is provided for transparency and is not legal advice.
        </p>

        <h2 className={h2}>1. Data controller</h2>
        <p className={p}>
          <strong className="text-zinc-300">Controller:</strong> Hamza Boukhari (individual freelancer).
        </p>
        <p className={`mt-3 ${p}`}>
          <strong className="text-zinc-300">Contact (privacy &amp; general):</strong>{' '}
          <a href={`mailto:${OWNER_EMAIL}`} className="text-sea/90 underline-offset-2 hover:text-sea-hover hover:underline">
            {OWNER_EMAIL}
          </a>
        </p>

        <h3 className={h3}>1.1 Applicable rules — Algeria first</h3>
        <p className={p}>
          My usual place of business is Algeria. The main framework I follow for protecting personal data is Algerian{' '}
          <strong className="text-zinc-300">
            Law No. 18-07 of 10 June 2018
          </strong>{' '}
          on the protection of individuals with regard to the processing of personal data (often referred to as Law 18-07),
          together with its implementing texts where relevant.
        </p>
        <p className={`mt-3 ${p}`}>
          If you are located in the European Economic Area or another jurisdiction with its own privacy laws, additional
          rules may apply to how your data is handled. In practice I still aim for the same baseline: only collect what I
          need for the contact form, be clear about why, and respond if you ask to access, correct, or delete your
          details where that&apos;s allowed.
        </p>
        <p className={`mt-3 ${p}`}>
          By submitting the contact form (after accepting this policy), you confirm you have read this notice and agree
          to the processing described below for that purpose.
        </p>
        <p className={`mt-3 ${p}`}>
          I may update this page from time to time (for example if tools or hosting change). The &quot;Last updated&quot;
          date will change when I do.
        </p>

        <h3 className={h3}>1.2 Contact about privacy</h3>
        <p className={p}>
          For anything related to your personal data, email{' '}
          <a href={`mailto:${OWNER_EMAIL}`} className="text-sea/90 underline-offset-2 hover:text-sea-hover hover:underline">
            {OWNER_EMAIL}
          </a>
          .
        </p>

        <h2 className={h2}>2. Why I process your data</h2>
        <p className={p}>
          I use what you send through the contact form solely to read your message and reply — for example about a
          project or collaboration.
        </p>
        <p className={`mt-3 ${p}`}>
          <strong className="text-zinc-300">Fields:</strong> name, email, message text. Delivery goes through{' '}
          <strong className="text-zinc-300">EmailJS</strong> into my Gmail inbox; EmailJS processes the submission on its
          infrastructure according to its own policies.
        </p>

        <h3 className={h3}>2.1 Retention</h3>
        <p className={p}>
          I keep messages in my mailbox while they&apos;re relevant to our conversation, unless you ask me to delete
          them sooner or the law requires otherwise. If you withdraw consent or ask me to stop processing, I delete or
          anonymise what I reasonably can, except where I must retain something for legal compliance or legitimate defence.
        </p>

        <h2 className={h2}>3. Legal basis and categories</h2>
        <p className={p}>
          Processing is based on your <strong className="text-zinc-300">consent</strong>: you tick the privacy checkbox and
          submit the form (clear affirmative act).
        </p>

        <h3 className={h3}>3.1 Consent</h3>
        <p className={p}>
          By ticking acceptance of this Privacy Policy and sending the form (or by emailing me directly), you confirm you
          agree to me handling your personal data as described here for responding to you.
        </p>

        <h3 className={h3}>3.2 Categories</h3>
        <p className={p}>
          Identification / contact data you supply (name, email, message). Direct emails include whatever you write.
          Non-essential cookies or analytics, if I add them later, would only run after appropriate consent where required.
        </p>

        <h2 className={h2}>4. Security</h2>
        <p className={p}>
          I rely on established providers (hosting, EmailJS, Google Mail) and sensible precautions on my accounts (access
          control, strong passwords). No internet transmission is perfectly risk-free; I try to limit unnecessary exposure.
        </p>

        <h2 className={h2}>5. Recipients and transfers</h2>
        <p className={p}>
          I do not sell personal data. EmailJS and Google process data under their terms and may use servers outside
          Algeria; see their documentation for locations and safeguards. I do not share your contact-form content with
          other third parties unless you ask me to, it is necessary to operate the site, or the law obliges me.
        </p>

        <h2 className={h2}>6. Your rights</h2>
        <p className={p}>
          Under Algerian Law 18-07, individuals generally have rights regarding their personal data (such as access,
          rectification, opposition in prescribed cases, and limits on certain processing — depending on the situation).
          If you are in the EU/EEA, similar ideas appear under the GDPR (access, erasure, restriction, portability, objection,
          complaint to a supervisory authority) where that law applies to processing.
        </p>
        <p className={`mt-3 ${p}`}>
          If you believe your rights under Algerian law are affected, you may also contact the{' '}
          <strong className="text-zinc-300">
            Algerian personal data protection authority (Autorité nationale pour la protection des données personnelles —
            ANPDP)
          </strong>{' '}
          according to the procedures it publishes (see official government sources for current contact details and forms).
        </p>

        <h3 className={h3}>6.1 How to reach me</h3>
        <p className={p}>
          Email{' '}
          <a href={`mailto:${OWNER_EMAIL}`} className="text-sea/90 underline-offset-2 hover:text-sea-hover hover:underline">
            {OWNER_EMAIL}
          </a>{' '}
          from the address you used or explain how I can identify your request. I may ask for reasonable verification
          before deleting or changing data.
        </p>

        <p className={`mt-12 ${p}`}>
          <Link to="/contact" className="text-sea/90 underline-offset-2 hover:text-sea-hover hover:underline">
            ← Back to Contact
          </Link>
        </p>
      </article>
    </PageShell>
  )
}
