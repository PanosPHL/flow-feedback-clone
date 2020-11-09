import React from 'react';
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
    const { thumbnail, duration } = useSelector(state => state.entities.videos[flow.videoId]);
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
                    <MDBContainer className={styles.card}>
                        <MDBCard style={{
                            width: '310px',
                            height: '342px'
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
                <MDBCard narrow style={{
                    position: 'relative',
                    width: '310px',
                    height: '342px'
                }}>
                    <FlowCardContent thumbnail={thumbnail} name={flow.name} date={flow.createdAt} myFlow={myFlow} owner={owner} duration={duration}/>
                </MDBCard>
                    <div className={styles.imageAndCardSeparator}></div>
            </MDBContainer>
        </FlowCardContext.Provider>
        </Link>
    )
}

export default BrowseFlowCard;