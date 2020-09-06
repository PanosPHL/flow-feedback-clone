import React, { useContext } from 'react';
import { MDBCardImage, MDBCardBody, MDBCardText, MDBCardTitle, MDBIcon } from 'mdbreact';
import FlowCardContext from '../contexts/FlowCardContext';

const FlowCardContent = ({ thumbnail, name, catName, description }) => {
    const { handlers: { handleTrashClick } } = useContext(FlowCardContext);

    return (
        <>
        <MDBCardImage className='img-fluid' src={thumbnail} waves />
                <MDBCardBody>
                    <MDBCardTitle style={{ fontSize: '16px', color: '#636363' }}>{name.split(' ').slice(0, 9).join(' ') + '...'}</MDBCardTitle>
                    <MDBCardText>
                        <span>{catName}</span>
                        <span>{description}</span>
                    </MDBCardText>
                    <button type='button' className='btn btn-sm btn-light' onClick={handleTrashClick}><MDBIcon icon='trash'/></button>
                </MDBCardBody>
                </>
    )
}

export default FlowCardContent;