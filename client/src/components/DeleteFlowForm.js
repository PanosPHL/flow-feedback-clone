import React, { useContext } from 'react';
import { MDBIcon } from 'mdbreact';
import FlowCardContext from '../contexts/FlowCardContext';

const DeleteFlowForm = () => {
    const { handlers: { handleTrashClick } } = useContext(FlowCardContext);

    return (
        <div>
            <div>
                <button><MDBIcon icon='check' /></button>
                <button><MDBIcon icon='times' /></button>
            </div>
        </div>
    )
}

export default DeleteFlowForm;