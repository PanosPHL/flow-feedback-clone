import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from 'react-sidebar';

const SideNavComponent = (props) => {
    const [open, setOpen] = useState(false);

    const openSidebar = (open) => {
        setOpen(true)
    }

    return (
        <Sidebar
        sidebar={<b>Sidebar content</b>}
            open={open}
            onSetOpen={openSidebar}
            styles={{ sidebar: { background: 'grey'} }}
        >
            <button type='button' className='btn' onClick={openSidebar}>Open sidebar</button>
        </Sidebar>
    )
}

export default SideNavComponent;