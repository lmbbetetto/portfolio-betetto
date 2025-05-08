import "./card.css";

import REACT from "../../../../assets/icons/file_type_reactjs_icon_130205.svg";
import NEXT from "../../../../assets/icons/nextjs_icon_132160.svg";
import NODE from "../../../../assets/icons/nodejs_plain_logo_icon_146409.svg";
import TYPE from "../../../../assets/icons/typescript_original_logo_icon_146317.svg";
import TAILWIND from "../../../../assets/icons/css_tailwind_logo_icon_214735.svg";

interface CardProps {
  photo: string;
  alt: string;
  desc: string;
  link: string;
  site?: string;
  showSite?: boolean;
  showReact: boolean;
  showNext: boolean;
  showTailwind: boolean;
  showNode: boolean;
  showType: boolean;
}

export const CardPortfolio: React.FC<CardProps> = ({
  photo,
  alt,
  desc,
  link,
  site,
  showReact = false,
  showNext = false,
  showTailwind = false,
  showNode = false,
  showType = false,
  showSite = true,
}) => {
  return (
    <>
      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={photo} alt={alt} />
        </div>
        <h3>{desc}</h3>
        <div className="card_stacks">
          {showReact && (
            <div className="stack btn">
              <img src={REACT} alt="React logo" />
              <p>ReactJS</p>
            </div>
          )}
          {showNext && (
            <div className="stack btn">
              <img src={NEXT} alt="React logo" />
              <p>NextJS</p>
            </div>
          )}
          {showNode && (
            <div className="stack btn">
              <img src={NODE} alt="React logo" />
              <p>NodeJS</p>
            </div>
          )}
          {showTailwind && (
            <div className="stack btn">
              <img src={TAILWIND} alt="React logo" />
              <p>Tailwind CSS</p>
            </div>
          )}
          {showType && (
            <div className="stack btn">
              <img src={TYPE} alt="React logo" />
              <p>Typescript</p>
            </div>
          )}
        </div>
        <div className="portfolio__item-cta">
          <a href={link} className="btn btn-primary" target="_blank">
            Github
          </a>
          {showSite && (
            <a href={site} className="btn btn-primary" target="_blank">
              Acessar
            </a>
          )}
        </div>
      </article>
    </>
  );
};
