import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../css-modules/BrowseFlows.module.css';
import BrowseFlowCard from './BrowseFlowCard';
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
                return
            }
        }

        fetchFlows();
    }, [userId]);


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
            <div className={styles.headerContainer}>
            <h2 className={styles.catHeader}>My Flows</h2>
            </div>
            <SideNavComponent pageName={'browseFlows'}/>
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
                            description={flow.description}
                            flowId={flow.id}
                            removeFlow={removeFlow}
                            myFlow={true}/>
                    )
                })
                : <> </>}
        </div>
        </div>
    )
}

export default BrowseMyFlows;