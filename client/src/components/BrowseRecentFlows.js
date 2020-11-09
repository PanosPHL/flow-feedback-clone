import React from 'react';
import { useSelector } from 'react-redux';
import BrowseFlowCard from './BrowseFlowCard';
import styles from '../css-modules/RecentFlows.module.css';

const BrowseRecentFlows = () => {
    const flows = useSelector(state => {
        const flows = Object.values(state.entities.flows);
        return flows.filter((flow, i) => i >= flows.length - 4);
    }) || [];

    return (
        <div className={styles.outerSection}>
        <div className={styles.section}>
            <div className={styles.headerContainer}>
            <img src='/images/flownotesLogo.png' className={styles.logo}/>
            <h2 className={styles.header}>
                Recent Flows
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

export default BrowseRecentFlows;