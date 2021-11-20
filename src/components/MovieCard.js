import React, { useContext } from "react";

import { Link } from "react-router-dom";

import MovieControls from "./MovieControls";
import { GlobalContext } from "../context/GlobalState";

import "./MovieCard.scss";

function MovieCard({ movie, type}) {
  const { selectMovie } = useContext(GlobalContext);

  return (
    <div className="movie-card">
      <Link
        className="card-link"
        to={`/${movie.id}`}
        onClick={() => selectMovie(movie)}
      >
        <figure className="watch-img-container">
          <div className="overlay">{movie.original_title}</div>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
            />
          ) : (
            <div className="replacer">{movie.original_title}</div>
          )}
        </figure>
      </Link>
      <MovieControls type={type} movie={movie} />
    </div>
  );
}

export default MovieCard;
