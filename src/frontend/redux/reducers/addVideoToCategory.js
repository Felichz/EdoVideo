import getCategoryIndex from './utils/getCategoryIndex';

function handleAddVideoToCategory(state, {video, targetCategory}) {
    // Create a completly new state, with no equal references
    const newState = JSON.parse(JSON.stringify(state));

    const categoryIndex = getCategoryIndex(newState['categories'], targetCategory);

    // Afterwards, we push the video to the target category index
    const targetVideos = newState['categories'][categoryIndex]['videos'];
    targetVideos.push({
        ...video,
        id: targetVideos.length
    });

    return newState;
}

export default handleAddVideoToCategory;