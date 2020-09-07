import React, { useContext } from 'react';
import { MDBIcon } from 'mdbreact';
import FlowCardContext from '../contexts/FlowCardContext';
import styles from '../css-modules/DeleteFlowForm.module.css';

const DeleteFlowForm = () => {
    const { handlers: { handleDelClick, handleCancelClick }} = useContext(FlowCardContext);
    return (
            <div className={styles.formContainer}>
                <h5>Are you sure you want to delete this flow?</h5>
                <div className={styles.buttonContainer}>
                <button onClick={handleDelClick} type='button' className='btn btn-sm btn-green'><MDBIcon icon='check' /></button>
                <button onClick={handleCancelClick} type='button' className='btn btn-sm btn-red'><MDBIcon icon='times' /></button>
                </div>
            </div>
    )
}

export default DeleteFlowForm;