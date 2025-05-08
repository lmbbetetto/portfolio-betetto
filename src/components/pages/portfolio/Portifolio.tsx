import "./portfolio.css";
import IMG1 from "../../../assets/projeto_portifolio.png";
import IMG2 from "../../../assets/projeto_casalar.png";
import IMG3 from "../../../assets/projeto_acipp.png";
import IMG4 from "../../../assets/projeto_lardosidosos.png";
import IMG5 from "../../../assets/projeto_tcc.png";

import { CardPortfolio } from "./components/card/Card";

function Portifolio() {
  const Cards = [
    {
      desc: "Sistema Gestão Escolar | TCC",
      link: "https://github.com/lmbbetetto/tcc-an-lise-dev-sistemas",
      photo: IMG5,
      alt: "Imagem TCC",
      showNode: true,
      showNext: true,
      showType: true,
      showTailwind: true,
      showSite: false,
    },
    {
      desc: "Portfólio | Leonardo Betetto",
      link: "https://github.com/lmbbetetto/portfolio-betetto",
      photo: IMG1,
      alt: "Imagem Portifolio",
      site: "https://portfolio-fezftkd9p-lmbbetetto.vercel.app/#experience",
      showReact: true,
      showType: true,
    },
    {
      desc: "Site | Casa Lar",
      link: "https://github.com/lmbbetetto/CASALAR.git",
      photo: IMG2,
      alt: "Imagem Casa Lar",
      site: "https://www.associacaocasalar.com.br/",
      showReact: true,
      showType: true,
    },
    {
      desc: "Site | ACIPP Casa Abrigo",
      link: "https://github.com/lmbbetetto/site-casaabrigo",
      photo: IMG3,
      alt: "Imagem Casa Abrigo",
      site: "https://www.acippcasaabrigo.com.br/",
      showReact: true,
      showType: true,
    },
    {
      desc: "Site | Lar dos Idosos",
      link: "https://github.com/lmbbetetto/site_lardosidosos",
      photo: IMG4,
      alt: "Imagem Lar dos Idosos",
      site: "https://www.lardosidososparaguacu.com.br/",
      showReact: true,
      showType: true,
    },
  ];

  return (
    <section id="portfolio">
      <h5>Meus trabalhos</h5>
      <h2>Projetos</h2>

      <div className="container portfolio__container">
        {Cards.map((component, index) => (
          <CardPortfolio
            key={index}
            desc={component.desc}
            link={component.link}
            photo={component.photo}
            alt={component.alt}
            site={component.site}
            showReact={component.showReact ?? false}
            showNext={component.showNext ?? false}
            showNode={component.showNode ?? false}
            showTailwind={component.showTailwind ?? false}
            showType={component.showType ?? false}
            showSite={component.showSite}
          />
        ))}
      </div>
    </section>
  );
}

export default Portifolio;
