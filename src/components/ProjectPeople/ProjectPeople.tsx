import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faTrashCan, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import './ProjectPeople.css'

interface PersonDetails {
    name: string,
    involvement: string,
    description: string,
    email: string,
    edit?: () => void;
    delete?: () => void;
}

export const Person: React.FC<PersonDetails> = (props) => {
    return (
        <div className="card">
            <div className="card__header">
                <h1 className="card__title">{ props.name }</h1>
                <div className="card__header__icons">
                    <FontAwesomeIcon icon={faPen} 
                        className="icon" 
                        onClick={props.edit}
                    />
                    <h3 className="icon icon--spacer">|</h3>
                    <FontAwesomeIcon icon={faTrashCan} 
                        className="icon" 
                        onClick={props.delete}
                    />
                </div>
            </div>
            <h2 className="card__subtitle card__subtitle--involvement">{ props.involvement }</h2>
            <p className="card__text">{ props.description }</p>
            <div className="card__email">
                <FontAwesomeIcon icon={faEnvelope} className="icon icon--email" />
                <a href={`mailto:${props.email}`} className="card__subtitle card__subtitle--email">{ props.email }</a>
            </div>
        </div>
    )
}