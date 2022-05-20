const setSortBy = chosenName => ({
    type: 'SET_SORT_BY',
    payload: chosenName,
});

const setCategory = categoryIndex => ({
    type: 'SET_CATEGORY',
    payload: categoryIndex,
});
