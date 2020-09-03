import React from 'react';
import styles from '../css-modules/EditFlowPage.module.css';

const NewNoteForm = () => {
    return (
        <form>
            <textarea className={styles.noteForm + ' form-control'} />
        </form>
    )
}

export default NewNoteForm;