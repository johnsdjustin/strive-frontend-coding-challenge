import React, {useState, ChangeEvent} from 'react';
import HeaderBar from './HeaderBar';
import ListHeader from './ListHeader';
import SearchBar from './SearchBar';
import PersonList from './PersonList';
import data from '../data/mock-data.json'

const PersonFinder: React.FC = () => {

  const [searchInput, setSearchInput] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
  }

    return (
        <div>
            <HeaderBar/>
            <div style = {styles.centerContainer}>
              <ListHeader/>
              <SearchBar
                handleChange={handleChange}
                searchInput = {searchInput}
              />
              <PersonList
                data = {data}
                searchInput = {searchInput}
              />
            </div>
        </div>
    )
}

const styles = {
  centerContainer:{
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center'
  }
}

export default PersonFinder;