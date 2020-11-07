import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSignUpModal } from '../store/ui/home';
import { MDBContainer, MDBModal } from 'mdbreact';
import SignUp from './SignUp';

const SignUpModal = () => {
    const dispatch = useDispatch();
    const { signUpModal } = useSelector(state => state.ui.home);

    const handleToggle = () => {
        dispatch(toggleSignUpModal());
    }

    return (
        <MDBContainer>
            <MDBModal isOpen={signUpModal} toggle={handleToggle} centered>
                <SignUp />
            </MDBModal>
        </MDBContainer>
    );
}

export default SignUpModal;