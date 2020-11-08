const TOGGLE_NEW_NOTE_FORM = 'ui/flow/TOGGLE_NEW_NOTE_FORM';
const TOGGLE_EDIT_NOTE_FORM = 'ui/flow/TOGGLE_EDIT_NOTE_FORM';
const TOGGLE_TITLE_FORM = 'ui/flow/TOGGLE_TITLE_FORM';
const TOGGLE_DELETE_CONFIRMATION = 'ui/flow/TOGGLE_DELETE_CONFIRMATION';

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

export const toggleTitleForm = () => {
    return {
        type: TOGGLE_TITLE_FORM
    }
}

export const toggleDeleteConfirmation = () => {
    return {
        type: TOGGLE_DELETE_CONFIRMATION
    }
}

export const initialFlowState = {
    newNoteForm: false,
    editNoteForm: false,
    deleteNote: false,
    titleForm: false
}

export default function flowReducer(state = initialFlowState, action) {
    const newState = Object.assign({}, state);
    switch(action.type) {
        case TOGGLE_NEW_NOTE_FORM:
            newState.newNoteForm = !newState.newNoteForm;
            return newState;
        case TOGGLE_EDIT_NOTE_FORM:
            newState.editNoteForm = !newState.editNoteForm;
            return newState;
        case TOGGLE_TITLE_FORM:
            newState.titleForm = !newState.titleForm;
            return newState;
        case TOGGLE_DELETE_CONFIRMATION:
            newState.deleteNote = !newState.deleteNote;
            return newState;
        default:
            return state;
    }
}