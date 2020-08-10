function getCategoryIndex(categoryArray, targetCategory) {
  // Search for the index of the targetCategory in the state
  let categoryIndex = categoryArray.findIndex((category) => category.title === targetCategory);

  // If the category doesn't exists, then we create it
  if (categoryIndex === -1) {
    // We push a new category
    categoryArray.push({
      title: targetCategory,
      videos: [],
    });

    // And calculate the index of the new category
    categoryIndex = categoryArray.length - 1;
  }

  return categoryIndex;
}

export default getCategoryIndex;
