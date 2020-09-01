import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle } from 'mdbreact';
import SignUp from './SignUp';
import styles from '../css-modules/HomePage.module.css';

const SignUpDropDown = () => {
    return (
            <MDBDropdown>
                <MDBDropdownToggle caret className={styles.dropdownButton} color='amber darken-4'>
                    Sign Up
                            </MDBDropdownToggle>
                <MDBDropdownMenu>
                    <SignUp />
                </MDBDropdownMenu>
            </MDBDropdown>
    );
}

export default SignUpDropDown;