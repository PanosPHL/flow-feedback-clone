const TOGGLE_SIDEBAR = 'ui/nav/TOGGLE_SIDEBAR';

export const toggleSidebar = () => {
    return {
        type: TOGGLE_SIDEBAR
    }
}

export default function navReducer(state = { open: false }, action) {
    const newState = Object.assign({}, state);
    switch(action.type) {
        case TOGGLE_SIDEBAR:
            newState.open = !newState.open;
            return newState;
        default:
            return state;
    }
}