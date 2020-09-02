import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MDBBtn } from 'mdbreact';
import { addFlow } from '../store/flows';

const NewFlowForm = () => {
    const newFlow = useSelector(state => state.newFlow);
    const categories = useSelector(state => state.categories);
    const userId = useSelector(state => state.auth.id);
    const dispatch = useDispatch();
    const [flowCat, setFlowCat] = useState(-1);
    const [flowTitle, setFlowTitle] = useState(newFlow.title);
    const [description, setDescription] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await dispatch(addFlow(flowTitle, description, userId, newFlow, flowCat));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="newFlowTitle" className="grey-text">
                Title <span>*</span>
            </label>
            <input type="text" id="newFlowTitle" className="form-control" value={flowTitle} onChange={(event) => setFlowTitle(event.target.value)}/>
            <label htmlFor="newFlowCategory" className="grey-text">
                Category <span>*</span>
            </label>
            <div style={{backgroundImage: `url(${categories[0].cover})`}}></div>
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
    )
}

export default NewFlowForm;