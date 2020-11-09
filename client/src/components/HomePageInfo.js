import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/session';
import { toggleLearnMore } from '../store/ui/home';
import { MDBBox, MDBIcon } from 'mdbreact';
import LearnMore from './LearnMore';
import styles from '../css-modules/HomePageInfo.module.css';

const HomePageInfo = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.id);
    const { learnMore } = useSelector(state => state.ui.home);

    const handleDemoClick = async () => {
        await dispatch(login('faker@t1.com', 'fakerDaBess'));
    }

    const handleLearnMoreClick = () => {
        dispatch(toggleLearnMore());
    }

    return (
        <MDBBox>
            <MDBBox className={styles.infoContainer}>
            {learnMore ? <LearnMore />
            :
            <>
            <h1 className={styles.header}>flowNotes</h1>
            <h3 className={styles.subheader}>The easiest way to give and receive feedback on game replays</h3>
            </> }
            <MDBBox className={currentUser ? styles.singleButtonContainer : styles.twoButtonContainer}>
                <button onClick={handleLearnMoreClick} className={styles.button}>
                <MDBIcon far icon="question-circle" className={styles.icon}/>
                <span className={styles.buttonText}>Learn More</span>
                </button>
                {!currentUser ? <button className={styles.button} onClick={handleDemoClick}>
                <MDBIcon far icon="user" className={styles.icon}/>
                    <span className={styles.buttonText}>Demo User</span>
                </button> : <></>}
            </MDBBox>
            </MDBBox>
        </MDBBox>
    )
}

export default HomePageInfo;