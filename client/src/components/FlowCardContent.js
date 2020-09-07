import React, { useContext } from 'react';
import { MDBCardImage, MDBCardBody, MDBCardText, MDBCardTitle, MDBIcon  } from 'mdbreact';
import FlowCardContext from '../contexts/FlowCardContext';
import styles from '../css-modules/BrowseFlows.module.css';

const FlowCardContent = ({ thumbnail, name, catName, description, myFlow }) => {
    const { handlers: { handleTrashClick } } = useContext(FlowCardContext);

    return (
        <>
        <MDBCardImage className='img-fluid' src={thumbnail} waves />
                <MDBCardBody>
                    <MDBCardTitle style={{ fontSize: '16px', color: '#636363', marginBottom: '0.4em' }}>{name.split('').slice(0, 30).join('') + '...'}</MDBCardTitle>
                    <MDBCardText>
                        <span className={styles.innerText}>
                        <span>{catName}</span>
                        <span>{description}</span>
                        </span>
                    </MDBCardText>
                    {
                        myFlow ? <button type='button' className={styles.trashButton + ' btn btn-sm btn-light'} onClick={handleTrashClick}><MDBIcon icon='trash'/></button> : <></>
                    }
                </MDBCardBody>
                </>
    )
}

export default FlowCardContent;