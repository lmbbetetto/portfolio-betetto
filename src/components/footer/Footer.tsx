import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>LEONARDO BETETTO</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiências</a></li>
        <li><a href="#portfolio">Portifólio</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/_leomanoel/?hl=en" target='_black'><FiInstagram/></a>
        <a href="https://github.com/lmbbetetto" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/leonardo-betetto-50672b10b/" target='_blank'><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Leonardo Betetto. Todos os direitos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer