import React from 'react';
import logo from '../assets/wordmark-headerbar-air.jpg'


const Logo: React.FC = () => {
    return (
        <img src = {logo} alt = "Wordmark - Headerbar" width = "61" height = "24" style = {styles.logo}/>
    )
}

const styles = {
    logo: {
        marginTop: '33px',
        marginLeft: '193px'
      },
}

export default Logo;