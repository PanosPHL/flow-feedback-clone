import React from 'react'
import { useSelector } from 'react-redux';
import { MDBContainer, MDBBox } from 'mdbreact';
import styles from '../css-modules/HomePage.module.css';
import LogInDropDown from './LogInDropDown';
import SignUpDropDown from './SignUpDropDown';

const HomePage = () => {
    const currentUser = useSelector(state => state.auth.id);
    return (
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
                            </div>
                        }
                </div>
            </MDBBox>
            </div>
        </MDBContainer>
    );
};

export default HomePage;