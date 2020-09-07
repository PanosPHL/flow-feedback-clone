import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MDBCard, MDBContainer } from 'mdbreact';
import FlowCardContext from '../contexts/FlowCardContext';
import FlowCardContent from './FlowCardContent';
import DeleteFlowForm from './DeleteFlowForm';
import { deleteFlow } from '../store/flows';
import { Link } from 'react-router-dom';

const BrowseFlowCard = ({ i, thumbnail, name, catName, description, flowId, removeFlow, myFlow }) => {
    const [displayDel, setDisplayDel] = useState(false);
    const dispatch = useDispatch();

    const handleTrashClick = (event) => {
        event.preventDefault();
        setDisplayDel(true);
    }

    const handleDelClick = async () => {
        const res = await dispatch(deleteFlow(flowId));

        if (res.ok) {
            removeFlow(flowId);
            setDisplayDel(false);
        }
    }

    const handleCancelClick = () => {
        setDisplayDel(false);
    }

    const value = {
        displayDel,
        handlers: {
            handleTrashClick,
            handleDelClick,
            handleCancelClick
        }
    };

    if (displayDel) {
        return (
                <FlowCardContext.Provider value={value}>
                    <MDBContainer style={
                        {
                            gridColumn: i < 4 ? `${i + 1} / ${i + 2}` : `${(i % 4) + 1} / ${(i % 4) + 2}`,
                            gridRow: `${(i % 4) + 1} / ${(i % 4) + 2}`
                        }
                    }>
                        <MDBCard style={{
                            width: '20em',
                            height: '22em'
                        }}>
                            <DeleteFlowForm />
                        </MDBCard>
                    </MDBContainer>
                </FlowCardContext.Provider>
        )
    }

    return (
        <Link to={`/flow/${flowId}`}>
        <FlowCardContext.Provider value={value}>
            <MDBContainer style={
                {
                    gridColumn: i < 4 ? `${i + 1} / ${i + 2}` : `${(i % 4) + 1} / ${(i % 4) + 2}`,
                    gridRow: `${(i % 4) + 1} / ${(i % 4) + 2}`
                }
            }>
                <MDBCard style={{
                    width: '20em',
                    height: '22em'
                }}>
                    <FlowCardContent thumbnail={thumbnail} name={name} catName={catName} description={description} myFlow={myFlow}/>
                </MDBCard>
            </MDBContainer>
        </FlowCardContext.Provider>
        </Link>
    )
}

export default BrowseFlowCard;