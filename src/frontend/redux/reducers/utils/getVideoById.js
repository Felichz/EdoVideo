export const getVideoByIdInCategory = (category, id) => {
    return category.videos.find((video) => {
        if (video.id === parseInt(id)) {
            return true;
        }
    });
};

const getVideoById = (categories, id) => {
    let foundVideo = undefined;

    categories.find((category) => {
        foundVideo = getVideoByIdInCategory(category, id);
        if (foundVideo) {
            return true;
        }
    });

    return foundVideo;
};

export default getVideoById;
