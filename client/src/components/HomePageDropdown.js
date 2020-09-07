import React from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import { Link } from 'react-router-dom';

const HomePageDropdown = () => {
    return (
        <MDBDropdown>
            <MDBDropdownToggle caret color='amber'>
                <MDBIcon icon='user' />
            </MDBDropdownToggle>
            <MDBDropdownMenu>
            <MDBDropdownItem>
                <Link to='/flow/fetch'>
                    Create Flow
                </Link>
                <Link to='/my-flows'>
                    My Flows
                </Link>
            </MDBDropdownItem>
            </MDBDropdownMenu>
        </MDBDropdown>
    )
}

export default HomePageDropdown;