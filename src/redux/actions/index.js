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