import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { Card } from './cards/Card';

export function Contact() {
  return (
    <section id='contact'>
      <h5>Entre em contato</h5>
      <h2>Contate-me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <Card
            link='mailto:lmbbetetto@gmail.com'
            tipo='Email'
            conteudo="lmbbetetto@gmail.com"
            icone={MdOutlineEmail}
          />

          <Card
            link='https://www.instagram.com/leobetetto/'
            tipo='Instagram'
            conteudo="leobetetto"
            icone={FiInstagram}
          />

          <Card
            link='https://wa.me/5518996563354'
            tipo='WhatsApp'
            conteudo="+55 18 99656-3354"
            icone={BsWhatsapp}
          />
        </div>
      </div>
    </section>
  )
}