import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../store/auth';
import { MDBBox, MDBInput, MDBBtn } from 'mdbreact';
import styles from '../css-modules/SignUpForm.module.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(signUp(email, password, confirmPassword))
    };

    return (
        <MDBBox className={styles.signUpForm}>
                    <form onSubmit={handleSubmit}>
                        <p className='h5 text-center mb-4'>Sign Up</p>
                        <div className='grey-text'>
                            <MDBInput onChange={(event) => setEmail(event.target.value)} size='sm' name='signup-email' id='signup-email' label='Email' icon='envelope' group type='email' value={email} />
                            <MDBInput onChange={(event) => setPassword(event.target.value)} size='sm' name='signup-password' id='signup-password' label='Password' icon='lock' group type='password' value={password} />
                            <MDBInput onChange={(event) => setConfirmPassword(event.target.value)} size='sm' name='signup-confirmPassword' id='signup-confirmPassword' label='Confirm password' icon='check-double' group type='password' value={confirmPassword} />
                        </div>
                        <MDBBtn size='sm' type='submit' className={styles.submitButton + ' btn amber darken-4'}>Submit</MDBBtn>
                    </form>
        </MDBBox>
        );
};

export default SignUp;