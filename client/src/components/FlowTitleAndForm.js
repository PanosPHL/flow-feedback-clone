import React, { useContext, useState, useEffect } from 'react';
import PlayerContext from '../contexts/PlayerContext';
import { MDBIcon } from 'mdbreact';
import styles from '../css-modules/FlowTitleAndForm.module.css';

const FlowTitleAndForm = ({ flowName }) => {
    const { setControllable } = useContext(PlayerContext);
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');

    useEffect(() => {
        if (showForm) {
            setControllable(false);
        } else {
            setControllable(true);
        }
    }, [showForm]);

    useEffect(() => {
        setName(flowName);
    }, [flowName]);

    const handleEditClick = () => {
        setShowForm(true);
    }

    const handleCancelClick = () => {
        setShowForm(false);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    return (
        <div className={styles.container}>
        { showForm ?
        <form className={styles.formContainer}>
            <input type='text' onChange={handleNameChange} className='form-control form-control-lg' value={name}/>
            <button type='submit' className='btn btn-amber'><MDBIcon icon='paper-plane' /></button>
            <button onClick={handleCancelClick} type='button' className='btn btn-blue-grey'><MDBIcon icon='times'/></button>
        </form> :
        <>
            <h3 className={styles.textalign}>{flowName}</h3>
            <button onClick={handleEditClick} type='button' className='btn btn-amber'><MDBIcon icon='edit'></MDBIcon></button>
            </>}
        </div>
    )
}

FlowTitleAndForm.defaultProps = {

}

export default FlowTitleAndForm;