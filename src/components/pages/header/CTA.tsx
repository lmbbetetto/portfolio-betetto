import CV from "../../assets/curriculo.pdf";

function CTA() {
  return (
    <div className="cta">
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
  );
}

export default CTA;
