import addVideoToCategory from './addVideoToCategory';
import removeVideoFromCategory from './removeVideoFromCategory';

const reducer = (state, action) => {
    
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
            
        default:
            return state
    }

};

export default reducer;