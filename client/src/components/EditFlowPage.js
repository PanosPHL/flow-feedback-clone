import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import PlayerContext from '../contexts/PlayerContext';
import FlowPlayerControls from './FlowPlayerControls';
import { round } from '../utils/round';
import NoteButton from './NoteButton';
import NewNoteForm from './NewNoteForm';
import styles from '../css-modules/EditFlowPage.module.css';
import NoteCard from './NoteCard';

const EditFlowPage = () => {
    const id = Number(window.location.toString().split('/')[4]);

    const [currentFlow, setCurrentFlow] = useState({});
    const [playing, setPlaying] = useState(false);
    const [player, setPlayer] = useState(null);
    const [timestamp, setTimestamp] = useState(0);
    const [controllable, setControllable] = useState(true);

    const handleKeyUp = (event) => {
        event.stopPropagation();
        console.log(controllable);
            if (!controllable) {
                return;
            }

            else if (event.code === 'ArrowLeft') {
                document.querySelector('#rewind').click();
            } else if (event.code === 'Space') {
                console.log('hit el')
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

    useEffect(() => {
        const fetchCurrentFlow = async () => {
            const res = await fetch(`/api/flows/${id}`);
            res.data = await res.json();
            console.log(res);

            if (res.ok) {
                setCurrentFlow(res.data.flow);
            }
        }

            fetchCurrentFlow();
    }, []);

    const addNoteToFlow = (note) => {
        const newState = Object.assign({}, currentFlow);
        newState.Notes.push(note);
        setCurrentFlow(newState);
    }

    const toggleControllable = () => {
        setControllable(!controllable);
    }

    const toggleDisplayNoteForm = () => {
        toggleControllable();
        document.querySelector('.submit-note').classList.toggle('hidden');
    }

    const opts = {
        height: 450,
        width: 800,
        playerVars: {
            disablekb: 1
        }
    }

    let setTimestampInterval;

    const onReady = (event) => {
        setPlayer(event.target);
    }

    const onPlay = () => {
        setPlaying(true);
        setTimestampInterval = setInterval(() => {
            setTimestamp(round(player.getCurrentTime(), 2));
        }, 50);
    }

    const onPause = () => {
        setPlaying(false);
        setTimestamp(round(player.getCurrentTime(), 2));
        clearInterval(setTimestampInterval);
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
        id,
        player,
        playing,
        controllable,
        handlers: {
            togglePlay,
            seek,
            toggleDisplayNoteForm,
            addNoteToFlow
        },
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
            <div className='notes-container'>
            {currentFlow.Notes ?
            currentFlow.Notes.map((note, i) => {
                return (
                    <NoteCard key={`note-${i + 1}`} content={note.content} timestamp={note.timestamp}/>
                )
            }) : <> </>}
        </div>
        </PlayerContext.Provider>
    )
}

export default EditFlowPage;