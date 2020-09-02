import React from 'react';
import { Link } from 'react-router-dom';

const BaseFlowButton = () => {
    return (
        <>
        <button type='button' className={'loggedInButton btn btn-outline-amber darken-4'}>Create Flow</button>
        </>
    );
};

const CreateFlowButton = () => {
    return (
        <Link to='/flow/fetch'><BaseFlowButton /></Link>
    )
}

export default CreateFlowButton;