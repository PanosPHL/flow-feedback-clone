const TOGGLE_SIDEBAR = 'ui/nav/TOGGLE_SIDEBAR';

export const toggleSidebar = () => {
    return {
        type: TOGGLE_SIDEBAR
    }
}

export const initialNavState = {
    open: false
}

export default function navReducer(state = initialNavState, action) {
    const newState = Object.assign({}, state);
    switch(action.type) {
        case TOGGLE_SIDEBAR:
            newState.open = !newState.open;
            return newState;
        default:
            return state;
    }
}