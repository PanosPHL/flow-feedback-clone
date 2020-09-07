import React, { useState, useEffect } from 'react';
import BrowseFlowCard from './BrowseFlowCard';
import styles from '../css-modules/RecentFlows.module.css';

const BrowseRecentFlows = () => {
    const [flows, setFlows] = useState({ flows: [] })

    useEffect(() => {
        const fetchFlows = async () => {
            const res = await fetch('/api/flows/recent');

            res.data = await res.json();
            console.log(res);

            if (res.ok) {
                setFlows({ flows: res.data.flows });
            }
        }
        fetchFlows();
    }, []);

    const removeFlow = (id) => {
        let slice;
        const newState = Object.assign({}, flows);
        console.log(newState);
        for (let i = 0; i < newState.flows.length; i++) {
            if (newState.flows[i].id === id) {
                slice = i;
            }
        }
        newState.flows.splice(slice, 1);
        console.log(newState);
        setFlows(newState);
    }

    return (
        <div className={styles.section}>
            <h2 className={styles.header + ' font-weight-bold'}>
                Recent Flows
            </h2>
            <div className={styles.cardContainer}>
                {flows.flows.length ?
                flows.flows.map((flow, i) => {
                    return (
                        <BrowseFlowCard
                        key={`card-${i + 1}`}
                        i={i}
                        thumbnail={flow.Video.thumbnail}
                        name={flow.name}
                        catName={flow.Category.name}
                        flowId={flow.id}
                        removeFlow={removeFlow}
                        myFlow={false}
                        owner={flow.User.email}
                        />
                    )
                }) : <></>}
            </div>
        </div>
    )
}

export default BrowseRecentFlows;