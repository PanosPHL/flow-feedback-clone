export const loadState = () => {
    try {
        const preloadedState = localStorage.getItem("state");
        if (!preloadedState) {
            return {};
        }
        return JSON.parse(preloadedState);
    } catch (err) {
        return {};
    }
}

export const saveState = (state) => {
    try {
        const stateToSave = JSON.stringify(state);
        localStorage.setItem('state', stateToSave);
    } catch (err) {

    }
}