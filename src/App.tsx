import React from 'react';
import data from './data/mock-data.json'
import logo from './wordmark-headerBarAir.jpg'
import searchIcon from './magnifiying.png'

function App() {

  return (
    <div style={styles.container}>
      <div style = {styles.logoContainer}>
        <img src = {logo} alt = "Wordmark - Headerbar" width = "61" height = "24" />
      </div>
      <div style = {styles.contentContainer}>
        <div style = {styles.textContainer}>
          <p style = {styles.headerText}>The Person Finder</p>
          <p style = {styles.paragraphText}>If you just can’t find someone and need to know what they look like, you’ve come to the right place! Just type the name of the person you are looking for below into the search box!</p>
          <div style = {{
                width: '561px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
          }}>
          <img src = {searchIcon} width = "12px" height = "12px" alt = "" style = {{
              position: 'absolute',
              paddingLeft: '15px',
            }}/>
            <input style = {styles.searchBar} type="text" placeholder = "Search in Air HQ"/>
          </div>
          
          {data.map(person => {
            
            return (
              <div style = {{
                display: 'flex'

              }} key = {person.id} >
                <img src = {person.avatar} alt = {person.name} width = "95" height = "96"/>
                <div style = {{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <p style = {styles.nameText}>{person.name}</p>
                  <p style = {styles.descriptionText}>{person.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#ffffff',
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
  logoContainer: {
    marginLeft: '193px'
  },
  paragraphText: {
    fontFamily: 'Helvetica',
    color: '#333333',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'
  },
  searchBar: {
    // width: '561px',
    // height: '40px',
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
  nameText:{
    fontWeight: 700,
    fontSize: '16px',
    fontFamily: 'Helvetica',
    color: '#333333',
    lineHeight:'24px',
    letterSpacing: '-0.025em'

  },
  descriptionText: {
    fontSize: '14px',
    fontFamily: 'Helvetica',
    color: '#666666',
    lineHeight: '14px',
    fontWeight: '21px',
    letterSpacing: '-0.051em'
  },
  personCard: {
    display: 'flex',
    flexDirection: 'row' as const,
    justifyContent: 'flexStart'
  }
}

export default App;


