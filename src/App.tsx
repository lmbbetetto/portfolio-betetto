import React, { useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portifolio from './components/portfolio/Portifolio'
import {Contact} from './components/contact/index'
import Footer from './components/footer/Footer'

export function App() {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portifolio />
        <Contact />
        <Footer />
    </>
  )
}