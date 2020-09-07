import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BrowseFlowCard from './BrowseFlowCard';

const BrowseRecentFlows = () => {
    const [flows, setFlows] = useState({ flows: [] })
    const currentUser = useSelector(state => state.auth.id);

    useEffect(async () => {
        const res = await fetch('/api/flows/recent');

        res.data = res.json();

        if (res.ok) {
            setFlows({ flows: res.data.flows });
        }
    }, [])

    return (
        <div style={{ gridRow: '1 / 2', gridColumn: '2 / 6' }}>
            <h2>
                Recent Flows
            </h2>
            <div>
            </div>
        </div>
    )
}

export default BrowseRecentFlows;