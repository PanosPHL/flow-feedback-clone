import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import PlayerContext from '../contexts/PlayerContext';
import FlowPlayerControls from './FlowPlayerControls';
import { round } from '../utils/round';
import NoteButton from './NoteButton';
import NewNoteForm from './NewNoteForm';
import styles from '../css-modules/EditFlowPage.module.css';

const FlowPlayer = () => {
    const id = Number(window.location.toString().split('/')[4]);
    const currentFlow = useSelector(state => {
        for (let flow of state.flows) {
            if (flow.id === id) {
                return flow;
            }
        }
    });
    const [playing, setPlaying] = useState(false);
    const [player, setPlayer] = useState(null);
    const [timestamp, setTimestamp] = useState(0);
    const [controllable, setControllable] = useState(true);
    const [displayNoteForm, setDisplayNoteForm] = useState(false);

    const handleKeyUp = (event) => {
        event.stopPropagation();
            if (!controllable) {
                return;
            }

            else if (event.code === 'ArrowLeft') {
                document.querySelector('#rewind').click();
            } else if (event.code === 'Space') {
                document.getElementById('play/pause').click();
            } else if (event.code === 'ArrowRight') {
                document.querySelector('#forward').click();
            }
    }

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keyup', handleKeyUp);
        }
    });

    const toggleControllable = () => {
        setControllable(!controllable);
    }

    const toggleDisplayNoteForm = () => {
        toggleControllable();
        setDisplayNoteForm(!displayNoteForm);
    }

    const opts = {
        height: 450,
        width: 800,
        playerVars: {
            controls: 0,
            disablekb: 1
        }
    }

    const onReady = (event) => {
        setPlayer(event.target);
    }

    const onPlay = () => {
        setPlaying(true);
    }

    const onPause = () => {
        setPlaying(false);
        setTimestamp(round(player.getCurrentTime(), 2));
    }

    const togglePlay = () => {
        if (playing) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    }

    const seek = (event) => {
        if (playing) {
            let time = player.getCurrentTime();

            if (event.target.id === 'rewind') {
                player.seekTo(time - 2);
            }

            if (event.target.id === 'forward') {
                player.seekTo(time + 2)
            }
        }
    }

    const value = {
        player,
        playing,
        controllable,
        handlers: {
            togglePlay,
            seek,
            toggleDisplayNoteForm
        },
        displayNoteForm,
        setDisplayNoteForm,
        timestamp,
        setControllable
    }

    return (
        <PlayerContext.Provider value={value}>
            <div id='formAndPlayerContainer' className={styles.formAndPlayerContainer}>
        <YouTube opts={opts} onPlay={onPlay} onPause={onPause} onReady={onReady} videoId={currentFlow.videoId}/>
        <NewNoteForm />
        <NoteButton />
        <FlowPlayerControls />
            </div>
        </PlayerContext.Provider>
    )
}

export default FlowPlayer;