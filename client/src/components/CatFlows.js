import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from '../css-modules/BrowseFlows.module.css';
import SideNavComponent from './SideNavComponent';
import BrowseFlowCard from './BrowseFlowCard';

const CatFlows = () => {
    const id = parseInt(window.location.toString().split('/')[4]);
    const category = useSelector(state => {
        for (let i = 0; i < state.categories.length; i++) {
            let currentCat = state.categories[i];
            if (state.categories[i].id === id) {
                return currentCat;
            }
        }
    });
    const currentUser = useSelector(state => state.auth.id);
    const [flows, setFlows] = useState({ flows: [] });

    useEffect(() => {
        const fetchFlows = async () => {
            const res = await fetch(`/api/categories/${id}/flows`);

            res.data = await res.json();

            if (res.ok) {
                setFlows({ flows: res.data.category.Flows });
                return;
            }
        }

        fetchFlows();
    }, [id]);

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
                <h2 className={styles.catHeader}>{category.name}</h2>
            </div>
            <SideNavComponent />
            <div className={styles.cardContainer}>
                {flows.flows.length ?
                    flows.flows.map((flow, i) => {
                        return (
                            <BrowseFlowCard
                                key={`card-${i + 1}`}
                                i={i}
                                thumbnail={flow.Video.thumbnail}
                                name={flow.name}
                                catName={category.name}
                                description={flow.description}
                                flowId={flow.id}
                                myFlow={currentUser === flow.userId}
                                removeFlow={removeFlow}/>
                        )
                    })
                    : <> </>}
            </div>
        </div>
    )
}

export default CatFlows;