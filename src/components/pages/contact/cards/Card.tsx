import React from "react";
import "./card.css"

interface CardProps {
    icone: React.ElementType;
    type: string;
    content: string;
    link: string;
}

export const Card: React.FC<CardProps> = (props) => {
    return (
        <>
            <a href={props.link} target='_blank' className="contact__option">
                <article>
                    {<props.icone className='contact__option-icon' />}
                    <h4>{props.type}</h4>
                    <h5>{props.content}</h5>
                    <a>Envie uma mensagem</a>
                </article>
            </a>
        </>
    )
}