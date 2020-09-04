import { csrfToken } from './auth';

const ADD_NOTE = '/notes/ADD_NOTE';
const SET_NOTES = '/notes/SET_NOTES';

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
        console.log(res);
        if (res.ok) {
            dispatch(setNotes(res.data.notes));
        }
        return res;
    }
}

export default function noteReducer(state = [], action) {
    switch(action.type) {
        case ADD_NOTE:
            return [...state, action.note];
        default:
            return state;
    }
}