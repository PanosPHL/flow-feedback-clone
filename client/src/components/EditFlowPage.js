import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPausedCard } from '../store/session';
import { toggleNewNoteForm, toggleEditNoteForm } from '../store/ui/flow';
import YouTube from 'react-youtube';
import PlayerContext from '../contexts/PlayerContext';
import FlowPlayerControls from './FlowPlayerControls';
import NoteButton from './NoteButton';
import NewNoteForm from './NewNoteForm';
import styles from '../css-modules/EditFlowPage.module.css';
import NoteCard from './NoteCard';
import FlowTitleAndForm from './FlowTitleAndForm';
import SideNavComponent from './SideNavComponent';
import { withRouter } from 'react-router-dom';

const EditFlowPage = (props) => {
    const dispatch = useDispatch();
    const id = Number(window.location.toString().split('/')[4]);
    const userId = useSelector(state => state.session.id);
    const currentFlow = useSelector(state => state.entities.flows[id]);
    const myFlow = useSelector(state => currentFlow.userId === state.session.id);
    const notes = useSelector(state => currentFlow.notes ? Object.values(state.entities.notes).filter((note) => currentFlow.notes.includes(note.id)).sort(sortNotes) : []);
    const pausedCard = useSelector(state => state.session);
    const { newNoteForm, editNoteForm } = useSelector(state => state.ui.flow);
    const [playing, setPlaying] = useState(false);
    const [player, setPlayer] = useState(null);
    const [timestamp, setTimestamp] = useState(0);

    function sortNotes (a, b) {
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
        console.log(event);
        event.stopPropagation();
        if (newNoteForm || editNoteForm) {
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
            dispatch(setPausedCard(null));
            clearInterval(setTimestampInterval);
        }
    }, []);

    const toggleDisplayNoteForm = () => {
        dispatch(toggleNewNoteForm());
    }

    const opts = {
        height: 630,
        width: 1120,
        playerVars: {
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
            dispatch(setPausedCard(null));
        }, 100);
    }

    const onPause = () => {
        setPlaying(false);
        setTimestamp(player.getCurrentTime(), 2);
        clearInterval(setTimestampInterval);
    }

    const togglePlay = () => {
        if (newNoteForm || editNoteForm) {
            return;
        }

        if (playing) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    }

    const seek = (event) => {
        if (newNoteForm || editNoteForm) {
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

            dispatch(setPausedCard(null));
        }
    }

    const value = {
        id,
        player,
        playing,
        handlers: {
            togglePlay,
            seek,
            toggleDisplayNoteForm,
        },
        timestamp,
        pausedCard,
        setPausedCard,
        currentFlow,
        myFlow
    }

    return (
        <>
        <SideNavComponent />
        <PlayerContext.Provider value={value}>
            <div className={styles.pageContainer}>
            <div id='formAndPlayerContainer' className={styles.formAndPlayerContainer}>
            <FlowTitleAndForm flowName={currentFlow.name} id={currentFlow.id}/>
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
            <div className='noteCardContainer'>
                <h5 className={styles.noteContainerHeader + ' font-weight-bold'}>Notes</h5>
                {notes && notes.length ?
                    notes.map((note, i) => {
                        return (
                            <NoteCard key={`note-${i + 1}`} content={note.content} timestamp={note.timestamp} noteId={note.id} i={i + 1} myFlow={userId === currentFlow.userId}/>
                        )
                    }) : <> </>}
            </div>
            </div>
        </PlayerContext.Provider>
        </>
    )
}

export default withRouter(EditFlowPage);