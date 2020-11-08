const SET_CATEGORIES = 'categories/SET_CATEGORIES';

export const setCategories = (categories) => {
    return {
        type: SET_CATEGORIES,
        categories
    }
}

export default function categoryReducer(state = {}, action) {
    const newState = Object.assign({}, state);
    switch(action.type) {
        case SET_CATEGORIES:
            for (const category of action.categories) {
                newState[category.id] = category;
            }
            return newState;
        default:
            return state;
    }
}