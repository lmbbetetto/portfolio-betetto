import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { Card } from './cards/Card';
import { useEffect } from 'react';

export function Contact() {
  return (
    <section id='contact'>
      <h5>Entre em contato</h5>
      <h2>Contate-me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <Card
            link='mailto:lmbbetetto@gmail.com'
            type='Email'
            content="lmbbetetto@gmail.com"
            icone={MdOutlineEmail}
          />

          <Card
            link='https://www.instagram.com/leobetetto/'
            type='Instagram'
            content="leobetetto"
            icone={FiInstagram}
          />

          <Card
            link='https://wa.me/5518996563354'
            type='WhatsApp'
            content="+55 18 99656-3354"
            icone={BsWhatsapp}
          />
        </div>
      </div>
    </section>
  )
}