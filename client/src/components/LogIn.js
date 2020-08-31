import React, { useState } from 'react';
import { login } from '../store/auth';
import { useSelector, useDispatch } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const LogIn = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const currentUserId = useSelector(state => state.auth.id);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login(email, password));
    }

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md='4'>
                    <form onSubmit={handleSubmit} className='login-form'>
                        <p className='h5 text-center mb-4'>Log In</p>
                        <div className='grey-text'>
                            <MDBInput onChange={(event) => setEmail(event.target.value)} name='login-email' id='login-email' label='Type your email' icon='envelope' group type='email' value={email} />
                            <MDBInput onChange={(event) => setPassword(event.target.value)} name='login-password' id='login-password' label='Type your password' icon='lock' group type='password' value={password} />
                        </div>
                        <MDBBtn type='submit' className='btn amber darken-4'>Submit</MDBBtn>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default LogIn;