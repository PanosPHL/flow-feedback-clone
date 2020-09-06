import React, { useContext } from 'react';
import { MDBIcon } from 'mdbreact';
import NoteCardContext from '../contexts/NoteCardContext';
import styles from '../css-modules/EditFlowPage.module.css';

const DeleteNoteForm = () => {
    const { handlers: { handleDeleteConfirmation, handleDelCancel } } = useContext(NoteCardContext);
    return (
        <div>
            <h5>Are you sure you want to delete this note?</h5>
            <div className={styles.deleteButtonsContainer}>
                <button onClick={handleDeleteConfirmation} className='btn btn-green btn-sm'><MDBIcon icon='check' /></button>
                <button onClick={handleDelCancel} className='btn btn-red btn-sm'><MDBIcon icon='times' /></button>
            </div>
        </div>
    )
}

export default DeleteNoteForm;