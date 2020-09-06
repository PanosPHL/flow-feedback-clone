import React, { useContext } from 'react';
import NoteCardContext from '../contexts/NoteCardContext';
import styles from '../css-modules/EditFlowPage.module.css';
import { MDBAlert } from 'mdbreact';

const EditNoteForm = () => {
    const { errors, noteContent, handlers: { handleSubmit, handleFormCancel, handleContentChange } } = useContext(NoteCardContext);

    return (
    <div>
        {errors.length ?
            <MDBAlert color='danger' className={styles.editNoteErrors}>
                <ul>
                    {errors.map((error, i) => <li key={`error-${i + 1}`}>{error.split(': ')[1]}</li>)}
                </ul>
            </MDBAlert> :
            <></>}
        <form className={styles.editNoteForm} onSubmit={handleSubmit}>
            <textarea style={errors.length ? { padding: '0.6em' } : {}} className='form-control form-control-sm' value={noteContent} onChange={handleContentChange} rows={errors.length ? '2.8' : '4.0'} />
            <div className={styles.formButtons}>
                <button type='submit' className='btn btn-sm btn-indigo'>Submit</button>
                <button onClick={handleFormCancel} type='button' className='btn btn-sm btn-blue-grey'>Cancel</button>
            </div>
        </form>
    </div>
    )
}

export default EditNoteForm;