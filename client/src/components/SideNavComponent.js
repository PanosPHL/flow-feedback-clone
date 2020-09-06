import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import styles from '../css-modules/SideNavComponent.module.css';
import { MDBIcon } from 'mdbreact';

const SideNavComponent = (props) => {
    const [open, setOpen] = useState(false);
    const [className, setClassName] = useState('sidebarClosed');

    const openSidebar = () => {
        setOpen(!open)
    }

    const toggleSidebar = () => {
        if (className === 'sidebarClosed') {
            setClassName('sidebarOpen');
            return;
        }
        setClassName('sidebarClosed');
    }

    return (
        <Sidebar
        sidebar={
        <button onClick={toggleSidebar} type='button' className='btn btn-sm btn-black'><MDBIcon icon='angle-right' /></button>
        }
        sidebarClassName={styles[className]}
        docked={true}
            open={open}
            onSetOpen={openSidebar}
            styles={{ sidebar: { background: 'grey', transition: "", WebkitTransition: ""} }}
        >
            <button type='button' className='btn' onClick={openSidebar}>Open sidebar</button>
        </Sidebar>
    )
}

export default SideNavComponent;