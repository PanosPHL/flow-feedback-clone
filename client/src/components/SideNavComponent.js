import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const SideNavComponent = () => {
    const [open, setOpen] = useState(false);

    const sidenavToggle = () => {
        setOpen(!open);
    }

    return (
<h1>NavPlaceholder</h1>
    )
}

export default SideNavComponent;