import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from '../store/auth';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

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
        <MDBContainer>
            <MDBRow>
                <MDBCol md='4'>
                    <form onSubmit={handleSubmit} className='signup-form'>
                        <p className='h5 text-center mb-4'>Sign Up</p>
                        <div className='grey-text'>
                            <MDBInput onChange={(event) => setEmail(event.target.value)} name='signup-email' id='signup-email' label='Type your email' icon='envelope' group type='email' value={email} />
                            <MDBInput onChange={(event) => setPassword(event.target.value)} name='signup-password' id='signup-password' label='Type your password' icon='lock' group type='password' value={password} />
                            <MDBInput onChange={(event) => setConfirmPassword(event.target.value)} name='signup-confirmPassword' id='signup-confirmPassword' label='Type your password again' icon='check-double' group type='password' value={confirmPassword} />
                        </div>
                        <MDBBtn type='submit' className='btn amber darken-4'>Submit</MDBBtn>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        );
};

export default SignUp;