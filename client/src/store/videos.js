const SET_VIDEOS = 'videos/SET_VIDEOS';

export const setVideos = (videos) => {
    return {
        type: SET_VIDEOS,
        videos
    }
}

export default function videoReducer(state = {}, action) {
    const newState = Object.assign({}, state);
    switch(action.type) {
        case SET_VIDEOS:
            for (const video of action.videos) {
                newState[video.id] = video;
            }
            return newState;
        default:
            return state;
    }
}