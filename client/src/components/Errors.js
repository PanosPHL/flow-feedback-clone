import React from 'react';
import { MDBAlert } from 'mdbreact';

const Errors = ({ errors, className, containerClass }) => {
    return (
        <MDBAlert className={containerClass || ''} color='danger'>
            <ul className={className}>
                {errors.map((error, i) => <li key={`error-${i + 1}`}>{error.includes(':') ? error.split(': ')[1] : error}</li>)}
            </ul>
        </MDBAlert>
    )
}

export default Errors;