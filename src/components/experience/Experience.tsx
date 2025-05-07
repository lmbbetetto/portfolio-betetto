import "./experience.css";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Quais habilidades eu tenho?</h5>
      <h2>Experiências</h2>

      <div className="container_experience">
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Desenvolvimento Front-end</h3>
            <div className="experience__content">
              <article className="experience__details">
                <SiReact className="experience__details-icon" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Intermediário</small>
                </div>
              </article>

              <article className="experience__details">
                <SiReact className="experience__details-icon" />
                <div>
                  <h4>NextJS</h4>
                  <small className="text-light">Intermediário</small>
                </div>
              </article>

              <article className="experience__details">
                <SiTailwindcss className="experience__details-icon" />
                <div>
                  <h4>Tailwind CSS</h4>
                  <small className="text-light">Intermediário</small>
                </div>
              </article>

              <article className="experience__details">
                <SiTypescript className="experience__details-icon" />
                <div>
                  <h4>Typescript</h4>
                  <small className="text-light">Intermediário</small>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Desenvolvimento Back-end</h3>
            <div className="experience__content">
              <article className="experience__details">
                <FaNodeJs className="experience__details-icon" />
                <div>
                  <h4>NodeJS</h4>
                  <small className="text-light">Básico</small>
                </div>
              </article>

              <article className="experience__details">
                <SiMysql className="experience__details-icon" />
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Intermediário</small>
                </div>
              </article>

              <article className="experience__details">
                <SiPostgresql className="experience__details-icon" />
                <div>
                  <h4>Postgress SQL</h4>
                  <small className="text-light">Intermediário</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
