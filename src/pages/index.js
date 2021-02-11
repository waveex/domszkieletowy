import * as React from "react"
import Hero from '../components/hero'
import Offer from '../components/offer'
import About from '../components/about'
import Contact from '../components/contact'
import Projects from '../components/projects'


const IndexPage = () => {
  return (
    <main >

      <Hero />
      <Offer />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default IndexPage

