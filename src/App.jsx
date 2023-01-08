import React from 'react'
import './App.css'
import Header from './components/header/header'
import About from './components/about/about'
import Contact from './components/Contact/contact'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Footer from './components/footer/footer'
import Nav from './components/nav/nav'
import Portfolio from './components/portfolio/portfolio'
//import Testimonials from './components/testimonials/testimonials'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    {/*<Testimonials/>add it later and add it in footer too*/}
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default App