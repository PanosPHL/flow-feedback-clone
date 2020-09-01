import React, { useState } from 'react';
import { login } from '../store/auth';
import { useDispatch } from 'react-redux';
import { MDBInput, MDBBtn, MDBBox } from 'mdbreact';
import styles from '../css-modules/LoginForm.module.css';

const LogIn = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login(email, password));
    }

    return (
        <MDBBox className={styles.loginForm}>
                    <form onSubmit={handleSubmit}>
                        <p className='h5 text-center mb-4'>Log In</p>
                        <div className='grey-text'>
                            <MDBInput onChange={(event) => setEmail(event.target.value)} size='sm' name='login-email' id='login-email' label='Email' icon='envelope' group type='email' value={email} />
                            <MDBInput onChange={(event) => setPassword(event.target.value)} size='sm' name='login-password' id='login-password' label='Password' icon='lock' group type='password' value={password} />
                        </div>
                        <MDBBtn type='submit' size='sm' className={styles.submitButton + ' amber darken-4'}>Submit</MDBBtn>
                    </form>
        </MDBBox>
    );
}

export default LogIn;