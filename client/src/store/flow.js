import { csrfToken } from './auth';

export const SET_FLOW_VID = '/flow/SET_FLOW_VID';

export const setFlowVid = (flow) => {
    return {
        type: SET_FLOW_VID,
        flow
    }
}

export const setVid = (url) => {
    return async dispatch => {
        const res = await fetch('/api/flows', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken
            },
            body: JSON.stringify({url})
        })
        res.data = await res.json();

        console.log(res.data);
    }
}

export default function newFlowReducer(state = {}, action) {
    switch(action.type) {
        case SET_FLOW_VID:
            return action.flow;
        default:
            return state;
    }
}