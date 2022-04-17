import React from 'react';

const ListHeader: React.FC = () => {

    return (
        <div style = {styles.container}>
            <p style = {styles.headerText}>The Person Finder</p>
            <p style = {styles.paragraphText}>
                If you just can’t find someone and need to know what they look like, 
                you’ve come to the right place! Just type the name of the person you 
                are looking for below into the search box!
            </p>
        </div>
    )

}

const styles = {
    container: {
        width: '562px',
        minHeight: '72px',
        display: 'flex',
        flexDirection: 'column' as const
    },
    headerText: {
        color: '#112467',
        fontWeight: 'bold',
        fontSize: '25px',
        fontFamily: 'Helvetica',
      },
    paragraphText: {
        color: '#333333',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)'
      }
};

export default ListHeader;
