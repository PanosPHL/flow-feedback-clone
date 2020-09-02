import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setVid } from '../store/flow';
import { MDBInput, MDBBtn, MDBAlert } from 'mdbreact';
import styles from '../css-modules/FetchFlowForm.module.css';

const FetchFlowForm = (props) => {
    const [url, setURL] = useState('');
    const [errors, setErrors] = useState({ errors: [] });
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            setErrors({ errors: [] });
        }
    }, [url]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await dispatch(setVid(url));

        if (res.ok) {
            props.history.push('/flow/new');
            return;
        }

        const { data: { error: { errors: resErrors } } } = res;

        setErrors({ errors: resErrors });
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h5 className='font-weight-bold'>Select video</h5>
            {errors.errors && errors.errors.length > 0 ?
                <MDBAlert color='danger'>
                    <ul className={styles.errors}>
                        {errors.errors.map((error, i) => <li key={`error-${i + 1}`}>{error.split(': ')[1]}</li>)}
                    </ul>
                </MDBAlert>
                : <></>
            }
            <MDBInput onChange={(event) => setURL(event.target.value)} icon='link' type='text' />
            <MDBBtn type='submit'>Preview</MDBBtn>
        </form>
        </>
    )
}

export default withRouter(FetchFlowForm);