import React from 'react';
import { MDBBox } from 'mdbreact';
import styles from '../css-modules/PageLoad.module.css';

const PageLoad = () => {
    return (
        <MDBBox className={styles.loadingDiv} display='flex'>
        <h1 className={styles.loadingText}>Loading</h1>
        <div className={styles.spinnerContainer}>
        <div className='spinner-grow amber darken-4'></div>
        <div className='spinner-grow amber darken-4'></div>
        <div className='spinner-grow amber darken-4'></div>
        </div>
        </MDBBox>
    )
}

export default PageLoad;