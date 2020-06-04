import addVideoToCategory from './addVideoToCategory';
import removeVideoFromCategory from './removeVideoFromCategory';
import videoSearch from './videoSearch';
import getVideoById from './utils/getVideoById';

const reducer = (state, action) => {
    let video = undefined;
    
    switch (action.type) {
        case 'ADD_VIDEO_TO_CATEGORY':
            return addVideoToCategory(state, action);
        case 'REMOVE_VIDEO_FROM_CATEGORY':
            return removeVideoFromCategory(state, action);
        case 'LOGIN_REQUEST':

            return {
                ...state,
                user: action.formData
            }
        
        case 'REGISTER_REQUEST':

            return {
                ...state,
                user: action.formData
            }

        case 'LOGOUT_REQUEST':

            return {
                ...state,
                user: { email: '' }
            }
            
        case 'GET_VIDEO_SOURCE':

            video = getVideoById(state.categories, action.id);

            return {
                ...state,
                playingVideoSource: (video ? video.source : undefined)
            };

        default:
            return state
    }

};

export default reducer;