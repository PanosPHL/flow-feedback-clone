import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MDBIcon } from 'mdbreact';
import PlayerContext from '../contexts/PlayerContext';
import { toggleNewNoteForm } from '../store/ui/flow';
import styles from '../css-modules/EditFlowPage.module.css';

const NoteButton = () => {
  const dispatch = useDispatch();
  const { pausedCard } = useSelector((state) => state.session);
  const { playing } = useContext(PlayerContext);

  const handleClick = () => {
    if (pausedCard) {
      return;
    }

    if (playing) {
      document.getElementById('play/pause').click();
    }

    dispatch(toggleNewNoteForm());
  };

  return (
    <button
      onClick={handleClick}
      className={styles.noteButton + ' btn btn-amber'}
    >
      <MDBIcon icon="comment" />
    </button>
  );
};

export default NoteButton;
