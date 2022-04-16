import React, {useState, ChangeEvent} from 'react';
import data from './data/mock-data.json'
import logo from './wordmark-headerBarAir.jpg'
import searchIcon from './magnifiying.png'

function App() {

  /**
   * Header Bar Component
   * Logo Component
   * Search Bar Component
   * Person List
   * Person Card
   * 
   * Which components need wrappers
   */

  const [searchInput, setSearchInput] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value)
  }

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
    <div style={styles.container}>
      <div style = {styles.headerBar}>
        <img src = {logo} alt = "Wordmark - Headerbar" width = "61" height = "24" style = {styles.logo}/>
      </div>
      <div style = {styles.contentContainer}>
        <div style = {styles.textContainer}>
          <p style = {styles.headerText}>The Person Finder</p>
          <p style = {styles.paragraphText}>If you just can’t find someone and need to know what they look like, you’ve come to the right place! Just type the name of the person you are looking for below into the search box!</p>
          <div style = {styles.searchContainer}>
          <img src = {searchIcon} width = "12px" height = "12px" alt = "" style = {styles.searchIcon}/>
            <input style = {styles.searchBar} type="text" value = {searchInput} onChange={handleChange} placeholder = "Search in Air HQ"/>
          </div>
          {render()}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#ffffff',
    margin: 0,
    padding: 0
  },
  headerText: {
    color: '#112467',
    fontWeight: 'bold',
    fontSize: '25px',
    fontFamily: 'Helvetica',
  },
  contentContainer: {
    display: 'flex' as const,
    flexDirection: 'row' as const,
    justifyContent: 'center'
  },
  textContainer: {
    width: '562px',
    height: '72px',
    diplay: 'flex',
    justifyContent: 'flexEnd'
  },
  headerBar: {
    borderTopWidth: '3.43px',
    borderTopColor: '#33DBDB',
    borderStyle: 'solid',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  logo: {
    marginTop: '33px',
    marginLeft: '193px'
  },
  paragraphText: {
    color: '#333333',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'
  },
  searchBar: {
    width: '100%',
    height: '100%',
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
  searchIcon: {
    position: 'absolute' as const,
    paddingLeft: '15px',
  },
  searchContainer: {
    width: '561px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
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
  personCard: {
    display: 'flex',
    flexDirection: 'row' as const,
    justifyContent: 'flexStart'
  },
  card: {
    display: 'flex',
  },
  cardTextContainer:{
    display: 'flex' as const,
    flexDirection: 'column' as const,
    marginLeft: '5px'
  }
}

export default App;


