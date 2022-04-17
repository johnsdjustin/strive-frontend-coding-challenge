import React from 'react';
import Logo from './Logo'

const HeaderBar: React.FC = () => {
    return (
    <div style = {styles.headerBar}>
      <Logo/>
    </div>
    )
}

const styles = {
    headerBar: {
        borderTopWidth: '3.43px',
        borderTopColor: '#33DBDB',
        borderStyle: 'solid',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0
      }
}

export default HeaderBar;