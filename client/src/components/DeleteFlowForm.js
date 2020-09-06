import React, { useContext } from 'react';
import { MDBIcon } from 'mdbreact';
import FlowCardContext from '../contexts/FlowCardContext';

const DeleteFlowForm = () => {
    const { handlers: { handleDelClick }} = useContext(FlowCardContext);
    return (
        <div>
            <div>
                <h4>Are you sure you want to delete this flow?</h4>
                <button onClick={handleDelClick} type='button' className='btn btn-sm btn-green'><MDBIcon icon='check' /></button>
                <button type='button' className='btn btn-sm btn-red'><MDBIcon icon='times' /></button>
            </div>
        </div>
    )
}

export default DeleteFlowForm;