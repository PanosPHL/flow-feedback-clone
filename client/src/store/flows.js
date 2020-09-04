import { csrfToken } from './auth';

const ADD_FLOW = '/flows/ADD_FLOW';
const EDIT_FLOW_NAME = '/flows/EDIT_FLOW_NAME';
const SET_FLOWS = '/flows/SET_FLOWS';

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

const setFlows = (flows) => {
    return {
        type: SET_FLOWS,
        flows
    }
}

export const setUserFlows = (userId) => {
    return async dispatch => {
        const res = await fetch(`/api/users/${userId}/flows`);

        res.data = await res.json();

        if (res.ok) {
            dispatch(setFlows(res.data.flows));
        }
        return res;
    }
}

export default function flowReducer(state = [], action) {
    switch(action.type) {
        case ADD_FLOW:
            return [...state, action.flow];
        case SET_FLOWS:
            return action.flows;
        default:
            return state;
    }
}