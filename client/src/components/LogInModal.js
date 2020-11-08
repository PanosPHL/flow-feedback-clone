import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLoginModal } from '../store/ui/home';
import { MDBContainer, MDBModal } from 'mdbreact';
import LogIn from './LogIn';

const LogInModal = () => {
    const dispatch = useDispatch();
    const { loginModal } = useSelector(state => state.ui.home);

    const handleToggle = () => {
        dispatch(toggleLoginModal());
    }
    return (
        <MDBContainer>
            <MDBModal isOpen={loginModal} toggle={handleToggle} centered>
                <LogIn />
            </MDBModal>
        </MDBContainer>
    )
}

export default LogInModal;