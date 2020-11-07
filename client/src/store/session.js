import Cookies from 'js-cookie';

const SET_USER = 'session/SET_USER';
const LOGOUT_USER = 'session/LOGOUT_USER';
export const RESET_STATE = 'session/RESET_STATE';
const SET_PAUSED_CARD = 'session/SET_PAUSED_CARD';
const SET_FLOW_TO_DELETE = 'session/SET_FLOW_TO_DELETE';

export const csrfToken = Cookies.get('XSRF-TOKEN');

export const setFlowToDelete = (flowId) => {
    return {
        type: SET_FLOW_TO_DELETE,
        flowId
    }
}

const stateReset = () => {
    return {
        type: RESET_STATE
    }
}

const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
}

export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
};

export const setPausedCard = (noteId) => {
    return {
        type: SET_PAUSED_CARD,
        noteId
    }
}

export const login = (email, password) => {
    return async dispatch => {
        const res = await fetch('/api/session', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken
            },
            body: JSON.stringify({ email, password })
        });

        res.data = await res.json();

        if (res.ok) {
            dispatch(setUser(res.data.user));
        }
        return res;
    };
};

export const signUp = (email, password, confirmPassword) => {
    return async dispatch => {
        const res = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken
            },
            body: JSON.stringify({ email, password, confirmPassword })
        });

        res.data = await res.json();

        if (res.ok) {
            dispatch(setUser(res.data.user));
        }

        return res;
    }
}

export const logout = () => {
    return async dispatch => {
        const res = await fetch('/api/session', {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': csrfToken
            }
        });

        res.data = await res.json();

        if (res.ok) {
            dispatch(logoutUser());
            dispatch(stateReset());
            try {
                localStorage.removeItem('state')
            } catch (e) {
                console.log(e);
            }
        }

        return res;
    }
}

const initialState = {
    id: null,
    pausedCard: null,
    flowToDelete: null
};

export default function sessionReducer(state = initialState, action) {
    const newState = Object.assign({}, state);
    switch(action.type) {
        case SET_USER:
            newState.id = action.user.id;
            return newState;
        case LOGOUT_USER:
            return initialState;
        case SET_PAUSED_CARD:
            newState.pausedCard = action.noteId;
            return newState;
        case SET_FLOW_TO_DELETE:
            newState.flowToDelete = action.flowId;
            return newState;
        default:
            return state;
    }
}