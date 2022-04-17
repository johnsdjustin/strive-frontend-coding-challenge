import React from 'react';
import Logo from './Logo'
import styles from './HeaderBar.module.css';

const HeaderBar: React.FC = () => {
    return (
    <div className = {styles.headerBar}>
      <Logo/>
    </div>
    )
}

export default HeaderBar;