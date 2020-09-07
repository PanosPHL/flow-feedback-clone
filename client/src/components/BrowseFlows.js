import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../css-modules/BrowseFlows.module.css';
import BrowseFlowCard from './BroseFlowCard';
import SideNavComponent from './SideNavComponent';

const BrowseMyFlows = () => {
    const userId = useSelector(state => state.auth.id);
    const [flows, setFlows] = useState({ flows: [] });

    useEffect(() => {
        const fetchFlows = async () => {
            const res = await fetch(`/api/users/${userId}/flows`);

            res.data = await res.json();
            console.log(res);

            if (res.ok) {
                setFlows({ flows: res.data.flows })
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
        <div className={styles.pageContainer}>
            <h2 className={styles.header}>My Flows</h2>
            <SideNavComponent />
        <div className={styles.cardContainer}>
            {flows.flows.length ?
                flows.flows.map((flow, i) => {
                    return (
                            <BrowseFlowCard
                            i={i}
                            thumbnail={flow.Video.thumbnail}
                            name={flow.name}
                            catName={flow.Category.name}
                            description={flow.description}
                            flowId={flow.id}
                            removeFlow={removeFlow}/>
                    )
                })
                : <> </>}
        </div>
        </div>
    )
}

export default BrowseMyFlows;