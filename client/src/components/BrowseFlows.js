import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../css-modules/BrowseFlows.module.css';
import BrowseFlowCard from './BrowseFlowCard';
import SideNavComponent from './SideNavComponent';

const BrowseMyFlows = () => {
    const userId = useSelector(state => state.session.id);
    const flows = useSelector(state => Object.values(state.entities.flows).filter((flow) => flow.userId === userId));

    return (
        <div className={styles.pageContainer}>
            <div className={styles.headerContainer}>
            <h2 className={styles.catHeader}>My Flows</h2>
            </div>
            <SideNavComponent pageName={'browseFlows'}/>
        <div className={styles.cardContainer}>
            {flows.length ?
                flows.map((flow, i) => {
                    return (
                            <BrowseFlowCard
                            key={`card-${i + 1}`}
                            i={i}
                            flow={flow}
                            myFlow={true}/>
                    )
                })
                : <> </>}
        </div>
        </div>
    )
}

export default BrowseMyFlows;