import React from 'react';
import SideNavComponent from './SideNavComponent';
import styles from '../css-modules/NotFound.module.css';

const NotFound = () => {
    return (
        <>
        <SideNavComponent />
        <div className={styles.pageContainer}>
            <div className={styles.textContainer}>
            <h1 className='font-weight-bold'>Sorry, but it seems like the page you requested doesn't exist!</h1>
            <img alt='sike' src='https://media.giphy.com/media/cn9YaZ1gPc74vVJHWq/giphy.gif' style={{marginTop: '3em'}}/>
            </div>
        </div>
        </>
    )
};

export default NotFound;