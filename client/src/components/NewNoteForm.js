import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../css-modules/EditFlowPage.module.css';
import PlayerContext from '../contexts/PlayerContext';
import { addNewNote } from '../store/notes';

const NewNoteForm = () => {
    const {id, timestamp, handlers: { toggleDisplayNoteForm } } = useContext(PlayerContext);
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await dispatch(addNewNote(content, timestamp, id));
        console.log(res);
        if (res.ok) {
            toggleDisplayNoteForm();
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.noteForm + ' hidden submit-note'}>
            <textarea onChange={handleContentChange} className={styles.textarea + ' form-control form-control-lg'} />
            <div className={styles.noteFormButtons}>
            <button type='submit' className='btn btn-primary btn-indigo btn-sm'>Submit</button>
            <button onClick={() => toggleDisplayNoteForm() }type='button' className='btn btn-blue-grey btn-sm'>Cancel</button>
            </div>
        </form>
    )
}

export default NewNoteForm;