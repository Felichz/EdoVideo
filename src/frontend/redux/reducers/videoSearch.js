import levenshtein from '../../utils/levenshtein';

const videoSearch = (categories, query) => {
    let foundVideo = undefined;

    categories.find(category => {

        return category.videos.find(video => {
            if ( levenshtein(query, video.title) <= 5 ) {
                foundVideo = video;
                return true;
            }
        });

    });

    return foundVideo;
}

export default videoSearch;