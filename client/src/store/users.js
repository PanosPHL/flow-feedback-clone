const SET_USERS = 'users/SET_USERS';

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export default function userReducer(state = {}, action) {
    const newState = Object.assign({}, state);
    switch(action.type) {
        case SET_USERS:
            for (const user of action.users) {
                newState[user.id] = user;
            }
            return newState;
        default:
            return state;
    }
}