import getCategoryIndex from './utils/getCategoryIndex';

function handleRemoveVideoFromCategory(state, { id, targetCategory }) {
  // Create a completly new state, with no equal references
  const newState = JSON.parse(JSON.stringify(state));

  const categoryIndex = getCategoryIndex(newState['categories'], targetCategory);

  const category = newState['categories'][categoryIndex];

  // Filter the video to delete
  category['videos'] = category['videos'].filter((vid) => vid.id !== id);

  return newState;
}

export default handleRemoveVideoFromCategory;
