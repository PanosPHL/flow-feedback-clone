import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSignUpModal } from '../store/ui/home';
import styles from '../css-modules/TopRowButtonsStyles.module.css';

const SignUpModalButton = () => {
    const dispatch = useDispatch();
    return (
        <button type='button' onClick={() => dispatch(toggleSignUpModal())} size='sm' className={styles.modalButton + ' btn btn-amber'}>Sign Up</button>
    )
}

export default SignUpModalButton;