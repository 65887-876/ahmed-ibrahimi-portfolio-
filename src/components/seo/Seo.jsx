import { Helmet } from 'react-helmet-async'
import {
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE_PATH,
  SITE_NAME,
  SITE_URL,
} from '../../constants/seo'

function absoluteUrl(path) {
  const base = SITE_URL.replace(/\/$/, '')
  const p = path.startsWith('/') ? path : `/${path}`
  return `${base}${p}`
}

/**
 * Route-level metadata + Open Graph / Twitter (SPA — crawlers that run JS see updates).
 */
export default function Seo({
  title,
  description,
  path = '/',
  imagePath = DEFAULT_OG_IMAGE_PATH,
  keywords = DEFAULT_KEYWORDS,
  noIndex = false,
}) {
  const canonicalPath = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`
  const canonical = `${SITE_URL.replace(/\/$/, '')}${canonicalPath || '/'}`
  const ogImage = absoluteUrl(imagePath)

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_NAME} />
      <meta name="creator" content={SITE_NAME} />
      <meta name="publisher" content={SITE_NAME} />
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large'} />
      <meta name="googlebot" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="geo.region" content="DZ" />
      <meta name="geo.placename" content="Algeria" />

      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`${SITE_NAME} — portfolio preview`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
