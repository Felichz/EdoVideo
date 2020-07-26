const getVideoById = (categories, id) => {
    let foundVideo = undefined;

    categories.find((category) => {
        return category.videos.find((video) => {
            if (video.id === parseInt(id)) {
                console.log(video);
                foundVideo = video;
                return true;
            }
        });
    });

    return foundVideo;
};

export default getVideoById;
