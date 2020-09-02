import React from 'react';
import { MDBBox } from 'mdbreact';
import FetchFlowTopRow from './FetchFlowTopRow';
import FetchFlowForm from './FetchFlowForm';

const FetchFlow = () => {
    return (
        <>
        <MDBBox>
            <FetchFlowTopRow />
            <FetchFlowForm />
        </MDBBox>
        </>
    )
}

export default FetchFlow;