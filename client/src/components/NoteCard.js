import React, { useContext, useEffect } from 'react';
import { timestampToStr } from '../utils/timestamps';
import { MDBCard, MDBCardBody, MDBCardText, MDBContainer, MDBIcon, MDBCardFooter } from "mdbreact";
import PlayerContext from '../contexts/PlayerContext';
import { round } from '../utils/round';

const NoteCard = (props) => {
    const {timestamp, player} = useContext(PlayerContext);

    useEffect(() => {
        if (round(timestamp, 2) === round(props.timestamp, 2)) {
            if (player) {
                player.pauseVideo();
            }
        }
    }, [timestamp])

    return (
        <MDBContainer>
            <MDBCard>
                <MDBCardBody>
                    <MDBCardText>
                        {props.content}
                    </MDBCardText>
                    <MDBCardFooter>
                        {timestampToStr(Number(props.timestamp))}
                    </MDBCardFooter>
                    <button type='button' className='btn'>Button</button>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    )
}

export default NoteCard;