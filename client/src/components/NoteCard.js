import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { MDBCard, MDBCardBody, MDBContainer } from "mdbreact";
import PlayerContext from '../contexts/PlayerContext';
import { round } from '../utils/round';
import styles from '../css-modules/EditFlowPage.module.css';
import { updateNote, deleteNote } from '../store/notes';
import NoteCardContext from '../contexts/NoteCardContext';
import EditNoteForm from './EditNoteForm';
import DeleteNoteForm from './DeleteNoteForm';
import NoteCardBodyContent from './NoteCardBodyContent';

const NoteCard = (props) => {
    const { currentFlow, timestamp, player, pausedCard, setPausedCard, playing, setControllable, handlers: { deleteNoteFromFlow } } = useContext(PlayerContext);
    const [inactive, setInactive] = useState('inactiveCard');
    const [displayForm, setDisplayForm] = useState(false);
    const [noteContent, setNoteContent] = useState('');
    const [errors, setErrors] = useState({ errors: [] });
    const [deleteConf, setDeleteConf] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (round(timestamp, 1) === round(props.timestamp, 1)) {
            if (player && props.noteId !== pausedCard) {
                player.pauseVideo();
                setPausedCard(props.noteId);
                setInactive('activeCard');
            }
        }
    }, [timestamp, pausedCard, player, props.noteId, props.timestamp, setPausedCard, props.i]);

    useEffect(() => {
        if (pausedCard !== props.noteId) {
            setInactive('inactiveCard');
            setDisplayForm(false);
            setDeleteConf(false);
        }
    }, [pausedCard, playing, props.noteId]);

    useEffect(() => {
        setErrors({ errors: [] });
    }, [displayForm, noteContent])

    useEffect(() => {
        setNoteContent(props.content);
    }, [props.content]);

    const handleClick = () => {
        if (pausedCard === props.noteId) {
            return;
        }

        if (player) {
            if (round(player.getCurrentTime(), 1) !== props.timestamp) {
                player.seekTo(props.timestamp, true);
            }
            if (playing) {
                player.pauseVideo();
            }
            setPausedCard(props.noteId);
            setInactive('activeCard');
        }
    }

    const handleBtnClick = () => {
        if (inactive === 'activeCard') {
            setDisplayForm(true);
            setControllable(false);
        }
    }

    const handleFormCancel = () => {
        setNoteContent(props.content);
        setDisplayForm(false);
        setControllable(true);
    }

    const handleContentChange = (event) => {
        setNoteContent(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await dispatch(updateNote(props.noteId, noteContent));

        if (res.ok) {
            setNoteContent(res.data.note.content);
            setDisplayForm(false);
            return;
        }

        setErrors({ errors: res.data.error.errors });
    }

    const handleTrashClick = () => {
        setDeleteConf(true);
    }

    const handleDelCancel = () => {
        setDeleteConf(false);
    }

    const handleDeleteConfirmation = async () => {
        const res = await dispatch(deleteNote(props.noteId, currentFlow.id));
    }

    const value = {
        errors: errors.errors,
        handlers: {
            handleSubmit,
            handleFormCancel,
            handleContentChange,
            handleDeleteConfirmation,
            handleDelCancel,
            handleBtnClick,
            handleTrashClick
        },
        noteContent,
        myFlow: props.myFlow
    }

    return (
        <NoteCardContext.Provider value={value}>
        <MDBContainer id={`note-${props.i}`} className={inactive} onClick={handleClick}>
            <MDBCard className={styles.noteCard}>
                <MDBCardBody>
                    { displayForm ?
                    <EditNoteForm />:
                    <>
                    {
                        deleteConf ?
                        <DeleteNoteForm />
                        :
                        <>
                        <NoteCardBodyContent timestamp={props.timestamp}/>
                    </>
                    }
                     </>
                }
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
        </NoteCardContext.Provider>
    )
}

NoteCard.defaultProps = {

};

export default NoteCard;