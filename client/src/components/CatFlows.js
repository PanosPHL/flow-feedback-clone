import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from '../css-modules/BrowseFlows.module.css';
import SideNavComponent from './SideNavComponent';
import BrowseFlowCard from './BrowseFlowCard';
import { withRouter } from 'react-router-dom';

const CatFlows = (props) => {
    const id = props.match.params.id;
    const category = useSelector(state => state.entities.categories[id]);
    const flows = useSelector(state => Object.values(state.entities.flows).filter((flow) => flow.categoryId === category.id));
    const currentUser = useSelector(state => state.session.id);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.headerContainer}>
                <h2 className={styles.catHeader}>{category.name}</h2>
            </div>
            <SideNavComponent pageName='browseFlows'/>
            <div className={styles.cardContainer}>
                {flows.length ?
                    flows.map((flow, i) => {
                        return (
                            <BrowseFlowCard
                                key={`card-${i + 1}`}
                                i={i}
                                flow={flow}
                                myFlow={currentUser === flow.userId}
                            />
                        )
                    })
                    : <> </>}
            </div>
        </div>
    )
}

export default withRouter(CatFlows);