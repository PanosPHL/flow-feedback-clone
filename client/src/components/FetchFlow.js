import React from 'react';
import { MDBBox } from 'mdbreact';
import FlowFormTopRow from './FlowFormTopRow';
import FetchFlowForm from './FetchFlowForm';
import styles from '../css-modules/FetchFlow.module.css';

const FetchFlow = () => {
    return (
        <>
        <div className={styles.formContainer}>
        <MDBBox className={styles.formText + ' mx-auto'}>
            <FlowFormTopRow />
            <h5 className='font-weight-bold mb-3'>Select a video</h5>
            <div className={styles.logoContainer}>
                <div className={styles.nestedDiv + ' mx-auto'}>
                <img src='/images/youtube.png' className={styles.youtubeLogo + ' mx-auto'}/>
                <div className={styles.youtubeText + ' mx-auto'}>YouTube</div>
                </div>
            </div>
            <FetchFlowForm />
        </MDBBox>
        </div>
        </>
    )
}

export default FetchFlow;