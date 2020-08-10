export const getVideoByIdInCategory = (category, id) => {
  return category.videos.find((video) => {
    if (video.id === +id) {
      return true;
    }
    return false;
  });
};

const getVideoById = (categories, id) => {
  let foundVideo;

  categories.find((category) => {
    foundVideo = getVideoByIdInCategory(category, id);
    if (foundVideo) {
      return true;
    }
    return false;
  });

  return foundVideo;
};

export default getVideoById;
