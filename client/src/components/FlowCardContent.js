import React, { useContext } from 'react';
import { MDBCardImage, MDBCardBody, MDBCardText, MDBCardTitle, MDBIcon } from 'mdbreact';
import FlowCardContext from '../contexts/FlowCardContext';
import styles from '../css-modules/BrowseFlows.module.css';

const FlowCardContent = ({ thumbnail, name, catName, description, myFlow, owner }) => {
    const { handlers: { handleTrashClick } } = useContext(FlowCardContext);

    return (
        <>
            <MDBCardImage className='img-fluid' src={thumbnail} waves />
            <MDBCardBody>
                <MDBCardTitle style={{ fontSize: '16px', color: '#636363' }}>{name.split('').slice(0, 32).join('') + '...'}</MDBCardTitle>
                <MDBCardText>
                    <span className={styles.innerText}>
                        <span style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                            <span>{catName}</span>
                            {
                                myFlow ? <></> :
                                    <span>{owner}</span>
                            }
                        </span>
                        <span style={{ marginTop: '1.4em' }}>{description}</span>
                    </span>
                </MDBCardText>
                {
                    myFlow ? <button type='button' className={styles.trashButton + ' btn btn-sm btn-light'} onClick={handleTrashClick}><MDBIcon icon='trash' /></button> : <></>
                }
            </MDBCardBody>
        </>
    )
}

export default FlowCardContent;