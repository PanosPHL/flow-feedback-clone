import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleLoginModal } from '../store/ui/home';
import styles from '../css-modules/TopRowButtonsStyles.module.css';

const LogInModalButton = () => {
    const dispatch = useDispatch();
    return (
        <button type='button' onClick={() => dispatch(toggleLoginModal())} size='sm' className={styles.modalButton + ' btn btn-amber'}>Login</button>
    )
}

export default LogInModalButton;