import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setVid } from '../store/newFlow';
import { MDBInput, MDBBtn, MDBAlert, MDBInputGroup } from 'mdbreact';
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
            {errors.errors && errors.errors.length > 0 ?
                <MDBAlert className={styles.errorContainer} color='danger'>
                    <ul className={styles.errors}>
                        {errors.errors.map((error, i) => <li key={`error-${i + 1}`}>{error.split(': ')[1]}</li>)}
                    </ul>
                </MDBAlert>
                : <></>
            }
            <MDBInputGroup
            className='amber-border'
            hint="i.e. https://www.youtube.com/watch?v=Za8oRc_z9Y0"
            append={
            <MDBBtn className='rounded-right btn-amber m-0 px-3 py-2 z-depth-0' type='submit'>Preview</MDBBtn>
            }
            onChange={(event) => setURL(event.target.value)}/>
        </form>
        </>
    )
}

export default withRouter(FetchFlowForm);