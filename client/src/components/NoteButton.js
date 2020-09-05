import React, { useContext } from 'react';
import { MDBIcon } from 'mdbreact';
import PlayerContext from '../contexts/PlayerContext';

const NoteButton = () => {
    const { handlers: { toggleDisplayNoteForm }, playing } = useContext(PlayerContext);

    const handleClick = () => {
        if (playing) {
            document.getElementById('play/pause').click();
        }
        toggleDisplayNoteForm();
    }

    return (
        <button onClick={handleClick} className='btn btn-amber'><MDBIcon icon='comment' /></button>
    )
}

export default NoteButton;