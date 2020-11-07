import React, { useContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleControllable } from '../store/ui/flow';
import PlayerContext from '../contexts/PlayerContext';
import { MDBIcon, MDBAlert } from 'mdbreact';
import styles from '../css-modules/FlowTitleAndForm.module.css';
import { updateFlowName } from '../store/flows';

const FlowTitleAndForm = ({ flowName, id }) => {
    const dispatch = useDispatch();
    const { myFlow } = useContext(PlayerContext);
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({ errors: [] });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        setName(flowName)
    }, [flowName]);

    useEffect(() => {
        dispatch(toggleControllable());
    }, [showForm]);

    useEffect(() => {
        setErrors({ errors: [] });
    }, [showForm, name])

    const handleEditClick = () => {
        setShowForm(true);
    }

    const handleCancelClick = () => {
        setShowForm(false);
        setName(flowName);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const res = await dispatch(updateFlowName(id, name));

        if (res.ok) {
            setShowForm(false);
            setName(res.data.flow.name);
            setSubmitted(true);
            return;
        }

        setErrors({ errors: res.data.error.errors });
    }

    return (
        <>
        <div className={styles.container}>
        { showForm ?
        <form className={styles.formContainer} onSubmit={handleFormSubmit}>
            <input type='text' onChange={handleNameChange} className={styles.input + ' form-control form-control-lg'} value={name}/>
            <div>
            <button type='submit' className='btn btn-amber'><MDBIcon icon='paper-plane' /></button>
            <button onClick={handleCancelClick} type='button' className='btn btn-blue-grey'><MDBIcon icon='times'/></button>
            </div>
        </form>
        :
        <>
            <h4 className={styles.textalign + ' font-weight-normal'}>{submitted ? name : flowName}</h4>
            {
                myFlow ? <button onClick={handleEditClick} type='button' className='btn btn-amber'><MDBIcon icon='edit'></MDBIcon></button> : <></>
            }
            </>}
        </div>
        { errors.errors.length ?
            <MDBAlert color='danger' className={styles.errors}>
                <ul>
                    {errors.errors.map((error, i) => {
                        return (
                            <li key={`error-${i + 1}`}>{error.split(': ')[1]}</li>
                        )
                    })}
                </ul>
            </MDBAlert>
            :
            <> </>}
        </>
    )
}

FlowTitleAndForm.defaultProps = {
    flowName: ''
}

export default FlowTitleAndForm;