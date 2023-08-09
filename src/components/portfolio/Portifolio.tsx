import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/projeto_portifolio.png'
import IMG2 from '../../assets/projeto_casalar.png'
import IMG3 from '../../assets/projeto_acipp.png'
import IMG4 from '../../assets/projeto_lardosidosos.png'

import { CardPortfolio } from './cards/Card'

function Portifolio() {

  const Cards = [
    {
      desc: 'Portfólio | Leonardo Betetto',
      link: 'https://github.com/lmbbetetto/portfolio-betetto',
      photo: IMG1,
      alt: 'Imagem Portifolio',
      site: 'https://portfolio-fezftkd9p-lmbbetetto.vercel.app/#experience'
    },
    {
      desc: 'Site | Casa Lar',
      link: 'https://github.com/lmbbetetto/CASALAR.git',
      photo: IMG2,
      alt: 'Imagem Casa Lar',
      site: 'https://www.associacaocasalar.com.br/'
    },
    {
      desc: 'Site | ACIPP Casa Abrigo',
      link: 'https://github.com/lmbbetetto/site-casaabrigo',
      photo: IMG3,
      alt: 'Imagem Casa Abrigo',
      site: 'https://www.acippcasaabrigo.com.br/'
    },
    {
      desc: 'Site | Lar dos Idosos',
      link: 'https://github.com/lmbbetetto/site_lardosidosos',
      photo: IMG4,
      alt: 'Imagem Lar dos Idosos',
      site: 'https://www.lardosidososparaguacu.com.br/'
    },

  ]

  return (
    <section id='portfolio'>
      <h5>Meus trabalhos</h5>
      <h2>Portfólio</h2>

      <div className="container portfolio__container">

        {
          Cards.map((component, index) => (
            <CardPortfolio 
              key={index}
              desc={component.desc}
              link={component.link}
              photo={component.photo}
              alt={component.alt}
              site={component.site}
            />
          ))
        }

      </div>
    </section>
  )
}

export default Portifolio