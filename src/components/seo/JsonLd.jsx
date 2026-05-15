import { Helmet } from 'react-helmet-async'
import { SITE_NAME, SITE_URL } from '../../constants/seo'
import { OWNER_EMAIL } from '../../constants/contact'

const graph = [
  {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      'Hamza Boukhari — software engineer and full-stack developer: web development services, React & Node.js apps, APIs, Firebase & Supabase, automation, and pragmatic solutions for production problems.',
    inLanguage: 'en',
    publisher: { '@id': `${SITE_URL}/#person` },
  },
  {
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}/#profile`,
    url: SITE_URL,
    name: `${SITE_NAME} — portfolio`,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: { '@id': `${SITE_URL}/#person` },
  },
  {
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#services`,
    name: `${SITE_NAME} — Software & web development services`,
    url: SITE_URL,
    image: `${SITE_URL}/assets/hero-workspace.png`,
    description:
      'Remote-friendly software engineering: building and maintaining web applications, REST APIs, integrations, Firebase & Supabase backends, databases (PostgreSQL, MongoDB), Redis-backed patterns, and automation (Telegram/Discord bots). Help with scoping, implementation, debugging, and sensible technical solutions.',
    provider: { '@id': `${SITE_URL}/#person` },
    areaServed: [{ '@type': 'Country', name: 'Algeria' }, { '@type': 'Place', name: 'Worldwide' }],
    availableLanguage: ['en', 'fr'],
    serviceType: [
      'Full-stack web development',
      'API development & integration',
      'Production troubleshooting',
      'Automation engineering',
    ],
  },
  {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: SITE_NAME,
    url: SITE_URL,
    email: OWNER_EMAIL,
    jobTitle: 'Software Engineer · Full-Stack Developer',
    description:
      'Software engineer and developer delivering web development services: scalable React & Node.js applications, production APIs, Firebase, Supabase, PostgreSQL, MongoDB, Redis, and Telegram/Discord automation—focused on problem-solving and reliable solutions for international clients.',
    nationality: { '@type': 'Country', name: 'Algeria' },
    knowsAbout: [
      'Software engineering',
      'Web development services',
      'Technical problem solving',
      'Software development consulting',
      'Full-stack web development',
      'React',
      'Node.js',
      'JavaScript',
      'TypeScript',
      'REST API design',
      'MongoDB',
      'PostgreSQL',
      'Firebase',
      'Supabase',
      'Redis',
      'Production debugging',
      'Automation',
      'Telegram bots',
      'Discord bots',
    ],
    sameAs: ['https://linkedin.com/in/hamzaboukhari', 'https://github.com/65887-876'],
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': graph,
}

export default function JsonLd() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}
