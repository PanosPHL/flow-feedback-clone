import React, { useState, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../store/auth';
import { MDBBox, MDBInput, MDBBtn, MDBAlert } from 'mdbreact';
import styles from '../css-modules/SignUpForm.module.css';
import SignUpModalContext from '../contexts/SignUpModalContext';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({errors: []});
    const dispatch = useDispatch();
    const value = useContext(SignUpModalContext);

    useEffect(() => {
        return () => {
            setErrors([]);
        }
    }, [email, password, confirmPassword]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await dispatch(signUp(email, password, confirmPassword));

        if (res.ok) {
            value.toggleSignUpModal();
            return;
        }
        setErrors({errors: res.data.error.errors});
    };

    return (
        <MDBBox className={styles.signUpForm}>
                    <form onSubmit={handleSubmit}>
                        <p className='h2 text-center mb-4'>Sign Up</p>
                        {errors.errors && errors.errors.length > 0 ?
                        <MDBAlert color='danger'>
                            <ul className={styles.signUpErrors}>
                                {errors.errors.map((error, i) => <li key={`error-${i + 1}`}>{error.split(': ')[1]}</li>)}
                            </ul>
                        </MDBAlert>
                        : <></>
                    }
                        <div className='grey-text'>
                            <MDBInput onChange={(event) => setEmail(event.target.value)} size='lg' name='signup-email' id='signup-email' label='Email' icon='envelope' group type='email' value={email} />
                            <MDBInput onChange={(event) => setPassword(event.target.value)} size='lg' name='signup-password' id='signup-password' label='Password' icon='lock' group type='password' value={password} />
                            <MDBInput onChange={(event) => setConfirmPassword(event.target.value)} size='lg' name='signup-confirmPassword' id='signup-confirmPassword' label='Confirm password' icon='check-double' group type='password' value={confirmPassword} />
                        </div>
                        <MDBBtn size='lg' type='submit' className={styles.submitButton + ' btn amber darken-4'}>Submit</MDBBtn>
                    </form>
        </MDBBox>
        );
};

export default SignUp;