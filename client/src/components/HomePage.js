import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { MDBContainer, MDBBox } from 'mdbreact';
import { Link } from 'react-router-dom';
import styles from '../css-modules/HomePage.module.css';
import LogInModalContext from '../contexts/LogInModalContext';
import SignUpModalContext from '../contexts/SignUpModalContext';
import LogInModalButton from './LogInModalButton';
import LogInModal from './LogInModal';
import SignUpModalButton from './SignUpModalButton';
import SignUpModal from './SignUpModal';
import CreateFlowButton from './CreateFlowButton';
import LogOut from './LogOut';
import HomePageCarousel from './HomePageCarousel';
import BrowseRecentFlows from './BrowseRecentFlows';

export const LinkToRoot = () => {
    return (
        <>
            <img className={styles.flowNotesLogo} src='/images/flownotesLogo.png' alt='flowNotes logo' />
            <span className={styles.flowNotesText}>flowNotes</span>
        </>
    );
}

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
                <div className={styles.pageContainer}>
                <MDBContainer fluid className={styles.headerSplashContainer}>
                    <div className={styles.imageFilter}>
                        <MDBBox className={styles.headerSplash__contentBox}>
                            <div className={styles.headerTopRowContainer}>
                                <Link className={styles.headerTopRow__homeLink} to='/'><LinkToRoot /></Link>
                                {
                                    currentUser ?
                                        <div className={styles.headerTopRow__rightContainer_loggedIn}>
                                            <CreateFlowButton />
                                            <LogOut />
                                        </div> :
                                        <div className={styles.headerTopRow__rightContainer_notLoggedIn}>
                                            <LogInModalButton />
                                            <SignUpModalButton />
                                        </div>
                                }
                            </div>
                            <HomePageCarousel />
                        </MDBBox>
                    </div>
                    <LogInModal />
                    <SignUpModal />
                </MDBContainer>
                <div className={styles.bodyContainer}>
                    <BrowseRecentFlows />
                </div>
                </div>
            </SignUpModalContext.Provider>
        </LogInModalContext.Provider>
    );
};

export default HomePage;