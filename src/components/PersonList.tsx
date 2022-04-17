import React from 'react';
import PersonCard from './PersonCard';

interface PersonData {
    id: number,
    name: string,
    email: string,
    avatar: string,
    description: string,
}

interface PersonListProps{
    data: PersonData[],
    searchInput: string
}

const PersonList = (props: PersonListProps): JSX.Element => {

    const {
        data, 
        searchInput
    } = props;

    // Determines if the match string is contained within the name string.
    // If the match string is present in the name string, the function returns 
    // true, otherwise it returns false
    const isMatch = (name: string, match: string): boolean => {
      return name.toLowerCase().indexOf(match.toLowerCase()) > -1
    }

    // Generates an array of PersonCard components based on the name of the
    // current person and the value the user types into the search bar
    const render = (): (JSX.Element | null)[] => {
        const cardList = data.map(person => {
          if(isMatch(person.name, searchInput)){
            return (
              <PersonCard
                id = {person.id}
                name = {person.name}
                avatar = {person.avatar}
                description = {person.description}
                key = {person.id}
              />
            )
          }
    
          return null;
    
        })
    
        return cardList
      }


     return (
     <div>
         {render()}
     </div>
     )
}

export default PersonList;