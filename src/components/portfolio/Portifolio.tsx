import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/projeto_portifolio.png'
import IMG2 from '../../assets/projeto_casalar.png'
import IMG3 from '../../assets/projeto_acipp.png'
import IMG4 from '../../assets/projeto_lardosidosos.png'

function Portifolio() {
  return (
    <section id='portfolio'>
      <h5>Meus trabalhos</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Portfólio | Leonardo Betetto</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/lmbbetetto/portifolio-pessoal-react.git" className='btn btn-primary' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Site | Casa Lar</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/lmbbetetto/CASALAR.git" className='btn btn-primary' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Site | ACIPP Casa Abrigo</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/lmbbetetto/site-casaabrigo" className='btn btn-primary' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Site | Lar dos Idosos</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/lmbbetetto/site_lardosidosos" className='btn btn-primary' target='_blank'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portifolio