import React from 'react';

interface PersonCardProps{
    id: number,
    name: string,
    avatar: string,
    description: string
}

const PersonCard: React.FC<PersonCardProps> = (props) => {

    const { id, name, avatar, description } = props;

    return(
        <div style = {styles.card} key = {id} >
            <img src = {avatar} alt = {name} width = "95" height = "96"/>
            <div style = {styles.cardTextContainer}>
            <p style = {styles.nameText}>{name}</p>
            <p style = {styles.descriptionText}>{description}</p>
            </div>
        </div>
    )

}

const styles = {
    card: {
        display: 'flex',
        width: 575,
        height: 96,
    },
    cardTextContainer:{
        display: 'flex',
        flexDirection: 'column' as const,
        marginLeft: '5px'
    },
    nameText:{
        fontWeight: 700,
        fontSize: '16px',
        color: '#333333',
        lineHeight:'24px',
        letterSpacing: '-0.025em'
    },
    descriptionText: {
        fontSize: '14px',
        color: '#666666',
        lineHeight: '14px',
        fontWeight: '21px',
        letterSpacing: '-0.051em'
    },
}

export default PersonCard;