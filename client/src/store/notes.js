import { csrfToken } from './auth';

const ADD_NOTE = '/notes/ADD_NOTE';
const SET_NOTES = '/notes/SET_NOTES';
const EDIT_NOTE = '/notes/EDIT_NOTE';
const DELETE_NOTE = '/notes/DELETE_NOTE';

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

const setNotes = (notes) => {
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

const delNote = (noteId) => {
    return {
        type: DELETE_NOTE,
        id: noteId
    }
}

export const deleteNote = (noteId) => {
    return async dispatch => {
        const res = await fetch(`/api/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': csrfToken
            }
        });

        res.data = await res.json();

        if (res.ok) {
            dispatch(delNote(res.data.id));
        }
        return res;
    }
}

export default function noteReducer(state = [], action) {
    switch(action.type) {
        case ADD_NOTE:
            return [...state, action.note];
        case EDIT_NOTE:
            let slice;
            for (let i = 0; i < state.length; i++) {
                if (state[i].id === action.note.id) {
                    slice = i;
                    break;
                }
            }
            return [...state.slice(0, slice), action.note, ...state.slice(slice + 1)];
        case DELETE_NOTE:
            let delSlice;
            for (let i = 0; i < state.length; i++) {
                if (state[i].id === action.id) {
                    slice = i;
                    break;
                }
            return [...state.slice(0, delSlice), ...state.slice(delSlice + 1)];
            }
            break;
        default:
            return state;
    }
}