import React, { useContext } from 'react';
import PlayerContext from '../contexts/PlayerContext';
import { MDBIcon } from 'mdbreact';
import styles from '../css-modules/FlowPlayer.module.css';

const FlowPlayerControls = () => {
    const value = useContext(PlayerContext);

    const { togglePlay, seek } = value.handlers;

    window.addEventListener('keydown', event => {
        if (event.code === 'ArrowLeft') {
            document.querySelector('#rewind').click();
        } else if (event.code === 'Space') {
            document.getElementById('play/pause').click();
        } else if (event.code === 'ArrowRight') {
            document.querySelector('#forward').click();
        }
    });

    return (
        <div className='btn-group' role='group' aria-label='playbackButtonGroup'>
            <button id='rewind' className={styles.playbackButtons + ' btn btn-light'} onClick={seek}><MDBIcon icon='backward' className='grey-text' /></button>
            <button id='play/pause' className={styles.playbackButtons + ' btn btn-light'} onClick={togglePlay}>{ value.playing ? <MDBIcon className='grey-text' icon='pause' /> : <MDBIcon className='grey-text' icon='play'/>}</button>
            <button id='forward' className={styles.playbackButtons + ' btn btn-light'} onClick={seek}><MDBIcon icon='forward' className='grey-text' /></button>
        </div>
    )
}

export default FlowPlayerControls;