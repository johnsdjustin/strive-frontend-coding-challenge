import React from 'react';

export interface Data {
    id: number,
    name: string,
    email: string,
    avatar: string,
    description: string,
}

interface PersonListProps{
    data: Data[],
    searchInput: string
}

const PersonList: React.FC<PersonListProps> = (props) => {

    const {
        data, 
        searchInput
    } = props;

    const render = () => {

        const cardList = data.map(person => {
          if(person.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1){
            return (
              <div style = {styles.card} key = {person.id} >
                <img src = {person.avatar} alt = {person.name} width = "95" height = "96"/>
                <div style = {styles.cardTextContainer}>
                  <p style = {styles.nameText}>{person.name}</p>
                  <p style = {styles.descriptionText}>{person.description}</p>
                </div>
              </div>
            )
          }
    
          return null
    
        })
    
        return cardList
      }


     return (
     <div>
         {render()}
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

export default PersonList;