import './header.css'
import CTA from './CTA'
import { i18n } from "../../translate/i18n"

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, eu sou</h5>
        <h1>Leonardo Betetto</h1>
        <h5 className="text-light">Desenvolvedor front-end</h5>
        <CTA />
      </div>
    </header>
  )
}

export default Header