import React, { useState, useContext } from 'react';
import { login } from '../store/auth';
import { useDispatch } from 'react-redux';
import { MDBInput, MDBBtn, MDBBox } from 'mdbreact';
import styles from '../css-modules/LoginForm.module.css';
import LogInModalContext from '../contexts/LogInModalContext';

const LogIn = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const dispatch = useDispatch();
    const value = useContext(LogInModalContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await dispatch(login(email, password));

        if (res.ok) {
            value.toggleLoginModal();
        }
    }

    return (
        <MDBBox>
                    <form onSubmit={handleSubmit} className={styles.loginForm}>
                        <p className='h2 text-center mb-4'>Log In</p>
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