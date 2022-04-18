import logo from '../assets/wordmark-headerbar-air.jpg'
import styles from './Logo.module.css'

const Logo = ():JSX.Element => {
    return (
        <img src = {logo} alt = "wordmark-headerbar" className = {styles.logo}/>
    )
}

export default Logo;