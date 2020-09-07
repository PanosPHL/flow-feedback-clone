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
    }, [id])

    return (
        <div className={styles.pageContainer}>
            <div className={styles.headerContainer}>
                <img alt='Category Cover' src={category.cover} className={styles.headerImage}/>
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
                                myFlow={false} />
                        )
                    })
                    : <> </>}
            </div>
        </div>
    )
}

export default CatFlows;