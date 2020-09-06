import React, { useContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../css-modules/EditFlowPage.module.css';
import PlayerContext from '../contexts/PlayerContext';
import { addNewNote } from '../store/notes';
import { MDBAlert } from 'mdbreact';

const NewNoteForm = () => {
    const {id, timestamp, handlers: { toggleDisplayNoteForm, addNoteToFlow } } = useContext(PlayerContext);
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState({ errors: []});
    const dispatch = useDispatch();

    useEffect(() => {
        setErrors({ errors: []});
    }, [content, toggleDisplayNoteForm])

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await dispatch(addNewNote(content, timestamp, id));
        if (res.ok) {
            toggleDisplayNoteForm();
            addNoteToFlow(res.data.note);
            setContent('');
            return;
        }

        setErrors({errors: res.data.error.errors});
    };

    const handleCancelClick = () => {
        setContent('');
        toggleDisplayNoteForm();
    }

    return (
        <form onSubmit={handleSubmit} className={styles.noteForm + ' hidden submit-note'}>
            { errors.errors.length ?
        <MDBAlert color='danger' className={styles.newNoteErrors}>
        <ul>
            {errors.errors.map((error, i) => {
                return (
                <li key={`error${i + 1}`}>{error.split(': ')[1]}</li>
                )
            })}
        </ul>
        </MDBAlert>
        : <></>}
        <textarea onChange={handleContentChange} className={styles.textarea + ' form-control form-control-sm'} rows={errors.errors.length ? '2.9' : '4'} value={content}/>
            <div className={styles.noteFormButtons}>
            <button type='submit' className='btn btn-primary btn-indigo btn-sm'>Submit</button>
            <button onClick={handleCancelClick} type='button' className='btn btn-blue-grey btn-sm'>Cancel</button>
            </div>
        </form>
    )
}

export default NewNoteForm;