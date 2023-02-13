import CV from '../../assets/CV.pdf'

function CTA() {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Entre em contato</a>
        </div>
    )
}

export default CTA