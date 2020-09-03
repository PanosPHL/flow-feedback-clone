import React from 'react';
import { useSelector } from 'react-redux';
import { MDBContainer } from 'mdbreact';
import YouTube from 'react-youtube';
import NewFlowForm from './NewFlowForm';
import FlowFormTopRow from './FlowFormTopRow';
import styles from '../css-modules/FetchFlow.module.css';
import nfps from '../css-modules/NewFlowPage.module.css';

const NewFlowPage = () => {
    const newFlow = useSelector(state => state.newFlow);

    return (
        <div className={styles.formContainer}>
        <MDBContainer className={styles.formText}>
            <FlowFormTopRow />
            <div className={nfps.videoInfoContainer}>
            <h5 className={nfps.headerText + ' font-weight-bold'}>Video Preview</h5>
            <YouTube videoId={newFlow.id} />
            </div>
            <NewFlowForm />
        </MDBContainer>
        </div>
    )
}

export default NewFlowPage;