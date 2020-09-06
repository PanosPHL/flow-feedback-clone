import React, { useState } from 'react';
import { MDBCard, MDBContainer } from 'mdbreact';
import FlowCardContext from '../contexts/FlowCardContext';
import FlowCardContent from './FlowCardContent';
import DeleteFlowForm from './DeleteFlowForm';

const BrowseFlowCard = ({ i, thumbnail, name, catName, description }) => {
    const [displayDel, setDisplayDel] = useState(false)

    const handleTrashClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDisplayDel(true);
    }

    const value = {
        displayDel,
        handlers: {
            handleTrashClick
        }
    };

    return (
        <FlowCardContext.Provider value={value}>
        <MDBContainer style={
            {
            gridColumn: i < 4 ? `${i + 1} / ${i + 2}` : `${(i % 4) + 1} / ${(i % 4) + 2}`,
            gridRow: `${(i % 4) + 1} / ${(i % 4) + 2}` }
            }>
            <MDBCard style={{
                width: '18em',
                height: '21em'
            }}>
                {
                    displayDel ? <DeleteFlowForm /> : <FlowCardContent thumbnail={thumbnail} name={name} catName={catName} description={description} />
                }
            </MDBCard>
        </MDBContainer>
        </FlowCardContext.Provider>
    )
}

export default BrowseFlowCard;