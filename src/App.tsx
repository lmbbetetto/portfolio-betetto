import React, { useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portifolio from './components/portfolio/Portifolio'
import Contact from './components/contact/index'
import Footer from './components/footer/Footer'
import SubmitModal from './components/Modal/modal'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function App() {

  const [onSubmitContact, setOnSubmitContact] = useState(false)

  function handleOpenModal(){
    setOnSubmitContact(true);
    console.log(onSubmitContact)
  }

  function handleCloseModal(){
    setOnSubmitContact(false);
  }

  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portifolio />
        <Contact onSubmitContact={handleOpenModal} />
        <SubmitModal isOpen={onSubmitContact} onRequestClose={handleCloseModal} />
        <Footer />
    </>
  )
}

export default App