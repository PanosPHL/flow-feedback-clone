import { csrfToken } from './session';

export const ADD_NOTE = '/notes/ADD_NOTE';
const SET_NOTES = '/notes/SET_NOTES';
const EDIT_NOTE = '/notes/EDIT_NOTE';
export const DELETE_NOTE = '/notes/DELETE_NOTE';

const addNote = (note) => {
    return {
        type: ADD_NOTE,
        note
    }
};

export const addNewNote = (content, timestamp, flowId) => {
    return async dispatch => {
        const res = await fetch('/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken
            },
            body: JSON.stringify({ content, timestamp, flowId })
        });

        res.data = await res.json();

        if (res.ok) {
            dispatch(addNote(res.data.note));
        }
        return res;
    }
};

export const setNotes = (notes) => {
    return {
        type: SET_NOTES,
        notes
    }
};

export const setUserNotes = (userId) => {
    return async dispatch => {
        const res = await fetch(`/api/users/${userId}/notes`);

        res.data = await res.json();

        if (res.ok) {
            dispatch(setNotes(res.data.notes));
        }
        return res;
    }
}

const editNote = (note) => {
    return {
        type: EDIT_NOTE,
        note
    }
}

export const updateNote = (noteId, content) => {
    return async dispatch => {
        const res = await fetch(`/api/notes/${noteId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken
            },
            body: JSON.stringify({ content })
        });

        res.data = await res.json();

        if (res.ok) {
            dispatch(editNote(res.data.note));
        }
        return res;
    }
}

const delNote = (noteId, flowId) => {
    return {
        type: DELETE_NOTE,
        noteId,
        flowId
    }
}

export const deleteNote = (noteId, flowId) => {
    return async dispatch => {
        const res = await fetch(`/api/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': csrfToken
            }
        });

        res.data = await res.json();
        if (res.ok) {
            dispatch(delNote(noteId, flowId));
        }
        return res;
    }
}

export default function noteReducer(state = {}, action) {
    const newState = Object.assign({}, state);
    switch(action.type) {
        case SET_NOTES:
            for (const note of action.notes) {
                newState[note.id] = note;
            }
            return newState;
        case ADD_NOTE:
            newState[action.note.id] = action.note;
            return newState;
        case EDIT_NOTE:
            newState[action.note.id] = action.note;
            return newState;
        case DELETE_NOTE:
            delete newState[action.noteId];
            return newState;
        default:
            return state;
    }
}