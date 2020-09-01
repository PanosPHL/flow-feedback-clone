import React from 'react';
import LogInModalContext from '../contexts/LogInModalContext';

const LogInModalButton = () => {
    return (
        <LogInModalContext.Consumer>
            {value => {
                const { toggleLoginModal } = value;
                return (
                    <button type='button' onClick={toggleLoginModal} size='sm' className='btn btn-amber'>Login</button>
                )
            }}
        </LogInModalContext.Consumer>
    )
}

export default LogInModalButton;