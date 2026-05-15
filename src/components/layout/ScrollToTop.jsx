import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scroll window to top whenever the route pathname changes (e.g. / ↔ /me). */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
