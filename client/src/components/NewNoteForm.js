import React, { useContext } from 'react';
import styles from '../css-modules/EditFlowPage.module.css';
import PlayerContext from '../contexts/PlayerContext';

const NewNoteForm = () => {
    const { displayNoteForm, timestamp, handlers: { toggleDisplayNoteForm } } = useContext(PlayerContext);

    if (!displayNoteForm) {
        return (
            <></>
        )
    }

    return (
        <form className={styles.noteForm}>
            <textarea className={styles.textarea + ' form-control form-control-lg'} />
            <div className={styles.noteFormButtons}>
            <button type='submit' className='btn btn-primary btn-indigo btn-sm'>Submit</button>
            <button onClick={() => toggleDisplayNoteForm() }type='button' className='btn btn-blue-grey btn-sm'>Cancel</button>
            </div>
        </form>
    )
}

export default NewNoteForm;