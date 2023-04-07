import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

type ContactType = {
  onSubmitContact: () => void
}


function Contact({ onSubmitContact }: ContactType) {
  const form = useRef<any>();

  //Alterar Any
  const sendEmail = (e: any) => {
    e.preventDefault();

    //Tipar form.current
    emailjs.sendForm('service_98n5t52', 'template_10jwbbz', form.current, 'EHQntXXmTW_cNvFQC')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Entre em contato</h5>
      <h2>Contate-me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>lmbbetetto@gmail.com</h5>
            <a href="mailto:lmbbetetto@gmail.com" target='_blank'>Envie uma mensagem</a>
          </article>

          <article className="contact__option">
            <FiInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>_leomanoel</h5>
            <a href="https://www.instagram.com/_leomanoel/?hl=en" target='_blank'>Envie uma mensagem</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+55 18 99656-3354</h5>
            <a href="https://wa.me/5518996563354" target='_blank'>Envie uma mensagem</a>
          </article>
        </div>


        {/* <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nome completo' required />
          <input type="email" name="email" placeholder='Email' required />
          <textarea name="message" rows={7} placeholder='Mensagem' required></textarea>
          <button type='submit' onClick={onSubmitContact} className='btn btn-primary'>Enviar</button>
        </form> */}
      </div>
    </section>
  )
}

export default Contact