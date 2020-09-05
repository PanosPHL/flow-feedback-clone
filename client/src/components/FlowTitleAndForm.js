import React, { useContext } from 'react';
import PlayerContext from '../contexts/PlayerContext';
import { MDBIcon } from 'mdbreact';
import styles from '../css-modules/FlowTitleAndForm.module.css';

const FlowTitleAndForm = () => {
    const { currentFlow } = useContext(PlayerContext);
    return (
        <div className={styles.container}>
        <h3 className={styles.textalign}>{currentFlow.name}</h3>
            <button type='button' className='btn btn-amber'><MDBIcon icon='edit'></MDBIcon></button>
        </div>
    )
}

export default FlowTitleAndForm;