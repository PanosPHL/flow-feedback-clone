import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import Errors from './Errors';
import NoteCardContext from '../contexts/NoteCardContext';
import styles from '../css-modules/EditFlowPage.module.css';

const EditNoteForm = () => {
    const errors = useSelector(state => state.errors);
    const { noteContent, handlers: { handleSubmit, handleFormCancel, handleContentChange } } = useContext(NoteCardContext);

    return (
    <div className={styles.editFormBody}>
        {errors.length ?
            <Errors errors={errors} className={styles.editNoteErrors}/>
            : <></>}
        <form className={styles.editNoteForm} onSubmit={handleSubmit}>
            <textarea className={styles.textarea + ' form-control form-control-sm'} value={noteContent} onChange={handleContentChange} rows={errors.length ? '2.8' : '4.0'} />
            <div className={styles.formButtons}>
                <button type='submit' className='btn btn-sm btn-indigo'>Submit</button>
                <button onClick={handleFormCancel} type='button' className='btn btn-sm btn-blue-grey'>Cancel</button>
            </div>
        </form>
    </div>
    )
}

export default EditNoteForm;