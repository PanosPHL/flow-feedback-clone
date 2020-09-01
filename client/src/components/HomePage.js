import React from 'react'
import { useSelector } from 'react-redux';
import { MDBContainer, MDBBox, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdbreact';
import styles from '../css-modules/HomePage.module.css';
import LogIn from './LogIn';
import SignUp from './SignUp';

const HomePage = () => {
    const currentUser = useSelector(state => state.auth.id);
    return (
        <MDBContainer fluid className={styles.headerSplashContainer}>
            <div className={styles.imageFilter}>
            <MDBBox className={styles.headerSplash__contentBox}>
                <div className='headerTopRowContainer'>
                    <a className={styles.headerTopRow__homeLink} href='/'>
                        <img className={styles.flowNotesLogo} src='/images/flownotesLogo.png' alt='Marvel vs. Capcom cast'/>
                        <span className={styles.flowNotesText}>flowNotes</span>
                    </a>
                    <div className='headerTopRow__rightContainer'>
                        <MDBDropdown>
                            <MDBDropdownToggle caret className={styles.dropdownButton} color='amber darken-4'>
                                Login
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <LogIn />
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </div>
                </div>
            </MDBBox>
            </div>
        </MDBContainer>
    );
};

export default HomePage;