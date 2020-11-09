import React from 'react';
import { useSelector } from 'react-redux';
import BrowseFlowCard from './BrowseFlowCard';
import styles from '../css-modules/BrowseFlowRow.module.css';

const BrowseFlowRow = ({ category }) => {
    const flows = useSelector(state => {
        const flows = Object.values(state.entities.flows);

        if (!category) {
            return flows.filter((flow, i) => i >= flows.length - 4);
        } else if (category === 'lol') {
            return flows.filter((flow, i) => flow.categoryId === 1).filter((flow2, i) => i <= 3);
        } else if (category === 'ssbm') {
            return flows.filter((flow, i) => flow.categoryId === 2).filter((flow2, i) => i <= 3);
        } else if (category === 'ow') {
            return flows.filter((flow, i) => flow.categoryId === 3).filter((flow2, i) => i <= 3);
        } else {
            return flows.filter((flow, i) => flow.categoryId === 4).filter((flow2, i) => i <= 3);
        }
    }) || [];

    return (
        <div
        className={category === 'lol' ? styles.lolOuterSection :
        category === 'ssbm' ? styles.ssbmOuterSection :
        category === 'ow' ? styles.owOuterSection :
        category === 'csgo' ? styles.csgoOuterSection :
        styles.outerSection}>
        <div className={styles.section}>
            <div className={styles.headerContainer}>
            <img
            src={category === 'lol' ? '/images/lol-home-logo.png' :
            category === 'ssbm' ? '/images/ssbm-home-logo.png' :
            category === 'ow' ? '/images/ow-home-logo.png' :
            category === 'csgo' ? '/images/csgo-home-logo.png' :
            '/images/flownotesLogo.png'}
            className={ category === 'csgo' ? styles.csgoLogo : styles.logo}/>
            <h2 className={styles.header}>
                {
                category === 'lol' ? 'League of Legends' :
                category ==='ssbm' ? 'Super Smash Bros. Melee' :
                category === 'ow' ? 'Overwatch' :
                category === 'csgo' ? 'Counter-Strike: Global Offensive' :
                "Recent Flows"
                }
            </h2>
            </div>
            <div className={styles.cardContainer}>
                {flows.length ?
                flows.map((flow, i) => {
                    return (
                        <BrowseFlowCard
                        key={`card-${i + 1}`}
                        i={i}
                        flow={flow}
                        />
                    )
                }) : <></>}
            </div>
        </div>
        </div>
    )
}

export default BrowseFlowRow;