import React, {ChangeEvent} from 'react';
import searchIcon from '../assets/magnifiying.png'
import styles from './SearchBar.module.css'


type HandleChange = (event: ChangeEvent<HTMLInputElement>) => void;

interface SearchBarProps {
    handleChange: HandleChange
    searchInput: string
}

const SearchBar = (props: SearchBarProps): JSX.Element => {

    const { handleChange, searchInput } = props;

    return (
        <div className= {styles.searchContainer}>
        <img src = {searchIcon} width = "12px" height = "12px" alt = "" className = {styles.searchIcon}/>
          <input className = {styles.searchBar} type="text" value = {searchInput} onChange={handleChange} placeholder = "Search in Air HQ"/>
        </div>
    )
}

export default SearchBar;