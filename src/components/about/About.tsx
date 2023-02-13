import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Venha me conhecer</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experiência</h5>
              <small>Freelance</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projetos</h5>
              <small>3 Completos</small>
            </article>
          </div>

          <p>
            Me chamo Leonardo Manoel, moro no interior de São Paulo, estudando o 2º ano de Analise e desenvolvimento de sistemas,
            focando na área front-end, voltado em ReactJS, procurando criar soluções em sites e sistemas web.
          </p>

          <div className='container_btn'>
            <a href="#contact" className='btn btn-primary'>Entre em contato</a>
            <a href="https://www.linkedin.com/in/leonardo-betetto-50672b10b/" className='btn btn-primary'>Linkedin</a>
            <a href="https://github.com/lmbbetetto" className='btn btn-primary'>GitHub</a>
          </div>


        </div>
      </div>
    </section>
  )
}

export default About