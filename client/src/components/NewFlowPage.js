import React from 'react';
import { useSelector } from 'react-redux';
import { MDBContainer } from 'mdbreact';
import YouTube from 'react-youtube';
import NewFlowForm from './NewFlowForm';
import FlowFormTopRow from './FlowFormTopRow';

const NewFlowPage = () => {
    const newFlow = useSelector(state => state.newFlow);

    return (
        <MDBContainer>
            <FlowFormTopRow />
            <YouTube videoId={newFlow.id} />
            <NewFlowForm />
        </MDBContainer>
    )
}

export default NewFlowPage;