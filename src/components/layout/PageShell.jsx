import Navbar from './Navbar'
import Footer from '../sections/Footer'

export default function PageShell({ children }) {
  return (
    <div className="min-h-screen text-zinc-200">
      <Navbar />
      <div className="lg:pt-14">{children}</div>
      <Footer />
    </div>
  )
}
