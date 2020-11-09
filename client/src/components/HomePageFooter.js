import React from 'react';
import styles from '../css-modules/HomePageFooter.module.css';

const HomePageFooter = () => {
    return (
        <section className={styles.footerContainer}>
            <ul>
                <h6>Panayiotis' Links</h6>
            </ul>
            <ul className={styles.secondFooterList}>
                <h6>Panayiotis' Other Projects</h6>
            </ul>
        </section>
    )
}

export default HomePageFooter;