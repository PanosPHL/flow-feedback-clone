import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setVid } from '../store/flow';
import { MDBInput, MDBBtn, MDBAlert } from 'mdbreact';
import styles from '../css-modules/FetchFlowForm.module.css';

const FetchFlowForm = () => {
    const [url, setURL] = useState('');
    const [errors, setErrors] = useState({ errors: [] });
    const [success, setSuccess] = useState(false);
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
            setSuccess(true);
            return;
        }

        const { data: { error: { errors: resErrors } } } = res;

        setErrors({ errors: resErrors });
    }

    return (
        <>
        { success ? <Redirect to='/flow/new' /> : <> </>}
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

export default FetchFlowForm;