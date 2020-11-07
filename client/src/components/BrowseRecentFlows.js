import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BrowseFlowCard from './BrowseFlowCard';
import styles from '../css-modules/RecentFlows.module.css';

const BrowseRecentFlows = () => {
    const flows = useSelector(state => {
        return Object.values(state.entities.flows).sort((a, b) => {
            return new Date(a.createdAt) - new Date(b.createdAt);
        }).filter((flow, i) => i <= 3);
    }) || [];

    return (
        <div className={styles.section}>
            <h2 className={styles.header + ' font-weight-bold'}>
                Recent Flows
            </h2>
            <div className={styles.cardContainer}>
                {flows.length ?
                flows.map((flow, i) => {
                    return (
                        <BrowseFlowCard
                        key={`card-${i + 1}`}
                        i={i}
                        flow={flow}
                        // thumbnail={flow.Video.thumbnail}
                        // name={flow.name}
                        // catName={flow.Category.name}
                        // flowId={flow.id}
                        // myFlow={false}
                        // owner={flow.User.email}
                        />
                    )
                }) : <></>}
            </div>
        </div>
    )
}

export default BrowseRecentFlows;