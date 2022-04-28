export const initialState = {
  movie: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "MOVIE_SELECTED":
      return {
        ...state,
        movie: [action.item],
      };
    default:
      return state;
  }
};

export default reducer;
