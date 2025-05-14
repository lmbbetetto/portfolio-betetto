import "./about.css";
import ME from "../../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import CV from "../../../assets/CV-Leonardo-Betetto.pdf";
import { CardsPortifolio } from "../portfolio/cards";

export function About() {
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
              <h5>Experiência</h5>
              <small>Júnior</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projetos</h5>
              <small>{CardsPortifolio.length}</small>
            </article>
          </div>

          <p>
            Bem-vindo ao meu portfólio pessoal! Eu sou um desenvolvedor
            front-end apaixonado por HTML, CSS, JavaScript e React, e tenho 2
            anos de experiência profissional atuando como Desenvolvedor
            Front-end. No meu portfólio, você encontrará alguns dos projetos
            mais interessantes em que trabalhei, incluindo sites, aplicações web
            e experiências interativas. Eu trabalho com HTML e CSS para criar
            layouts elegantes e acessíveis, e utilizo JavaScript para dar vida
            às minhas páginas web com interações dinâmicas e funcionalidades
            avançadas. Um dos meus pontos fortes é a minha habilidade em React.
            Eu tenho experiência na criação de componentes reutilizáveis,
            utilização de bibliotecas populares como Redux e Material UI, e
            construção de aplicações complexas de uma página. Em resumo, meu
            portfólio pessoal demonstra minha capacidade de desenvolver sites
            modernos e funcionais utilizando as tecnologias mais recentes. Se
            você está procurando um desenvolvedor front-end que possa entregar
            resultados excepcionais, eu estou aqui para ajudar. Obrigado pela
            visita!
          </p>

          <div className="container_btn">
            <a href={CV} className="btn" target="_blank">
              Download CV
            </a>
            <a href="#contact" className="btn btn-primary">
              Entre em contato
            </a>
            <a
              href="https://www.linkedin.com/in/leonardo-betetto-50672b10b/"
              className="btn btn-primary"
            >
              Linkedin
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
