import React from 'react';
import { MDBContainer, MDBModal } from 'mdbreact';
import SignUpModalContext from '../contexts/SignUpModalContext';
import SignUp from './SignUp';

const SignUpModal = () => {
    return (
        <SignUpModalContext.Consumer>
            {value => {
                const { signUpModal, toggleSignUpModal } = value;

                return (
                    <MDBContainer>
                    <MDBModal isOpen={signUpModal} toggle={toggleSignUpModal} centered>
                            <SignUp />
                    </MDBModal>
                    </MDBContainer>
                );
            }}
        </SignUpModalContext.Consumer>
    )
}

export default SignUpModal;