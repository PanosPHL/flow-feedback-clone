import React from 'react';
import { MDBContainer, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter } from 'mdbreact';
import LogIn from './LogIn';
import LogInModalContext from '../contexts/LogInModalContext';

const LogInModal = () => {
    return (
        <LogInModalContext.Consumer>
            {value => {
                const { loginModal, toggleLoginModal } = value;

                return (
                <MDBContainer>
                <MDBModal isOpen={loginModal} toggle={toggleLoginModal}>
                        <LogIn />
                </MDBModal>
                </MDBContainer>
                );
            }}
        </LogInModalContext.Consumer>
    )
}

export default LogInModal;