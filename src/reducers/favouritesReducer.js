const favouritesReducer = (favs, action) => {
  // add or remove from list
  if (action.type === 'TOGGLE_FAVOURITE') {
    if (favs.includes(action.payload)) {
      return favs.filter(id => id !== action.payload);
    } else {
      return [...favs, action.payload];
    }
  }
  return favs;
};

export default favouritesReducer;
