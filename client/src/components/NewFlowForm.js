import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MDBBtn, MDBAlert } from 'mdbreact';
import { addFlow } from '../store/flows';

const NewFlowForm = (props) => {
    const newFlow = useSelector(state => state.newFlow);
    const categories = useSelector(state => state.categories);
    const userId = useSelector(state => state.auth.id);
    const dispatch = useDispatch();
    const [flowCat, setFlowCat] = useState(-1);
    const [flowTitle, setFlowTitle] = useState(newFlow.title);
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({errors: []});

    useEffect(() => {
        return () => {
            setErrors({ errors: [] })
        }
    }, [flowCat, flowTitle, description]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await dispatch(addFlow(flowTitle, description, userId, newFlow, flowCat));

        if (res.ok) {
            props.history.push(`/flow/${res.data.flow.id}`);
            return;
        }

        setErrors({ errors: res.data.error.errors });
    }

    return (
        <>
        <>
        { errors.errors.length ?
        <MDBAlert color='danger'>
        <ul>
            {errors.errors.map((error, i) => {
                return (
                        <li>{error}</li>
                )
            })}
        </ul>
        </MDBAlert>
        : <> </>}
        </>
        <h3>Flow Information</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="newFlowTitle" className="grey-text">
                Title <span>*</span>
            </label>
            <input type="text" id="newFlowTitle" className="form-control" value={flowTitle} onChange={(event) => setFlowTitle(event.target.value)}/>
            <label htmlFor="newFlowCategory" className="grey-text">
                Category <span>*</span>
            </label>
            <select onChange={(event) => setFlowCat(parseInt(event.target.value))} className='browser-default custom-select'>
                <option value='' defaultValue>Select the category</option>
                { categories.map((category, i) => {
                    return (
                    <option key={`category-${i + 1}`} value={category.id}>{category.name}</option>
                    )
                })}
            </select>
            <label htmlFor="newFlowDescription" className="grey-text">
                Description
            </label>
            <textarea onChange={(event) => setDescription(event.target.value)} className='form-control'></textarea>
            <MDBBtn type='submit' className='btn btn-amber darken-4'>Create New Flow</MDBBtn>
        </form>
        </>
    )
}

export default withRouter(NewFlowForm);