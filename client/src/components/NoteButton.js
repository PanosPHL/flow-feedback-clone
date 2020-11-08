import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { MDBIcon } from 'mdbreact';
import PlayerContext from '../contexts/PlayerContext';
import { toggleNewNoteForm } from '../store/ui/flow';

const NoteButton = () => {
    const dispatch = useDispatch();
    const { playing } = useContext(PlayerContext);

    const handleClick = () => {
        if (playing) {
            document.getElementById('play/pause').click();
        }
        dispatch(toggleNewNoteForm());
    }

    return (
        <button onClick={handleClick} className='btn btn-amber'><MDBIcon icon='comment' /></button>
    )
}

export default NoteButton;