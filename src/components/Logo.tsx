import React from 'react';
import logo from '../assets/wordmark-headerbar-air.jpg'
import styles from './Logo.module.css'

const Logo = ():JSX.Element => {
    return (
        <img src = {logo} alt = "Wordmark - Headerbar" width = "61" height = "24" className = {styles.logo}/>
    )
}

export default Logo;