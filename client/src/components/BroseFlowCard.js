import React from 'react';
import { MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';

const BrowseFlowCard = ({ i, thumbnail, name, catName, description }) => {
    return (
        <MDBCol style={
            { width: '20em',
            gridColumn: i < 4 ? `${i + 1} / ${i + 2}` : `${(i % 4) + 1} / ${(i % 4) + 2}`,
            gridRow: `${(i % 4) + 1} / ${(i % 4) + 2}` }
            }>
            <MDBCard>
                <MDBCardImage className='img-fluid' src={thumbnail} waves />
                <MDBCardBody>
                    <MDBCardTitle style={{ fontSize: '18px', color: '#636363' }}>{name.split(' ').slice(0, 9).join(' ') + '...'}</MDBCardTitle>
                    <MDBCardText>
                        <span>{catName}</span>
                        <span>{description}</span>
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default BrowseFlowCard;