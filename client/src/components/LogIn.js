import React, { useState, useContext, useEffect } from 'react';
import { login } from '../store/auth';
import { useDispatch } from 'react-redux';
import { MDBInput, MDBBtn, MDBBox, MDBAlert } from 'mdbreact';
import styles from '../css-modules/LoginForm.module.css';
import LogInModalContext from '../contexts/LogInModalContext';

const LogIn = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const dispatch = useDispatch();
    const value = useContext(LogInModalContext);

    useEffect(() => {
        return () => {
            setError('')
        }
    }, [email, password]);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await dispatch(login(email, password));

        if (res.ok) {
            value.toggleLoginModal();
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
                            <MDBInput onChange={handleEmailChange} size='lg' name='login-email' id='login-email' label='Email' icon='envelope' group type='email' value={email} />
                            <MDBInput onChange={handlePasswordChange} size='lg' name='login-password' id='login-password' label='Password' icon='lock' group type='password' value={password} />
                        </div>
                        <MDBBtn type='submit' className={styles.submitButton + ' amber darken-4'} size='lg' >Submit</MDBBtn>
                    </form>
        </MDBBox>
    );
}

export default LogIn;