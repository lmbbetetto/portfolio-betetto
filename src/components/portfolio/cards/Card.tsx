import "./card.css"

interface CardProps {
    photo: string;
    alt: string;
    desc: string;
    link: string;
}

export const CardPortfolio: React.FC<CardProps> = (props) => {
    return (
        <>
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={props.photo} alt={props.alt} />
                </div>
                <h3>{props.desc}</h3>
                <div className="portfolio__item-cta">
                    <a href={props.link} className='btn btn-primary' target='_blank'>Github</a>
                </div>
            </article>
        </>
    )
}