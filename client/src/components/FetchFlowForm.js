import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setVid } from '../store/flow';
import { MDBInput, MDBBtn } from 'mdbreact';

const PLACEHOLDER_KEY = 'key';

const FetchFlowForm = () => {
    const [url, setURL] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(setVid(url));
    }

    return (
        <form onSubmit={handleSubmit}>
            <h5 className='font-weight-bold'>Select video</h5>
            <MDBInput onChange={(event) => setURL(event.target.value)} icon='link' type='text' />
            <MDBBtn type='submit'>Preview</MDBBtn>
        </form>
    )
}

export default FetchFlowForm;