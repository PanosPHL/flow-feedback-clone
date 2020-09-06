import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const BrowseMyFlows = () => {
    const userId = useSelector(state => state.auth.id);
    const [flows, setFlows] = useState({ flows: [] });

    useEffect(() => {
        const fetchFlows = async () => {
            const res = await fetch(`/api/users/${userId}/flows`);

            res.data = res.json();

            if (res.ok) {
                setFlows({ flows: res.data.flows })
            }
        }

        fetchFlows();
    }, []);

    return (
        <div>

        </div>
    )
}

export default BrowseFlows;