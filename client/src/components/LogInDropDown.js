import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle } from 'mdbreact';
import LogIn from './LogIn';
import styles from '../css-modules/HomePage.module.css';

const LogInDropdown = () => {
    return (
        <MDBDropdown>
            <MDBDropdownToggle caret className={styles.dropdownButton} color='amber darken-4'>
                Login
            </MDBDropdownToggle>
            <MDBDropdownMenu>
                <LogIn />
            </MDBDropdownMenu>
        </MDBDropdown>
    );
}

export default LogInDropdown;