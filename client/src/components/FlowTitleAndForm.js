import React, { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTitleForm } from '../store/ui/flow';
import PlayerContext from '../contexts/PlayerContext';
import { MDBIcon, MDBAlert } from 'mdbreact';
import styles from '../css-modules/FlowTitleAndForm.module.css';
import { updateFlowName } from '../store/flows';

const FlowTitleAndForm = ({ flowName, id }) => {
    const dispatch = useDispatch();
    const { myFlow } = useContext(PlayerContext);
    const { titleForm } = useSelector(state => state.ui.flow);
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({ errors: [] });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        setName(flowName)
    }, [flowName]);

    useEffect(() => {
        setErrors({ errors: [] });
    }, [titleForm, name])

    const handleEditClick = () => {
        dispatch(toggleTitleForm())
    }

    const handleCancelClick = () => {
        dispatch(toggleTitleForm());
        setName(flowName);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const res = await dispatch(updateFlowName(id, name));

        if (res.ok) {
            dispatch(toggleTitleForm());
            setName(res.data.flow.name);
            setSubmitted(true);
            return;
        }

        setErrors({ errors: res.data.error.errors });
    }

    return (
        <>
        <div className={styles.container}>
        { titleForm ?
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