import React from 'react';
import { MDBBox } from 'mdbreact';
import FlowFormTopRow from './FlowFormTopRow';
import FetchFlowForm from './FetchFlowForm';

const FetchFlow = () => {
    return (
        <>
        <MDBBox>
            <FlowFormTopRow />
            <FetchFlowForm />
        </MDBBox>
        </>
    )
}

export default FetchFlow;