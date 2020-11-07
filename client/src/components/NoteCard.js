import React, { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { MDBCard, MDBCardBody, MDBContainer } from "mdbreact";
import PlayerContext from '../contexts/PlayerContext';
import { round } from '../utils/round';
import styles from '../css-modules/EditFlowPage.module.css';
import { updateNote, deleteNote } from '../store/notes';
import { toggleEditNoteForm } from '../store/ui/flow';
import { setPausedCard } from '../store/session';
import NoteCardContext from '../contexts/NoteCardContext';
import EditNoteForm from './EditNoteForm';
import DeleteNoteForm from './DeleteNoteForm';
import NoteCardBodyContent from './NoteCardBodyContent';

const NoteCard = (props) => {
    const dispatch = useDispatch();
    const { currentFlow, timestamp, player, playing, setControllable, handlers: { deleteNoteFromFlow } } = useContext(PlayerContext);
    const { editNoteForm } = useSelector(state => state.ui.flow);
    const { pausedCard } = useSelector(state => state.session);
    const [displayForm, setDisplayForm] = useState(false);
    const [inactive, setInactive] = useState('inactiveCard');
    const [noteContent, setNoteContent] = useState('');
    const [errors, setErrors] = useState({ errors: [] });
    const [deleteConf, setDeleteConf] = useState(false);

    useEffect(() => {
        if (round(timestamp, 1) === round(props.timestamp, 1)) {
            if (player && props.noteId !== pausedCard) {
                player.pauseVideo();
                dispatch(setPausedCard(props.noteId));
                setInactive('activeCard');
            }
        }
    }, [timestamp, pausedCard, player, props.noteId, props.timestamp, setPausedCard, props.i]);

    useEffect(() => {
        if (pausedCard !== props.noteId) {
            setInactive('inactiveCard');
            setDisplayForm(false);
            setDeleteConf(false);
        } else {
            setInactive('activeCard');
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
            dispatch(setPausedCard(props.noteId));
            setInactive('activeCard');
        }
    }

    const handleBtnClick = () => {
        if (inactive === 'activeCard') {
            dispatch(setPausedCard(props.noteId));
            dispatch(toggleEditNoteForm());
        }
    }

    const handleFormCancel = () => {
        setNoteContent(props.content);
        dispatch(toggleEditNoteForm());
    }

    const handleContentChange = (event) => {
        setNoteContent(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await dispatch(updateNote(props.noteId, noteContent));

        if (res.ok) {
            setNoteContent(res.data.note.content);
            dispatch(toggleEditNoteForm());
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
                    { editNoteForm && pausedCard === props.noteId ?
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