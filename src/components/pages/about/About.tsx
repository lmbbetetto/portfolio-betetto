import "./about.css";
import ME from "../../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import CV from "../../../assets/CV-Leonardo-Betetto.pdf";
import { CardsPortifolio } from "../portfolio/cards";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>{t("experience")}</h5>
              <small>{t("junior")}</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>{t("project")}</h5>
              <small>{CardsPortifolio.length}</small>
            </article>
          </div>
          <p>{t("aboutText")}</p>
          <div className="container_btn">
            <a href={CV} className="btn" target="_blank">
              {t("cv")}
            </a>
            <a href="#contact" className="btn btn-primary">
              {t("contact")}
            </a>
            <a
              href="https://www.linkedin.com/in/leonardo-betetto-50672b10b/"
              className="btn btn-primary"
            >
              LinkedIn
            </a>
            <a href="https://github.com/lmbbetetto" className="btn btn-primary">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
