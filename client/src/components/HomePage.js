import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { MDBContainer, MDBBox } from 'mdbreact';
import styles from '../css-modules/HomePage.module.css';
import LogInModalContext from '../contexts/LogInModalContext';
import LogInDropDown from './LogInDropDown';
import SignUpDropDown from './SignUpDropDown';
import LogInModalButton from './LogInModalButton';

const HomePage = () => {
    const [loginModal, setLoginModal] = useState(false);
    const currentUser = useSelector(state => state.auth.id);

    const toggleLoginModal = () => {
        setLoginModal(!loginModal);
    }

    return (
        <LogInModalContext.Provider value={toggleLoginModal}>
        <MDBContainer fluid className={styles.headerSplashContainer}>
            <div className={styles.imageFilter}>
            <MDBBox className={styles.headerSplash__contentBox}>
                <div className={styles.headerTopRowContainer}>
                    <a className={styles.headerTopRow__homeLink} href='/'>
                        <img className={styles.flowNotesLogo} src='/images/flownotesLogo.png' alt='Marvel vs. Capcom cast'/>
                        <span className={styles.flowNotesText}>flowNotes</span>
                    </a>
                        {
                            currentUser ?
                            <div></div> :
                            <div className={styles.headerTopRow__rightContainer_notLoggedIn}>
                            <LogInDropDown />
                            <SignUpDropDown />
                            <LogInModalButton />
                            </div>
                        }
                </div>
            </MDBBox>
            </div>
        </MDBContainer>
        </LogInModalContext.Provider>
    );
};

export default HomePage;