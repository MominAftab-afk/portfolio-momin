import Cursor     from './components/Cursor'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Ticker     from './components/Ticker'
import About      from './components/About'
import Experience from './components/Experience'
import Brands     from './components/Brands'
import Skills     from './components/Skills'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Experience />
        <Brands />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
