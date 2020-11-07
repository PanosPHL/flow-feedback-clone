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

        if (res.ok) {
            dispatch(setFlowVid(res.data));
        }

        return res;
    }
}

const initialState = {
    id: null,
    title: '',
    url: '',
    duration: '',
    thumbnail: ''
};

export default function newFlowReducer(state = initialState, action) {
    switch(action.type) {
        case SET_FLOW_VID:
            return action.flow;
        default:
            return state;
    }
}