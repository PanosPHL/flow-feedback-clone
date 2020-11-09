import React, { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { MDBCard, MDBCardBody, MDBContainer } from "mdbreact";
import { round } from '../utils/round';
import { setPausedCard } from '../store/session';
import { updateNote, deleteNote } from '../store/notes';
import { setErrors, clearErrors } from '../store/errors';
import { toggleEditNoteForm, toggleDeleteConfirmation } from '../store/ui/flow';
import NoteCardContext from '../contexts/NoteCardContext';
import EditNoteForm from './EditNoteForm';
import DeleteNoteForm from './DeleteNoteForm';
import NoteCardBodyContent from './NoteCardBodyContent';
import PlayerContext from '../contexts/PlayerContext';
import styles from '../css-modules/EditFlowPage.module.css';

const NoteCard = (props) => {
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors);
    const { currentFlow, timestamp, player, playing } = useContext(PlayerContext);
    const { editNoteForm, deleteNote: displayDelete } = useSelector(state => state.ui.flow);
    const { pausedCard } = useSelector(state => state.session);
    const [inactive, setInactive] = useState('inactiveCard');
    const [noteContent, setNoteContent] = useState('');

    useEffect(() => {
        if (round(timestamp, 1) === round(props.timestamp, 1)) {
            if (player && props.noteId !== pausedCard) {
                dispatch(setPausedCard(props.noteId));
                player.pauseVideo();
                setInactive('activeCard');

                if (props.i >= 5 && props.length >= 5) {
                    document.querySelector('.noteCardContainer').scroll({
                        top: Number(props.i) * 100,
                        behavior: "smooth"
                    });
                } else if (props.i < 5 && props.length >= 5) {
                    document.querySelector('.noteCardContainer').scroll({
                        top: -1 * Number(props.i) * 100,
                        behavior: "smooth"
                    })
                }
            }
        }
    }, [timestamp, pausedCard, player, props.noteId, props.timestamp, props.i, props.length, dispatch]);

    useEffect(() => {
        if (pausedCard !== props.noteId) {
            setInactive('inactiveCard');
            if (editNoteForm) {
                dispatch(toggleEditNoteForm());
            }
            if (displayDelete) {
                dispatch(toggleDeleteConfirmation());
            }
        } else {
            setInactive('activeCard');
        }
    }, [dispatch, pausedCard, playing, props.noteId]);

    useEffect(() => {
        dispatch(clearErrors())
    }, [dispatch, editNoteForm, noteContent])

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
            if (editNoteForm) {
                dispatch(toggleEditNoteForm());
            }
            if (displayDelete) {
                dispatch(toggleDeleteConfirmation());
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
        console.log(res);
        if (res.ok) {
            setNoteContent(res.data.note.content);
            dispatch(toggleEditNoteForm());
            return;
        }

        dispatch(setErrors(res.data.error.errors))
    }

    const handleTrashClick = () => {
        dispatch(toggleDeleteConfirmation());
    }

    const handleDelCancel = () => {
        dispatch(toggleDeleteConfirmation());
    }

    const handleDeleteConfirmation = async () => {
        const res = await dispatch(deleteNote(props.noteId, currentFlow.id));

        if (res.ok) {
            dispatch(setPausedCard(null));
        }
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
                        displayDelete && pausedCard === props.noteId ?
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