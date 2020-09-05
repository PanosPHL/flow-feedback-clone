import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { timestampToStr } from '../utils/timestamps';
import { MDBCard, MDBCardBody, MDBCardText, MDBContainer, MDBAlert } from "mdbreact";
import PlayerContext from '../contexts/PlayerContext';
import { round } from '../utils/round';
import styles from '../css-modules/EditFlowPage.module.css';
import { updateNote } from '../store/notes';

const NoteCard = (props) => {
    const { timestamp, player, pausedCard, setPausedCard, playing, setControllable } = useContext(PlayerContext);
    const [inactive, setInactive] = useState('inactiveCard');
    const [displayForm, setDisplayForm] = useState(false);
    const [noteContent, setNoteContent] = useState(props.content);
    const [errors, setErrors] = useState({ errors: [] });
    const dispatch = useDispatch();

    useEffect(() => {
        if (round(timestamp, 1) === round(props.timestamp, 1)) {
            if (player && props.noteId !== pausedCard) {
                console.log(props.timestamp, timestamp);
                console.log(props.noteId, pausedCard);
                player.pauseVideo();
                setPausedCard(props.noteId);
                setInactive('activeCard');
            }
        }
    }, [timestamp, pausedCard, player, props.noteId, props.timestamp, setPausedCard]);

    useEffect(() => {
        if (pausedCard !== props.noteId) {
            setInactive('inactiveCard');
            setDisplayForm(false);
            setControllable(true);
        }
    }, [pausedCard, playing, props.noteId]);

    useEffect(() => {
        setErrors({ errors: [] });
    }, [displayForm, noteContent])

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
        console.log(props.noteId, noteContent);
        event.preventDefault();
        const res = await dispatch(updateNote(props.noteId, noteContent));

        if (res.ok) {
            setNoteContent(res.data.note.content);
            setDisplayForm(false);
            return;
        }

        setErrors({ errors: res.data.error.errors });
    }

    return (
        <MDBContainer id={`note-${props.i}`} className={inactive + " " + styles.noteCard} onClick={handleClick}>
            <MDBCard>
                <MDBCardBody>
                    { displayForm ?
                    <div>
                        {errors.errors.length ?
                        <MDBAlert color='danger'>
                            <ul>
                                {errors.errors.map((error, i) => <li key={`error-${i + 1}`}>{error.split(': ')[1]}</li>)}
                            </ul>
                        </MDBAlert> :
                        <></>}
                        <form onSubmit={handleSubmit}>
                            <textarea className='form-control form-control-sm' value={noteContent} onChange={handleContentChange}/>
                            <button type='submit' className='btn btn-sm btn-indigo'>Submit</button>
                            <button onClick={handleFormCancel} type='button' className='btn btn-sm btn-blue-grey'>Cancel</button>
                        </form>
                    </div> :
                    <>
                    <MDBCardText>
                        <span className={styles.textDiv}>
                        <span>{timestampToStr(props.timestamp)} </span>
                        <span>{noteContent}</span>
                        </span>
                    </MDBCardText>
                    <div className={styles.buttonDiv}>
                    <button onClick={handleBtnClick} type='button' className='btn btn-sm btn-blue-grey'>Edit Note</button>
                    </div>
                    </>
                }
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    )
}

export default NoteCard;