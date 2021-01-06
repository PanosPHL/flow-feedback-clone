import React, { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPausedCard } from '../store/session';
import { toggleNewNoteForm } from '../store/ui/flow';
import { addNewNote } from '../store/notes';
import { setErrors, clearErrors } from '../store/errors';
import Errors from './Errors';
import PlayerContext from '../contexts/PlayerContext';
import styles from '../css-modules/EditFlowPage.module.css';

const NewNoteForm = () => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);
  const { newNoteForm } = useSelector((state) => state.ui.flow);
  const {
    id,
    timestamp,
    handlers: { toggleDisplayNoteForm },
  } = useContext(PlayerContext);
  const [content, setContent] = useState('');

  useEffect(() => {
    return () => {
      dispatch(clearErrors());
    };
  }, [dispatch, content, newNoteForm, toggleDisplayNoteForm]);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await dispatch(addNewNote(content, timestamp, id));
    if (res.ok) {
      dispatch(setPausedCard(res.data.note.id));
      dispatch(toggleNewNoteForm());
      setContent('');
      return;
    }

    dispatch(setErrors(res.data.error.errors));
  };

  const handleCancelClick = () => {
    setContent('');
    dispatch(toggleNewNoteForm());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={
        styles.noteForm + ' submit-note' + (newNoteForm ? '' : ' hidden')
      }
    >
      {errors.length ? (
        <Errors
          errors={errors}
          className={styles.newNoteErrorList}
          containerClass={styles.newNoteErrors}
        />
      ) : (
        <></>
      )}
      <textarea
        onChange={handleContentChange}
        className={styles.textarea + ' form-control form-control-sm'}
        rows={errors.length ? '2' : '4'}
        value={content}
      />
      <div className={styles.noteFormButtons}>
        <button type="submit" className="btn btn-primary btn-indigo btn-sm">
          Submit
        </button>
        <button
          onClick={handleCancelClick}
          type="button"
          className="btn btn-blue-grey btn-sm"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NewNoteForm;
