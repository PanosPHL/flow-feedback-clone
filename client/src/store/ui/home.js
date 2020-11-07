const TOGGLE_LOGIN_MODAL = 'ui/home/TOGGLE_LOGIN_MODAL';
const TOGGLE_SIGNUP_MODAL = 'ui/home/TOGGLE_SIGNUP_MODAL';

export const toggleLoginModal = () => {
    return {
        type: TOGGLE_LOGIN_MODAL
    }
}

export const toggleSignupModal = () => {
    return {
        type: TOGGLE_SIGNUP_MODAL
    }
}

initialState = {
    loginModal: false,
    signUpModal: false
}

export default function homeReducer(state = initialState, action) {
    const newState = Object.assign({}, state);
    switch(action.type) {
        case TOGGLE_LOGIN_MODAL:
            newState.loginModal = !newState.loginModal;
            return newState;
        case TOGGLE_SIGNUP_MODAL:
            newState.signUpModal = !newState.signUpModal;
            return newState;
        default:
            return state;
    }
}