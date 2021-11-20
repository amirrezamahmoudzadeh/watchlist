import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

import "./Watchlist.scss";

const Watched = () => {
  const { watched  } = useContext(GlobalContext);

  return (
    <div className="watched">
      <div className="movie-container">
        <div className="movie-heading">
          <h1>My Watched Movies</h1>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => {
              return (
                  <MovieCard movie={movie} type="watched" key={movie.id}/>
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

export default Watched;
