import React, { useState } from 'react';
import { timestampToStr } from '../utils/timestamps';
import { MDBCard, MDBCardBody, MDBCardText, MDBContainer, MDBIcon } from "mdbreact";

const NoteCard = (props) => {
    return (
        <MDBContainer>
            <MDBCard>
                <MDBCardBody>
                    <MDBCardText>
                        {props.content}
                    </MDBCardText>
                    <button type='button' className='btn'>Button</button>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    )
}

export default NoteCard;