import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/auth';
import Cookies from 'js-cookie';

const LogOut = () => {
    const dispatch = useDispatch();

    const handleClick = async (event) => {
        const res = await dispatch(logout());

        if (res.ok) {
            Cookies.remove('token');
        }
    }

    return (
        <button onClick={handleClick} type='button' className={'loggedInButton btn btn-amber darken-4'}>Logout</button>
    );
}

export default LogOut;