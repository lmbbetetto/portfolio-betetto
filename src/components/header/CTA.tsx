import CV from '../../assets/curriculo.pdf'

function CTA() {
    return (
        <div className='cta'>
            <a href={CV} className='btn' target='_blank'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Entre em contato</a>
        </div>
    )
}

export default CTA