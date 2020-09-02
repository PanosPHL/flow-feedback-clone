export const loadState = () => {
    try {
        const preloadedState = localStorage.getItem("state");
        if (!preloadedState) {
            return undefined;
        }
        return JSON.parse(preloadedState);
    } catch (err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const stateToSave = JSON.stringify(state);
        localStorage.setItem('state', stateToSave);
    } catch (err) {

    }
}