import styles from './ListHeader.module.css';

const ListHeader = ():JSX.Element => {

    return (
        <div className = {styles.container}>
            <h1 className = {styles.headerText}>The Person Finder</h1>
            <p className = {styles.paragraphText}>
                If you just can’t find someone and need to know what they look like, 
                you’ve come to the right place! Just type the name of the person you 
                are looking for below into the search box!
            </p>
        </div>
    )

}

export default ListHeader;
