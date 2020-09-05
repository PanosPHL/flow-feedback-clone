import React, { useContext, useEffect, useState } from 'react';
import { timestampToStr } from '../utils/timestamps';
import { MDBCard, MDBCardBody, MDBCardText, MDBContainer, MDBIcon, MDBCardHeader } from "mdbreact";
import PlayerContext from '../contexts/PlayerContext';
import { round } from '../utils/round';
import styles from '../css-modules/EditFlowPage.module.css';

const NoteCard = (props) => {
    const { timestamp, player, pausedCard, setPausedCard, playing } = useContext(PlayerContext);
    const [inactive, setInactive] = useState('inactiveCard');

    useEffect(() => {
        if (round(timestamp, 1) === round(props.timestamp, 1)) {
            if (player && props.noteId !== pausedCard) {
                player.pauseVideo();
                setPausedCard(props.noteId);
                setInactive('activeCard');
            }
        }
    }, [timestamp]);

    useEffect(() => {
        if (pausedCard !== props.noteId) {
            setInactive('inactiveCard');
        }
    }, [pausedCard, playing]);

    const handleClick = () => {
        if (player) {
            player.seekTo(props.timestamp, true);
            player.pauseVideo();
            setPausedCard(props.noteId);
            setInactive('activeCard');
        }
    }

    return (
        <MDBContainer id={`note-${props.i}`} className={inactive + " " + styles.noteCard} onClick={handleClick}>
            <MDBCard>
                <MDBCardBody>
                    <MDBCardText>
                        <div className={styles.textDiv}>
                        <span>{timestampToStr(props.timestamp)} </span>
                        <span>{props.content}</span>
                        </div>
                    </MDBCardText>
                    <div className={styles.buttonDiv}>
                    <button type='button' className='btn btn-sm btn-blue-grey'>Edit Note</button>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    )
}

export default NoteCard;