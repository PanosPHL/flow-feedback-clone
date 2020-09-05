import React, { useContext, useEffect, useState } from 'react';
import { timestampToStr } from '../utils/timestamps';
import { MDBCard, MDBCardBody, MDBCardText, MDBContainer } from "mdbreact";
import PlayerContext from '../contexts/PlayerContext';
import { round } from '../utils/round';
import styles from '../css-modules/EditFlowPage.module.css';

const NoteCard = (props) => {
    const { timestamp, player, pausedCard, setPausedCard, playing } = useContext(PlayerContext);
    const [inactive, setInactive] = useState('inactiveCard');
    const [displayForm, setDisplayForm] = useState(false);
    const [noteContent, setNoteContent] = useState(props.content);

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
        }
    }, [pausedCard, playing, props.noteId]);

    const handleClick = () => {
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
        }
    }

    const handleFormCancel = () => {
        setNoteContent(props.content);
        setDisplayForm(false);
    }

    return (
        <MDBContainer id={`note-${props.i}`} className={inactive + " " + styles.noteCard} onClick={handleClick}>
            <MDBCard>
                <MDBCardBody>
                    { displayForm ?
                    <div>
                        <form>
                            <textarea className='form-control form-control-sm' value={noteContent}/>
                            <button type='button' className='btn btn-sm btn-indigo'>Submit</button>
                            <button onClick={handleFormCancel} type='button' className='btn btn-sm btn-blue-grey'>Cancel</button>
                        </form>
                    </div> :
                    <>
                    <MDBCardText>
                        <span className={styles.textDiv}>
                        <span>{timestampToStr(props.timestamp)} </span>
                        <span>{props.content}</span>
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