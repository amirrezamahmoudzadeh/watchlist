import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

import "./Watchlist.scss";

const WatchList = () => {
  const { watchlist  } = useContext(GlobalContext);

  return (
    <div className="watchlist">
      <div className="movie-container">
        <div className="movie-heading">
          <h1>My Watchlist</h1>
        </div>
        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => {
              return (
                  <MovieCard movie={movie} type="watchlist" key={movie.id} />
              );
            })}
          </div>
        ) : (
          <h2 className="no-movie">No movie in your list , add some!</h2>
        )}
      </div>
    </div>
  );
};

export default WatchList;
