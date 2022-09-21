import React from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import './ProjectPeople.css'

interface PersonDetails {
    name: string,
    involvement: string,
    description: string,
    email: string,
    isCurrentMember: boolean, // if person is current member or alumni
    edit?: () => void;
    delete?: () => void;
}

export const Person: React.FC<PersonDetails> = (props) => {
    let alumniTag = '<div style="border:1px solid blue; color: blue;">Alumni</div>';
    return (
        <div className="card">
            <div className="card__header">
                <h1 className="card__title">{ props.name }</h1>
                <div className="card__header__icons">
                    {props.isCurrentMember ? alumniTag + '<h3 className="icon icon--spacer">|</h3>': ''}
                    <EditIcon 
                        className="icon" 
                        onClick={props.edit}
                    />
                    <h3 className="icon icon--spacer">|</h3>
                    <DeleteIcon
                        className="icon" 
                        onClick={props.delete}
                    />
                </div>
            </div>
            <h2 className="card__subtitle card__subtitle--involvement">{ props.involvement }</h2>
            <p className="card__text">{ props.description }</p>
            <div className="card__email">
                <EmailIcon className="icon icon--email" />
                <a href={`mailto:${props.email}`} className="card__subtitle card__subtitle--email">{ props.email }</a>
            </div>
        </div>
    )
}
