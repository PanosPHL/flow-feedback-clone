import React from 'react';
import styles from '../css-modules/HomePageFooter.module.css';

const HomePageFooter = () => {
    return (
        <section className={styles.footerContainer}>
            <ul className={styles.footerList}>
                <h6>Panayiotis' Links</h6>
                <a target='_blank' rel="noopener noreferrer" className={styles.listItem} href='https://www.linkedin.com/in/panayiotis-dimopoulos/'>
                    <li>LinkedIn</li>
                </a>
                <a target='_blank' rel="noopener noreferrer" className={styles.listItem} href='https://github.com/PanosPHL'>
                    <li>GitHub</li>
                </a>
                <a target='_blank' rel="noopener noreferrer" className={styles.listItem} href='https://panosphl.github.io/panos-portfolio/'>
                    <li>Portfolio</li>
                </a>
            </ul>
            <ul className={styles.footerList + ' ' + styles.secondFooterList}>
                <h6>Panayiotis' Project Links</h6>
                <a target='_blank' rel="noopener noreferrer" className={styles.listItem} href='https://github.com/PanosPHL/flownotes'>
                    <li>flowNotes Repo</li>
                </a>
                <a target='_blank' rel="noopener noreferrer" className={styles.listItem} href='https://player-seeking-player.herokuapp.com'>
                    <li>Player Seeking Player</li>
                </a>
                <a target='_blank' rel="noopener noreferrer" className={styles.listItem} href='https://everquote.herokuapp.com'>
                    <li>EverQuote</li>
                </a>
                <a target='_blank' rel="noopener noreferrer" className={styles.listItem} href='https://aagoodreads.herokuapp.com'>
                    <li>aAGoodreads</li>
                </a>
            </ul>
        </section>
    )
}

export default HomePageFooter;