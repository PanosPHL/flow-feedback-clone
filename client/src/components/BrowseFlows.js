import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';

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
        <div>
        { flows.flows.length ?
        flows.flows.map((flow) => {
            return (
                <MDBCol>
                <MDBCard>
                    <MDBCardImage className='img-fluid' src={flow.Video.thumbnail}/>
            <MDBCardTitle>{flow.name}</MDBCardTitle>
            <MDBCardText>
                <span>{flow.Category.name}</span>
                <span>{flow.description}</span>
            </MDBCardText>
                </MDBCard>
                </MDBCol>
            )
        })
    : <> </>}
        </div>
    )
}

export default BrowseMyFlows;