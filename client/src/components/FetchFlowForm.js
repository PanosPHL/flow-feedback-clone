import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setVid } from '../store/newFlow';
import { setErrors, clearErrors } from '../store/errors';
import { MDBBtn, MDBInputGroup } from 'mdbreact';
import Errors from './Errors';
import styles from '../css-modules/FetchFlowForm.module.css';

const FetchFlowForm = (props) => {
    const [url, setURL] = useState('');
    const errors = useSelector(state => state.errors);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(clearErrors());
        }
    }, [dispatch, url]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await dispatch(setVid(url));

        if (res.ok) {
            props.history.push('/flow/new');
            return;
        }

        const { data: { error: { errors: resErrors } } } = res;

        dispatch(setErrors(resErrors));
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            {errors.length ?
                <Errors errors={errors} containerClass={styles.errorContainer} className={styles.errors} />
                : <></>
            }
            <MDBInputGroup
            className='amber-border'
            hint="i.e. https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            append={
            <MDBBtn className='rounded-right btn-amber m-0 px-3 py-2 z-depth-0' type='submit'>Preview</MDBBtn>
            }
            onChange={(event) => setURL(event.target.value)}/>
        </form>
        </>
    )
}

export default withRouter(FetchFlowForm);