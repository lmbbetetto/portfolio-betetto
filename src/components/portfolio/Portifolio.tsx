import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

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
          <h3>Portifólio | Reactfolio</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/lmbbetetto/react-portifolio-website-1.git" className='btn btn-primary' target='_blank'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portifolio