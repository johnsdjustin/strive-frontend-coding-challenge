import React, {ChangeEvent} from 'react';
import searchIcon from '../assets/magnifiying.png'

type HandleChange = (event: ChangeEvent<HTMLInputElement>) => void;

interface SearchBarProps {
    handleChange: HandleChange
    searchInput: string
}

const SearchBar: React.FC<SearchBarProps> = (props) => {

    const { handleChange, searchInput } = props;

    return (
        <div style = {styles.searchContainer}>
        <img src = {searchIcon} width = "12px" height = "12px" alt = "" style = {styles.searchIcon}/>
          <input style = {styles.searchBar} type="text" value = {searchInput} onChange={handleChange} placeholder = "Search in Air HQ"/>
        </div>
    )
}

const styles = {
    searchContainer: {
        width: '561px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
      },
    searchIcon: {
        position: 'absolute' as const,
        paddingLeft: '15px',
    },
    searchBar: {
        height: '100%',
        width: '100%',
        backgroundColor: '#EFEFEF',
        borderColor: 'transparent',
        fontFamily: 'Helvetica',
        color: '#808080',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '21px',
        letterSpacing: '-0.015em',
        borderRadius: '4px',
        paddingLeft: '30px'
      },
}

export default SearchBar;