const TOGGLE_CONTROLLABLE = 'ui/flow/TOGGLE_CONTROLLABLE';
const TOGGLE_NEW_NOTE_FORM = 'ui/flow/TOGGLE_NEW_NOTE_FORM';
const TOGGLE_EDIT_NOTE_FORM = 'ui/flow/TOGGLE_EDIT_NOTE_FORM';

export const toggleControllable = () => {
    return {
        type: TOGGLE_CONTROLLABLE
    }
}

export const toggleNewNoteForm = () => {
    return {
        type: TOGGLE_NEW_NOTE_FORM
    }
}

export const toggleEditNoteForm = () => {
    return {
        type: TOGGLE_EDIT_NOTE_FORM
    }
}

const initialState = {
    newNoteForm: false,
    editNoteForm: false
}

export default function flowReducer(state = {}, action) {
    const newState = Object.assign({}, state);
    switch(action.type) {
        case TOGGLE_NEW_NOTE_FORM:
            newState.newNoteForm = !newState.newNoteForm;
            return newState;
        case TOGGLE_EDIT_NOTE_FORM:
            newState.editNoteForm = !newState.editNoteForm;
            return newState;
        case TOGGLE_CONTROLLABLE:
            newState.controllable = !newState.controllable;
            return newState;
        default:
            return state;
    }
}