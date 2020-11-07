import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MDBCard, MDBContainer } from 'mdbreact';
import FlowCardContext from '../contexts/FlowCardContext';
import FlowCardContent from './FlowCardContent';
import DeleteFlowForm from './DeleteFlowForm';
import { deleteFlow } from '../store/flows';
import { setFlowToDelete } from '../store/session';
import { toggleDeleteConfirmation } from '../store/ui/browse';
import { Link } from 'react-router-dom';
import styles from '../css-modules/BrowseFlows.module.css';

const BrowseFlowCard = ({ i, flow, myFlow }) => {
    const dispatch = useDispatch();
    const { thumbnail } = useSelector(state => state.entities.videos[flow.videoId]);
    const { name: catName } = useSelector(state => state.entities.categories[flow.categoryId]);
    const { email: owner } = useSelector(state => state.entities.users[flow.userId]);
    const { deleteFlow: deleteConf } = useSelector(state => state.ui.browse);
    const { flowToDelete } = useSelector(state => state.session);

    const handleTrashClick = (event) => {
        event.preventDefault();
        dispatch(setFlowToDelete(flow.id))

        if (!deleteConf) {
            dispatch(toggleDeleteConfirmation());
        }
    }

    const handleDelClick = async () => {
        const res = await dispatch(deleteFlow(flow.id));

        if (res.ok) {
            dispatch(setFlowToDelete(null));
            dispatch(toggleDeleteConfirmation());
        }
    }

    const handleCancelClick = () => {
        dispatch(setFlowToDelete(null));
        dispatch(toggleDeleteConfirmation());
    }

    const value = {
        handlers: {
            handleTrashClick,
            handleDelClick,
            handleCancelClick
        }
    };

    if (deleteConf && flowToDelete === flow.id) {
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
        <Link to={`/flow/${flow.id}`}>
        <FlowCardContext.Provider value={value}>
            <MDBContainer className={styles.card}>
                <MDBCard style={{
                    width: '320px',
                    height: '352px'
                }}>
                    <FlowCardContent thumbnail={thumbnail} name={flow.name} catName={catName} description={flow.description} myFlow={myFlow} owner={owner}/>
                </MDBCard>
            </MDBContainer>
        </FlowCardContext.Provider>
        </Link>
    )
}

export default BrowseFlowCard;