import React from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';
import styles from '../css-modules/HomePageDropdown.module.css';

const HomePageDropdown = () => {
    return (
        <MDBDropdown>
            <MDBDropdownToggle caret color='amber' className={styles.dropdown}>
                <MDBIcon icon='user' />
            </MDBDropdownToggle>
            <MDBDropdownMenu>
                <Link to='/flow/fetch'>
            <MDBDropdownItem>
                Create Flow
            </MDBDropdownItem>
                </Link>
                <Link to='/my-flows'>
                    <MDBDropdownItem>
                    My Flows
                    </MDBDropdownItem>
                </Link>
            </MDBDropdownMenu>
        </MDBDropdown>
    )
}

export default HomePageDropdown;