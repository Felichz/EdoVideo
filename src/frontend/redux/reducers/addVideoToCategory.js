import getCategoryIndex from './utils/getCategoryIndex';
import { getVideoByIdInCategory } from './utils/getVideoById';

function handleAddVideoToCategory(state, { video, targetCategory }) {
    const categoryIndex = getCategoryIndex(state.categories, targetCategory);

    if (
        getVideoByIdInCategory(state.categories[categoryIndex], video.id) ===
        undefined
    ) {
        // Create a completly new state, with no equal references
        const newState = JSON.parse(JSON.stringify(state));

        // Afterwards, we push the video to the target category index
        const targetVideos = newState.categories[categoryIndex]['videos'];
        targetVideos.push({
            ...video,
        });

        return newState;
    } else {
        return state;
    }
}

export default handleAddVideoToCategory;
