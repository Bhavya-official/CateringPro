import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import MenuPreview from './components/MenuPreview.jsx'
import Gallery from './components/Gallery.jsx'
import Stats from './components/Stats.jsx'
import Testimonials from './components/Testimonials.jsx'
import Booking from './components/Booking.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main className="mt-16">
        <Hero />
        <Services />
        <About />
        <MenuPreview />
        <Gallery />
        <Stats />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  )
}

export default App
