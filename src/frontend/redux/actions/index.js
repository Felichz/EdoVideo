export const addVideoToCategory = (video, targetCategory) => ({
    type: 'ADD_VIDEO_TO_CATEGORY',
    video,
    targetCategory
});

export const removeVideoFromCategory = (id, targetCategory) => ({
    type: 'REMOVE_VIDEO_FROM_CATEGORY',
    id,
    targetCategory
});

export const loginRequest = formData => ({
    type: 'LOGIN_REQUEST',
    formData
});

export const registerRequest = formData => ({
    type: 'REGISTER_REQUEST',
    formData
})

export const logoutRequest = () => ({
    type: 'LOGOUT_REQUEST'
});

export const getVideoSource = id => ({
    type: "GET_VIDEO_SOURCE",
    id
})