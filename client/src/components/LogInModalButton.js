import React from 'react';
import LogInModalContext from '../contexts/LogInModalContext';

const LogInModalButton = () => {
    return (
        <LogInModalContext.Consumer>
            {value => {
                return (
                    <button type='button' onClick={value}>Hi Mom!</button>
                )
            }}
        </LogInModalContext.Consumer>
    )
}

export default LogInModalButton;