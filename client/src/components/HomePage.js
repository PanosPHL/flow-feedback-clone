import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { MDBContainer, MDBBox } from 'mdbreact';
import styles from '../css-modules/HomePage.module.css';
import LogInModalContext from '../contexts/LogInModalContext';
import SignUpModalContext from '../contexts/SignUpModalContext';
import LogInModalButton from './LogInModalButton';
import LogInModal from './LogInModal';
import SignUpModalButton from './SignUpModalButton';
import SignUpModal from './SignUpModal';

const HomePage = () => {
    const [loginModal, setLoginModal] = useState(false);
    const [signUpModal, setSignUpModal] = useState(false);
    const currentUser = useSelector(state => state.auth.id);

    const toggleLoginModal = () => {
        setLoginModal(!loginModal);
    }

    const toggleSignUpModal = () => {
        setSignUpModal(!signUpModal);
    }

    const loginModalState = {
        loginModal: loginModal,
        toggleLoginModal
    };

    const signUpModalState = {
        signUpModal: signUpModal,
        toggleSignUpModal
    }

    return (
        <LogInModalContext.Provider value={loginModalState}>
        <SignUpModalContext.Provider value={signUpModalState}>
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
                            <LogInModalButton className={styles.dropdownButton}/>
                            <SignUpModalButton className={styles.dropdownButton}/>
                            </div>
                        }
                </div>
            </MDBBox>
            </div>
            <LogInModal />
        </MDBContainer>
        </SignUpModalContext.Provider>
        </LogInModalContext.Provider>
    );
};

export default HomePage;