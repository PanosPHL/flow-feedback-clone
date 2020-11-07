import React, { useState, useEffect } from 'react';
import { login } from '../store/auth';
import { toggleLoginModal } from '../store/ui/home';
import { useDispatch } from 'react-redux';
import { MDBInput, MDBBtn, MDBBox, MDBAlert } from 'mdbreact';
import styles from '../css-modules/LoginForm.module.css';

const LogIn = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            setError('')
        }
    }, [email, password]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await dispatch(login(email, password));

        if (res.ok) {
            dispatch(toggleLoginModal());
            return;
        }

        setError(res.data.message);
    }

    return (
        <MDBBox>
                    <form onSubmit={handleSubmit} className={styles.loginForm}>
                        <p className={styles.loginHeader + ' h2 text-center mb-3'}>Log In</p>
                        {error ? <MDBAlert className={styles.errorContainer} color='danger'>{error}</MDBAlert> : <></>}
                        <div className='grey-text'>
                            <MDBInput onChange={(event) => setEmail(event.target.value)} size='lg' name='login-email' id='login-email' label='Email' icon='envelope' group type='email' value={email} />
                            <MDBInput onChange={(event) => setPassword(event.target.value)} size='lg' name='login-password' id='login-password' label='Password' icon='lock' group type='password' value={password} />
                        </div>
                        <MDBBtn type='submit' className={styles.submitButton + ' amber darken-4'} size='lg' >Submit</MDBBtn>
                    </form>
        </MDBBox>
    );
}

export default LogIn;