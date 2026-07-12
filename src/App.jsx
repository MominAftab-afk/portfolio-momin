import { useState, useEffect } from 'react'
import Cursor     from './components/Cursor'
import Navbar     from './components/Navbar'
import Intro      from './components/Intro'
import Hero       from './components/Hero'
import Ticker     from './components/Ticker'
import About      from './components/About'
import Experience from './components/Experience'
import Projects   from './components/Projects'
import Brands     from './components/Brands'
import Skills     from './components/Skills'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  const [showPortfolio, setShowPortfolio] = useState(false)

  // Scroll to top when switching to portfolio
  useEffect(() => {
    if (showPortfolio) {
      window.scrollTo(0, 0)
    }
  }, [showPortfolio])

  if (!showPortfolio) {
    return (
      <>
        <Cursor />
        <main>
          <Intro onEnter={() => setShowPortfolio(true)} />
        </main>
      </>
    )
  }

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Experience />
        <Projects />
        <Brands />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
