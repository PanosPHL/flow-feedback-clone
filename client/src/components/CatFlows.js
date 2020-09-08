import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from '../css-modules/BrowseFlows.module.css';
import SideNavComponent from './SideNavComponent';
import BrowseFlowCard from './BrowseFlowCard';
import { withRouter } from 'react-router-dom';

const CatFlows = (props) => {
    const id = props.match.params.id;
    const [category, setCategory] = useState({});
    const currentUser = useSelector(state => state.auth.id);
    const [flows, setFlows] = useState({ flows: [] });

    useEffect(() => {
        const fetchFlows = async () => {
            const res = await fetch(`/api/categories/${id}/flows`);

            res.data = await res.json();

            if (res.ok && res.data.category !== null) {
                setFlows({ flows: res.data.category.Flows });
                setCategory(res.data.category);
                return;
            }

            props.history.push('/not-found');
        }
        fetchFlows();
    }, [id, props.history]);

    const removeFlow = (id) => {
        let slice;
        const newState = Object.assign({}, flows);
        for (let i = 0; i < newState.flows.length; i++) {
            if (newState.flows[i].id === id) {
                slice = i;
            }
        }
        newState.flows.splice(slice, 1);
        setFlows(newState);
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.headerContainer}>
                <h2 className={styles.catHeader}>{category.name}</h2>
            </div>
            <SideNavComponent pageName='browseFlows'/>
            <div className={styles.cardContainer}>
                {flows.flows.length ?
                    flows.flows.map((flow, i) => {
                        return (
                            <BrowseFlowCard
                                key={`card-${i + 1}`}
                                i={i}
                                thumbnail={flow.Video.thumbnail}
                                name={flow.name}
                                catName={category.name === 'Super Smash Bros. Melee' ? 'Melee' : category.name}
                                description={flow.description}
                                flowId={flow.id}
                                myFlow={currentUser === flow.userId}
                                removeFlow={removeFlow}
                                owner={flow.User.email}
                            />
                        )
                    })
                    : <> </>}
            </div>
        </div>
    )
}

export default withRouter(CatFlows);