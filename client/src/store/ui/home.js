const TOGGLE_LOGIN_MODAL = 'ui/home/TOGGLE_LOGIN_MODAL';
const TOGGLE_SIGNUP_MODAL = 'ui/home/TOGGLE_SIGNUP_MODAL';
const TOGGLE_LEARN_MORE = 'ui/home/TOGGLE_LEARN_MORE';

export const toggleLearnMore = () => {
    return {
        type: TOGGLE_LEARN_MORE
    }
}

export const toggleLoginModal = () => {
    return {
        type: TOGGLE_LOGIN_MODAL
    }
}

export const toggleSignUpModal = () => {
    return {
        type: TOGGLE_SIGNUP_MODAL
    }
}

export const initialHomeState = {
    loginModal: false,
    signUpModal: false,
    learnMore: false
}

export default function homeReducer(state = initialHomeState, action) {
    const newState = Object.assign({}, state);
    switch(action.type) {
        case TOGGLE_LOGIN_MODAL:
            newState.loginModal = !newState.loginModal;
            return newState;
        case TOGGLE_SIGNUP_MODAL:
            newState.signUpModal = !newState.signUpModal;
            return newState;
        case TOGGLE_LEARN_MORE:
            newState.learnMore = !newState.learnMore;
            return newState;
        default:
            return state;
    }
}