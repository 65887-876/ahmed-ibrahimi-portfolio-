import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import BrandLogo from './BrandLogo'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const closeMenu = () => setIsMobileMenuOpen(false)
  const links = [
    { to: '/', label: 'Home' },
    { to: '/linktree', label: 'Linktree' },
    { to: '/gallery', label: 'Gallery' },
  ]

  const navBtn =
    'text-sm text-zinc-400 transition hover:text-zinc-100'

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-700/40 bg-[#10161d]/88 backdrop-blur-xl lg:fixed lg:left-0 lg:right-0">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-3.5">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={closeMenu} className="text-left transition hover:opacity-90" aria-label="Home">
            <BrandLogo />
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`${navBtn} ${location.pathname === link.to ? 'text-zinc-100' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center text-zinc-400 transition hover:text-zinc-100 md:hidden -m-2"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <>
            <div className="fixed inset-0 top-[49px] z-40 bg-zinc-950/80 md:hidden" onClick={closeMenu} aria-hidden />
            <div className="fixed inset-x-0 top-[49px] z-50 max-h-[calc(100vh-49px)] overflow-y-auto border-b border-zinc-700/40 bg-[#10161d] py-2 md:hidden">
              <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex flex-col">
                  {links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={closeMenu}
                      className="py-3.5 text-left text-base text-zinc-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
