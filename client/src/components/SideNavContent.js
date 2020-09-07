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
                <img alt='flowNotes home' src='/images/flownotesLogo.png' className={styles['logo' + className]} />
            </Link>
            <div className={styles.lowerContent}>
            <Link to='/flow/fetch'>
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
                <div className={styles['catContainer' + className]}>
                    <MDBIcon icon='gamepad' className={styles['gamepad' + className]} />
                    <Link to='/category/1'>
                        <div className={styles['lol' + className]}>
                        <button type='button' className={styles['lolButton' + className] + ' btn btn-amber'}><img alt='League of Legends' src='/images/lol-icon.png' className={styles['lolIcon' + className]}/></button>
                        <span>League Of Legends</span>
                        </div>
                    </Link>
                    <Link to='/category/2'>
                        <div className={styles['ssbm' + className]}>
                        <button type='button' className={styles['lolButton' + className] + ' btn btn-amber'}><img alt='Super Smash Bros. Melee' src='/images/ssbm-logo.png' className={styles['lolIcon' + className]}/></button>
                        <span>Melee</span>
                        </div>
                    </Link>
                    <Link to='/category/3'>
                        <div className={styles['overwatch' + className]}>
                        <button type='button' className={styles['lolButton' + className] + ' btn btn-amber'}><img alt='Overwatch' src='/images/overwatch.png' className={styles['overwatchIcon' + className]}/></button>
                        <span>Overwatch</span>
                        </div>
                    </Link>
                    <Link to='/category/4'>
                        <div className={styles['csgo' + className]}>
                            <button type='button' className={styles['lolButton' + className] + ' btn btn-amber'}><img alt='Counter Strike: Global Offensive' src='/images/cs-go.png' className={styles['csgoIcon' + className]}/></button>
                            <span>CS:GO</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SideNavContent;