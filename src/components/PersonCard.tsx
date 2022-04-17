import React from 'react';
import styles from './PersonCard.module.css';

interface PersonCardProps{
    id: number,
    name: string,
    avatar: string,
    description: string
}

const PersonCard = (props: PersonCardProps):JSX.Element => {

    const { id, name, avatar, description } = props;

    return(
        <div className = {styles.card} key = {id} >
            <img src = {avatar} alt = {name} width = "95.83" height = "96"/>
            <div className = {styles.cardTextContainer}>
                <p className = {styles.nameText}>{name}</p>
                <p className = {styles.descriptionText}>{description}</p>
            </div>
        </div>
    )

}

export default PersonCard;