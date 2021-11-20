const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_Watchlist":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "ADD_Watched":
      return {
        ...state,
        watched: [action.payload, ...state.watched],
      };
    case "REMOVE_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(movie => movie.id !== action.payload),
      };
    case "REMOVE_WATCHED":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };
    case "MOVE_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload.id),
        watchlist: [action.payload, ...state.watchlist],
      };
    case "MOVE_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter((movie) => movie.id !== action.payload.id),
        watched: [action.payload, ...state.watched],
      };

    case "SELECT_MOVIE":
      return {
        ...state,
        selectedMovie : action.payload
      };
    default:
      return state;
  }
};
export default AppReducer;
