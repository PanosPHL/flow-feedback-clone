import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../css-modules/BrowseFlows.module.css';
import BrowseFlowCard from './BroseFlowCard';

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

    return (
        <div className={styles.pageContainer}>
        <div className={styles.cardContainer}>
            {flows.flows.length ?
                flows.flows.map((flow, i) => {
                    return (
                        <Link to={`/flow/${flow.id}`}>
                            <BrowseFlowCard
                            i={i}
                            thumbnail={flow.Video.thumbnail}
                            name={flow.name}
                            catName={flow.Category.name}
                            description={flow.description}/>
                        </Link>
                    )
                })
                : <> </>}
        </div>
        </div>
    )
}

export default BrowseMyFlows;