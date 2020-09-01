import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { MDBContainer, MDBBox } from 'mdbreact';
import styles from '../css-modules/HomePage.module.css';
import LogInModalContext from '../contexts/LogInModalContext';
import SignUpModalContext from '../contexts/SignUpModalContext';
import LogInModalButton from './LogInModalButton';
import LogInModal from './LogInModal';
import SignUpModalButton from './SignUpModalButton';
import SignUpModal from './SignUpModal';
import CreateFlowButton from './CreateFlowButton';
import LogOut from './LogOut';
import PageLoad from './PageLoad'

const HomePage = () => {
    const [loginModal, setLoginModal] = useState(false);
    const [signUpModal, setSignUpModal] = useState(false);
    const [loading, setLoading] = useState(true);
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

    useEffect(() => {
        setLoading(false);

        const loadToggle = async () => {
            await setLoading(true);

            setTimeout(async () => {
                await setLoading(false);
            }, 200);
            return;
        }

        loadToggle();
    }, [currentUser]);

    if (loading) {
        return (
            <PageLoad />
        )
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
                            <div className={styles.headerTopRow__rightContainer_loggedIn}>
                                <CreateFlowButton />
                                <LogOut />
                            </div> :
                            <div className={styles.headerTopRow__rightContainer_notLoggedIn}>
                            <LogInModalButton/>
                            <SignUpModalButton/>
                            </div>
                        }
                </div>
            </MDBBox>
            </div>
            <LogInModal />
            <SignUpModal />
        </MDBContainer>
        </SignUpModalContext.Provider>
        </LogInModalContext.Provider>
    );
};

export default HomePage;