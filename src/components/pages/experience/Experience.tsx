import "./experience.css";

import { MdOutlineWork } from "react-icons/md";

export function Experience() {
  return (
    <section id="experience">
      <h5>Quais experiências eu tenho?</h5>
      <h2>Experiências</h2>

      <div className="container experience_container">
        <div className="experience">
          <h3>Experiências profissionais</h3>

          <div className="experience_content">
            <div className="experience_item">
              <div className="experience_icon-line">
                <MdOutlineWork size={20} />
                <span className="experience_line"></span>
              </div>

              <div className="experience_details">
                <div className="details">
                  <div className="experience_date">
                    <h1>Start Your App</h1>
                    <p>Julho 2024 - Dezembro 2024</p>
                    <p className="empresa">Desenvolvedor Front-end</p>
                  </div>
                  <div className="detail">
                    <ul>
                      <li>
                        Desenvolvimento de novas funcionalidades para o sistema
                        utilizando Next.js com TypeScript;
                      </li>
                      <li>Integração com APIs REST;</li>
                      <li>Correção de bugs;</li>
                      <li>
                        Metodologia SCRUM para o desenvolvimento das atividades.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="details space-top">
                  <div className="experience_date">
                    <h1>Projeto C.A.R.A.</h1>
                    <p>Março 2021 - Julho 2024</p>
                    <p className="empresa">Instrutor de Informática</p>
                  </div>
                  <div className="detail">
                    <ul>
                      <li>
                        Desenvolvimento de atividades de informática básica
                        voltadas para o mercado de trabalho;
                      </li>
                      <li>Atendimento aos pais dos alunos</li>
                      <li>Elaboração de relatórios.</li>
                    </ul>
                  </div>
                  <div className="experience_dates">
                    <p className="empresa">Suporte Técnico</p>
                  </div>
                  <div className="detail">
                    <ul>
                      <li>Manutenção de computadores;</li>
                      <li>Suporte em redes LAN;</li>
                      <li>Manutenção de softwares;</li>
                      <li>Manutenção de impressoras e periféricos.</li>
                    </ul>
                  </div>
                </div>

                <div className="details space-top">
                  <div className="experience_date">
                    <h1>Nandex Informática</h1>
                    <p>Agosto 2019 - Março 2021</p>
                    <p className="empresa">Suporte Técnico</p>
                  </div>
                  <div className="detail">
                    <ul>
                      <li>Análise e manutenção em Harware;</li>
                      <li>Análise e manutenção de Software;</li>
                      <li>Suporte em redes locais;</li>
                      <li>Configuração de redes locais;</li>
                      <li>Atendimento ao público.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
