import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleLearnMore } from '../store/ui/home';
import { MDBIcon } from 'mdbreact';
import YouTube from 'react-youtube';
import styles from '../css-modules/HomePageInfo.module.css';

const LearnMore = () => {
    const dispatch = useDispatch();
    const [player, setPlayer] = useState(null);

    const opts = {
        height: 252,
        width: 448,
        playerVars: {
            disablekb: 1,
            autoplay: 1
        }
    }

    const onReady = (event) => {
        setPlayer(event.target);
    }

    const handleCloseClick = () => {
        dispatch(toggleLearnMore());
    }

    return (
        <div className={styles.learnMoreContainer}>
            <button onClick={handleCloseClick} className={styles.closeButton}><MDBIcon icon="times" /></button>
            <YouTube opts={opts} onReady={onReady}/>
            <p className={styles.learnMoreText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    )
}

export default LearnMore