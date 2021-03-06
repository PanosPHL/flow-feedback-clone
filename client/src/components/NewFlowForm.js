import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MDBBtn } from 'mdbreact';
import { addFlow } from '../store/flows';
import { setErrors, clearErrors } from '../store/errors';
import Errors from './Errors';
import styles from '../css-modules/NewFlowForm.module.css';
import nfps from '../css-modules/NewFlowPage.module.css';

const NewFlowForm = (props) => {
    const dispatch = useDispatch();
    const newFlow = useSelector(state => state.newFlow);
    const categories = useSelector(state => Object.values(state.entities.categories));
    const userId = useSelector(state => state.session.id);
    const errors = useSelector(state => state.errors);
    const [flowCat, setFlowCat] = useState(-1);
    const [flowTitle, setFlowTitle] = useState(newFlow.title);
    const [description, setDescription] = useState('');

    useEffect(() => {
        return () => {
            dispatch(clearErrors());
        }
    }, [dispatch, flowCat, flowTitle, description]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await dispatch(addFlow(flowTitle, description, userId, newFlow, flowCat));

        if (res.ok) {
            props.history.push(`/flow/${res.data.data.flow.id}`);
            return;
        }

        if (res.data.error.errors) {
            dispatch(setErrors(res.data.error.errors));
            return;
        }

        dispatch(setErrors([res.data.message]));
    }

    return (
        <div className={styles.flowFormContainer}>
        <h5 className={nfps.headerText + ' font-weight-bold'}>Flow Information</h5>
        <>
        { errors.length ?
        <Errors errors={errors} className={styles.errors} containerClass={styles.errorContainer}/>
        : <> </>}
        </>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
            <label htmlFor="newFlowTitle" className="grey-text">
                Title <span className={styles.requiredField}>*</span>
            </label>
            <input type="text" id="newFlowTitle" className={styles.input + " form-control"} value={flowTitle} onChange={(event) => setFlowTitle(event.target.value)}/>
            <label htmlFor="newFlowCategory" className="grey-text">
                Category <span className={styles.requiredField}>*</span>
            </label>
            <select onChange={(event) => setFlowCat(parseInt(event.target.value))} className={styles.input + ' browser-default custom-select'}>
                <option value='' defaultValue>Select the category</option>
                { categories.map((category, i) => {
                    return (
                    <option key={`category-${i + 1}`} value={category.id}>{category.name}</option>
                    )
                })}
            </select>
            </div>
            <div className={styles.description}>
            <label htmlFor="newFlowDescription" className="grey-text">
                Description
            </label>
            <textarea onChange={(event) => setDescription(event.target.value)} className={styles.textarea + ' form-control'} rows='4'></textarea>
            </div>
            <MDBBtn type='submit' className={styles.submitButton + ' btn btn-amber'}>Create New Flow</MDBBtn>
        </form>
        </div>
    )
}

export default withRouter(NewFlowForm);