import React, { useContext, useEffect } from 'react';
import { timestampToStr } from '../utils/timestamps';
import { MDBCard, MDBCardBody, MDBCardText, MDBContainer, MDBIcon, MDBCardHeader } from "mdbreact";
import PlayerContext from '../contexts/PlayerContext';
import { round } from '../utils/round';

const NoteCard = (props) => {
    const {timestamp, player, pausedCard, setPausedCard} = useContext(PlayerContext);

    useEffect(() => {
        if (round(timestamp, 1) === round(props.timestamp, 1)) {
            if (player && pausedCard !== props.noteId) {
                player.pauseVideo();
                setPausedCard(props.noteId);
            }
        }
    }, [timestamp, pausedCard, player, props.noteId, props.timestamp, setPausedCard])

    return (
        <MDBContainer>
            <MDBCard>
                <MDBCardBody>
                    <MDBCardText>
                        <h6>{timestampToStr(props.timestamp)}</h6>
                        <span>{props.content}</span>
                    </MDBCardText>
                    <button type='button' className='btn'>Button</button>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    )
}

export default NoteCard;