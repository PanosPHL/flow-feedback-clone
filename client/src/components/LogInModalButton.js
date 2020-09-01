import React from 'react';
import styles from '../css-modules/TopRowButtonsStyles.module.css';
import LogInModalContext from '../contexts/LogInModalContext';

const LogInModalButton = () => {
    return (
        <LogInModalContext.Consumer>
            {value => {
                const { toggleLoginModal } = value;
                return (
                    <button type='button' onClick={toggleLoginModal} size='sm' className={styles.modalButton + ' btn btn-amber'}>Login</button>
                )
            }}
        </LogInModalContext.Consumer>
    )
}

export default LogInModalButton;