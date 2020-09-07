import React, { useState } from 'react';
import Sidebar from 'react-sidebar';
import styles from '../css-modules/SideNavComponent.module.css';
import SideBarContext from '../contexts/SideBarContext';
import SideNavContent from './SideNavContent';

const SideNavComponent = (props) => {
    const [open, setOpen] = useState(false);
    const [className, setClassName] = useState('Closed');

    const openSidebar = () => {
        setOpen(!open)
    }

    const toggleSidebar = () => {
        if (className === 'Closed') {
            setClassName('Open');
            return;
        }
        setClassName('Closed');
    }

    const value = {
        className,
        handlers: {
            toggleSidebar
        }
    };

    return (
        <SideBarContext.Provider value={value}>
        <Sidebar
        sidebar={
        <SideNavContent />
        }
        sidebarClassName={styles['sidebar' + className]}
        docked={true}
            open={open}
            onSetOpen={openSidebar}
            styles={{ sidebar: { background: 'black', transition: "", WebkitTransition: ""} }}
        >
            <div />
        </Sidebar>
        </SideBarContext.Provider>
    )
}

export default SideNavComponent;