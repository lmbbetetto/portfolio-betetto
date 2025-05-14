import "./portfolio.css";

import { CardPortfolio } from "./components/card/Card";
import { CardsPortifolio } from "./cards";

export function Portifolio() {
  return (
    <section id="portfolio">
      <h5>Meus trabalhos</h5>
      <h2>Projetos</h2>

      <div className="container portfolio__container">
        {CardsPortifolio.map((component, index) => (
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
