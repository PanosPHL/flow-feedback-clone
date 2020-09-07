import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MDBCard, MDBContainer } from 'mdbreact';
import FlowCardContext from '../contexts/FlowCardContext';
import FlowCardContent from './FlowCardContent';
import DeleteFlowForm from './DeleteFlowForm';
import { deleteFlow } from '../store/flows';
import { Link } from 'react-router-dom';
import styles from '../css-modules/BrowseFlows.module.css';

const BrowseFlowCard = ({ i, thumbnail, name, catName, description, flowId, removeFlow, myFlow, owner }) => {
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
                    <MDBContainer style={{width: '320px', margin: '0'}} className={styles.card}>
                        <MDBCard style={{
                            width: '320px',
                            height: '352px'
                        }}>
                            <DeleteFlowForm/>
                        </MDBCard>
                    </MDBContainer>
                </FlowCardContext.Provider>
        )
    }

    return (
        <Link to={`/flow/${flowId}`}>
        <FlowCardContext.Provider value={value}>
            <MDBContainer className={styles.card}>
                <MDBCard style={{
                    width: '320px',
                    height: '352px'
                }}>
                    <FlowCardContent thumbnail={thumbnail} name={name} catName={catName} description={description} myFlow={myFlow} owner={owner}/>
                </MDBCard>
            </MDBContainer>
        </FlowCardContext.Provider>
        </Link>
    )
}

export default BrowseFlowCard;