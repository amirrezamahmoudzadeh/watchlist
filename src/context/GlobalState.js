import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
  watched:  localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
  selectedMovie : localStorage.getItem('selectedMovie') ? JSON.parse(localStorage.getItem('selectedMovie')) : {},
};

export const GlobalContext = createContext(initialState);

const GlobalProvider = (props) => {
  const [state, dispath] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
    localStorage.setItem("selectedMovie", JSON.stringify(state.selectedMovie));
  }, [state]);

  const addMovietoWatchlist = (movie) => {
    dispath({ type: "ADD_Watchlist", payload: movie });
  };

  const addMovietoWatched = (movie) => {
    dispath({ type: "ADD_Watched", payload: movie });
  };

  const removeFromWatchlist = (id)=>{
    dispath({type : "REMOVE_WATCHLIST" , payload : id})
  }
  
  const removeFromWatched = (id)=>{
    dispath({type : "REMOVE_WATCHED" , payload : id})
  }

  const moveToWatchlist = (movie) => {
    dispath({type : "MOVE_WATCHLIST" , payload : movie})
  }

  const moveToWatched = (movie) => {
    dispath({type : "MOVE_WATCHED" , payload : movie})
  }

  const selectMovie = (movie) => {
    dispath({type : "SELECT_MOVIE" , payload : movie})
  }

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        selectedMovie: state.selectedMovie,
        addMovietoWatchlist,
        addMovietoWatched,
        removeFromWatchlist,
        removeFromWatched,
        moveToWatchlist,
        moveToWatched,
        selectMovie,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
