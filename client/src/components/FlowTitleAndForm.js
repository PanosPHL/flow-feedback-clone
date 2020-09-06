import React, { useContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PlayerContext from '../contexts/PlayerContext';
import { MDBIcon } from 'mdbreact';
import styles from '../css-modules/FlowTitleAndForm.module.css';
import { updateFlowName } from '../store/flows';

const FlowTitleAndForm = ({ flowName, id }) => {
    const { setControllable } = useContext(PlayerContext);
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setName(flowName)
    }, [flowName]);

    useEffect(() => {
        if (showForm) {
            setControllable(false);
        } else {
            setControllable(true);
        }
    }, [showForm, setControllable]);

    const handleEditClick = () => {
        setShowForm(true);
    }

    const handleCancelClick = () => {
        setShowForm(false);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const res = await dispatch(updateFlowName(id, name));
        console.log(res);
        if (res.ok) {
            setShowForm(false);
            setName(res.data.flow.name);
            return;
        }
    }

    return (
        <div className={styles.container}>
        { showForm ?
        <form className={styles.formContainer} onSubmit={handleFormSubmit}>
            <input type='text' onChange={handleNameChange} className={styles.input + ' form-control form-control-lg'} value={name}/>
            <div>
            <button type='submit' className='btn btn-amber'><MDBIcon icon='paper-plane' /></button>
            <button onClick={handleCancelClick} type='button' className='btn btn-blue-grey'><MDBIcon icon='times'/></button>
            </div>
        </form> :
        <>
            <h4 className={styles.textalign + ' font-weight-normal'}>{name || flowName}</h4>
            <button onClick={handleEditClick} type='button' className='btn btn-amber'><MDBIcon icon='edit'></MDBIcon></button>
            </>}
        </div>
    )
}

FlowTitleAndForm.defaultProps = {
    flowName: ''
}

export default FlowTitleAndForm;