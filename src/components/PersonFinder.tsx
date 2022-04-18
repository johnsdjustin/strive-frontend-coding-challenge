import {useState, ChangeEvent} from 'react';
import HeaderBar from './HeaderBar';
import ListHeader from './ListHeader';
import SearchBar from './SearchBar';
import PersonList from './PersonList';
import data from '../data/mock-data.json'
import styles from './PersonFinder.module.css';

const PersonFinder = ():JSX.Element => {

  const [searchInput, setSearchInput] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
  }

    return (
        <div>
            <HeaderBar/>
            <div className= {styles.centerContainer}>
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

export default PersonFinder;