import Cookies from 'js-cookie';
import { setUserNotes } from './notes';
import { setUserFlows } from './flows';

export const SET_USER = 'auth/SET_USER';
export const LOGOUT_USER = 'auth/LOGOUT_USER';

export const csrfToken = Cookies.get('XSRF-TOKEN');

export const logoutUser = () => {
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
            dispatch(setUserFlows(res.data.user.id));
            dispatch(setUserNotes(res.data.user.id));
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
            try {
                localStorage.removeItem('state')
            } catch (e) {
                console.log(e);
            }
        }

        return res;
    }
}

export default function authReducer(state = {}, action) {
    switch(action.type) {
        case SET_USER:
            return action.user;
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
}