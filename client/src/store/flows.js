import { csrfToken } from './auth';

const ADD_FLOW = '/flows/ADD_FLOW';
const EDIT_FLOW_NAME = '/flows/EDIT_FLOW_NAME';

const addNewFlow = (flow) => {
    return {
        type: ADD_FLOW,
        flow
    }
}

export const addFlow = (name, description, userId, video, categoryId) => {
    return async dispatch => {
        const res = await fetch('/api/flows', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken
            },
            body: JSON.stringify({name, description, userId, video, categoryId})
        });

        res.data = await res.json();

        if (res.ok) {
            dispatch(addNewFlow(res.data.flow));
        }
        return res;
    }
}

export default function flowReducer(state = [], action) {
    switch(action.type) {
        case ADD_FLOW:
            return [...state, action.flow];
        default:
            return state;
    }
}