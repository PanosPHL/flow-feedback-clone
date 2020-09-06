import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css-modules/SideNavComponent.module.css';
import SideBarContext from '../contexts/SideBarContext';
import { MDBIcon } from 'mdbreact';

const SideNavContent = () => {
    const { handlers: { toggleSidebar }, className } = useContext(SideBarContext);
    return (
        <>
            <button onClick={toggleSidebar} type='button' className={styles['openButton' + className] + ' btn btn-sm btn-black'}><MDBIcon icon={className === 'Open' ? 'chevron-left' : 'chevron-right'} /></button>
            <Link to='/'>
                <img src='/images/flownotesLogo.png' className={styles['logo' + className]} />
            </Link>
            <div className={styles.lowerContent}>
            <Link to='/flow/new'>
                <div className={styles['createFlow' + className]}>
                <button type='button' className={styles['createFlowButton' + className] + ' btn btn-amber'}><MDBIcon icon='plus' /></button>
                <span>Create Flow</span>
                </div>
            </Link>
                <Link to='/my-flows'>
                    <div className={styles['myFlows' + className]}>
                        <button type='button' className={styles['myFlowsButton' + className] + ' btn btn-amber'}><MDBIcon icon='photo-video' /></button>
                        <span>My Flows</span>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default SideNavContent;