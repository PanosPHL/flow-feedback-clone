import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css-modules/HomePageFooter.module.css';

const HomePageFooter = () => {
    return (
        <section className={styles.footerContainer}>
            <ul className={styles.footerList}>
                <h6>Panayiotis' Links</h6>
                <Link className={styles.listItem} to='https://www.linkedin.com/in/panayiotis-dimopoulos/'>
                    <li>LinkedIn</li>
                </Link>
                <Link className={styles.listItem} to='https://github.com/PanosPHL'>
                    <li>GitHub</li>
                </Link>
                <Link className={styles.listItem} to='https://panosphl.github.io/panos-portfolio/'>
                    <li>Portfolio</li>
                </Link>
            </ul>
            <ul className={styles.footerList + ' ' + styles.secondFooterList}>
                <h6>Panayiotis' Project Links</h6>
                <Link className={styles.listItem} to='https://github.com/PanosPHL/flownotes'>
                    <li>flowNotes Repo</li>
                </Link>
                <Link className={styles.listItem} to='https://player-seeking-player.herokuapp.com'>
                    <li>Player Seeking Player</li>
                </Link>
                <Link className={styles.listItem} to='https://everquote.herokuapp.com'>
                    <li>EverQuote</li>
                </Link>
                <Link className={styles.listItem} to='https://aagoodreads.herokuapp.com'>
                    <li>aAGoodreads</li>
                </Link>
            </ul>
        </section>
    )
}

export default HomePageFooter;