import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import PlayerContext from '../contexts/PlayerContext';
import FlowPlayerControls from './FlowPlayerControls';
import NoteButton from './NoteButton';
import NewNoteForm from './NewNoteForm';
import styles from '../css-modules/EditFlowPage.module.css';
import NoteCard from './NoteCard';
import { MDBIcon } from 'mdbreact';
import FlowTitleAndForm from './FlowTitleAndForm';

const EditFlowPage = () => {
    const id = Number(window.location.toString().split('/')[4]);
    const userId = useSelector(state => state.auth.id);

    const [currentFlow, setCurrentFlow] = useState({});
    const [playing, setPlaying] = useState(false);
    const [player, setPlayer] = useState(null);
    const [timestamp, setTimestamp] = useState(0);
    const [controllable, setControllable] = useState(true);
    const [pausedCard, setPausedCard] = useState(-1);

    const sortNotes = (a, b) => {
        const timeA = parseFloat(a.timestamp);
        const timeB = parseFloat(b.timestamp);

        let comparison = 0;
        if (timeA > timeB) {
            comparison = 1;
        } else if (timeA < timeB) {
            comparison = -1;
        }
        return comparison;
    }

    const handleKeyUp = (event) => {
        event.stopPropagation();
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
            console.log(id);
            const res = await fetch(`/api/flows/${id}`);
            res.data = await res.json();
            console.log(res);

            if (res.ok) {
                setCurrentFlow(res.data.flow);
            }
        }

            fetchCurrentFlow();
    }, [id]);

    useEffect(() => {
        if (currentFlow.Notes) {
            currentFlow.Notes.sort(sortNotes);
        }
    }, [currentFlow]);

    const addNoteToFlow = (note) => {
        const newState = Object.assign({}, currentFlow);
        newState.Notes.push(note);
        newState.Notes.sort(sortNotes);
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
        height: 562.5,
        width: 1000,
        playerVars: {
            controls: 0,
            disablekb: 1,
            autoplay: 1
        }
    }

    let setTimestampInterval;

    const onReady = (event) => {
        setPlayer(event.target);
    }

    const onPlay = () => {
        setPlaying(true);
        setTimestampInterval = setInterval(() => {
            setTimestamp(player.getCurrentTime(), 2);
        }, 50);
        setTimeout(() => {
            setPausedCard(-1);
        }, 100);
    }

    const onPause = () => {
        setPlaying(false);
        setTimestamp(player.getCurrentTime(), 2);
        clearInterval(setTimestampInterval);
    }

    const togglePlay = () => {
        if (!controllable) {
            return;
        }

        if (playing) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    }

    const seek = (event) => {
        if (!controllable) {
            return;
        }

        if (playing) {
            let time = player.getCurrentTime();

            if (event.target.id === 'rewind') {
                player.seekTo(time - 2);
            }

            if (event.target.id === 'forward') {
                player.seekTo(time + 2)
            }

            setPausedCard(-1);
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
        setControllable,
        pausedCard,
        setPausedCard,
        currentFlow
    }

    return (
        <PlayerContext.Provider value={value}>
            <div className={styles.pageContainer}>
            <div id='formAndPlayerContainer' className={styles.formAndPlayerContainer}>
            <FlowTitleAndForm />
                <YouTube opts={opts} onPlay={onPlay} onPause={onPause} onReady={onReady} videoId={currentFlow.videoId} />
                <div className={styles.buttonContainer}>
                { currentFlow.userId === userId ?
                <>
                <NewNoteForm />
                <NoteButton />
                </> :
                <div>
                </div>}
                <FlowPlayerControls />
                </div>
            </div>
            <div className={styles.noteCardContainer}>
                {currentFlow.Notes ?
                    currentFlow.Notes.map((note, i) => {
                        return (
                            <NoteCard key={`note-${i + 1}`} content={note.content} timestamp={note.timestamp} noteId={note.id} i={i + 1}/>
                        )
                    }) : <> </>}
            </div>
            </div>
        </PlayerContext.Provider>
    )
}

export default EditFlowPage;