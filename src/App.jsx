import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import LinktreePage from './pages/LinktreePage'

function ScrollToTopOnRouteChange() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnRouteChange />
      <div className="min-h-screen text-zinc-200">
        <Navbar />
        <main className="lg:pt-14">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/linktree" element={<LinktreePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
