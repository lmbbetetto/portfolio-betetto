import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {FaHtml5} from 'react-icons/fa'
import {IoLogoCss3} from 'react-icons/io'
import {IoLogoJavascript} from 'react-icons/io'
import {SiReact} from 'react-icons/si'
import {IoLogoNodejs} from 'react-icons/io'
import {GrMysql} from 'react-icons/gr'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Quais habilidades eu tenho?</h5>
      <h2>Experiências</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desenvolvimento Front-end</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='experience__details'>
              <IoLogoCss3 className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='experience__details'>
              <IoLogoJavascript className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiReact className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
          </div>
        </div>
                
                {/* END OF FRONTEND */}

        <div className="experience__backend">
        <h3>Desenvolvimento Back-end</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <IoLogoNodejs className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience