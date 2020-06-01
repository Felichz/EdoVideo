import addVideoToCategory from './addVideoToCategory';
import removeVideoFromCategory from './removeVideoFromCategory';

const reducer = (state, action) => {
    
    switch (action.type) {
        case 'ADD_VIDEO_TO_CATEGORY':
            return addVideoToCategory(state, action);
        case 'REMOVE_VIDEO_FROM_CATEGORY':
            return removeVideoFromCategory(state, action);
        default:
            return state
    }

};

export default reducer;