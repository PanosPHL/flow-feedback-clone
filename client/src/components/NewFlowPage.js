import React from 'react';
import { useSelector } from 'react-redux';
import { MDBContainer } from 'mdbreact';
import YouTube from 'react-youtube';
import NewFlowForm from './NewFlowForm';
import FlowFormTopRow from './FlowFormTopRow';
import styles from '../css-modules/FetchFlow.module.css'

const NewFlowPage = () => {
    const newFlow = useSelector(state => state.newFlow);

    return (
        <div className={styles.formContainer}>
        <MDBContainer className={styles.formText}>
            <FlowFormTopRow />
            <h3>Video Preview</h3>
            <YouTube videoId={newFlow.id} />
            <NewFlowForm />
        </MDBContainer>
        </div>
    )
}

export default NewFlowPage;