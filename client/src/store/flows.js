import { csrfToken } from './auth';

export const ADD_FLOW = '/flows/ADD_FLOW';

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

        console.log(res);
        res.data = await res.json();
        console.log(res);
        if (res.ok) {
            console.log(res.data);
        }

        // return res;
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