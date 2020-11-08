const SET_VIDEOS = 'videos/SET_VIDEOS';
const ADD_VIDEO = 'videos/ADD_VIDEO';

export const addVideo = (video) => {
    return {
        type: ADD_VIDEO,
        video
    }
}

export const setVideos = (videos) => {
    return {
        type: SET_VIDEOS,
        videos
    }
}

export default function videoReducer(state = {}, action) {
    const newState = Object.assign({}, state);
    switch(action.type) {
        case ADD_VIDEO:
            newState[action.video.id] = action.video;
            return newState;
        case SET_VIDEOS:
            for (const video of action.videos) {
                newState[video.id] = video;
            }
            return newState;
        default:
            return state;
    }
}