import React from 'react';
import SignUpModalContext from '../contexts/SignUpModalContext';

const SignUpModalButton = () => {
    return (
        <SignUpModalContext.Consumer>
            {value => {
                const { toggleSignUpModal } = value;
                return (
                    <button type='button' onClick={toggleSignUpModal} size='sm' className='btn btn-amber'>Sign Up</button>
                )
            }}
        </SignUpModalContext.Consumer>
    )
}

export default SignUpModalButton;