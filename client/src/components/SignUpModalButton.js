import React from 'react';
import styles from '../css-modules/TopRowButtonsStyles.module.css';
import SignUpModalContext from '../contexts/SignUpModalContext';

const SignUpModalButton = () => {
    return (
        <SignUpModalContext.Consumer>
            {value => {
                const { toggleSignUpModal } = value;
                return (
                    <button type='button' onClick={toggleSignUpModal} size='sm' className={styles.modalButton + ' btn btn-amber'}>Sign Up</button>
                )
            }}
        </SignUpModalContext.Consumer>
    )
}

export default SignUpModalButton;