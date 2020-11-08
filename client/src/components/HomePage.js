import React from 'react'
import { useSelector } from 'react-redux';
import { MDBContainer, MDBBox } from 'mdbreact';
import { Link } from 'react-router-dom';
import LogInModalButton from './LogInModalButton';
import LogInModal from './LogInModal';
import SignUpModalButton from './SignUpModalButton';
import SignUpModal from './SignUpModal';
import LogOut from './LogOut';
import HomePageInfo from './HomePageInfo';
import BrowseRecentFlows from './BrowseRecentFlows';
import BrowseCats from './BrowseCats';
import HomePageDropdown from './HomePageDropdown';
import styles from '../css-modules/HomePage.module.css';

export const LinkToRoot = () => {
    return (
        <>
            <img className={styles.flowNotesLogo} src='/images/flownotesLogo.png' alt='flowNotes logo' />
            <span className={styles.flowNotesText}>flowNotes</span>
        </>
    );
}

const HomePage = () => {
    const currentUser = useSelector(state => state.session.id);

    return (
                <div className={styles.pageContainer}>
                <MDBContainer fluid className={styles.headerSplashContainer}>
                    <div className={styles.imageFilter}>
                        <MDBBox className={styles.headerSplash__contentBox}>
                            <div className={styles.headerTopRowContainer}>
                                <Link className={styles.headerTopRow__homeLink} to='/'><LinkToRoot /></Link>
                                {
                                    currentUser ?
                                        <div className={styles.headerTopRow__rightContainer_loggedIn}>
                                            <HomePageDropdown />
                                            <LogOut />
                                        </div> :
                                        <div className={styles.headerTopRow__rightContainer_notLoggedIn}>
                                            <LogInModalButton />
                                            <SignUpModalButton />
                                        </div>
                                }
                            </div>
                           <HomePageInfo />
                        </MDBBox>
                    </div>
                    <LogInModal />
                    <SignUpModal />
                </MDBContainer>
                <div className={styles.bodyContainer}>
                    <BrowseRecentFlows />
                    <BrowseCats />
                </div>
                </div>
    );
};

export default HomePage;