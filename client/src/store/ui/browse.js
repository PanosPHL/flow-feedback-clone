const TOGGLE_DELETE_CONFIRMATION = 'ui/browse/TOGGLE_DELETE_CONFIRMATION';

export const toggleDeleteConfirmation = () => {
    return {
        type: TOGGLE_DELETE_CONFIRMATION
    }
}

export const initialBrowseState = {
    deleteFlow: false
}

export default function browseReducer(state = initialBrowseState, action) {
    const newState = Object.assign({}, state);
    switch(action.type) {
        case TOGGLE_DELETE_CONFIRMATION:
            newState.deleteFlow = !newState.deleteFlow;
            return newState;
        default:
            return state;
    }
}