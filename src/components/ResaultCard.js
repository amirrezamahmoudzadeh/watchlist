import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import "./ResaultCard.scss";

function ResaultCard({ movie }) {
  const { addMovietoWatchlist, addMovietoWatched , watchlist ,watched} = useContext(GlobalContext);

  let storedWatchlist = watchlist.find((item)=> item.id === movie.id)
  let storedWatched = watched.find((item)=> item.id === movie.id)

  let watchlistDisabled = storedWatchlist ? true : false
  let watchedDisabled = storedWatched ? true : false

  const [details, setDetails] = useState("");
  const [video, setVideo] = useState("");
  useEffect(() => {
    if (movie) {
      axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=0dffa9cbec133e4908c290ef49559678&language=en-US`
      )
      .then((response) => response.data)
      .then((data) => setDetails(data))
      .catch(() => setDetails({}));

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=0dffa9cbec133e4908c290ef49559678&language=en-US`
      )
      .then((response) => response.data)
      .then((data) => setVideo(data.results[0].key))
      .catch(() => setVideo(""));
    }
   
  }, [movie]);

  const languages = []
  if (details) {
    details.spoken_languages.forEach((language) => {
      languages.push(language.english_name);
    });
  }

  const year = movie.release_date ? movie.release_date.substring(0, 4) : "";
  const runtime = details ? details.runtime : "";
  const genres = [];
  if (details) {
    details.genres.forEach((genre) => {
      genres.push(genre.name);
    });
  }

  return (
    <div>
      <div>
        <div className="outer-card">
          <div className="inner-card">
            <figure className="img-container">
              {movie.poster_path? <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
              /> : <div className='replacer'>{movie.original_title}</div>}
            </figure>
            <div className="information">
              <h1>{movie.title}</h1>
              <p>Year : {year}</p>
              <p>Language : {languages.join(' , ')}</p>
              <p>Runtime : {runtime} min</p>
              <p>Genres : {genres.join(" , ")} </p>
              <p>
                <span className="imdb">
                  <a
                    href={`https://www.imdb.com/title/${details.imdb_id}/?ref_=nv_sr_srsg_0`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IMDB
                  </a>
                </span>{" "}
                : {movie.vote_average} from {movie.vote_count} votes
              </p>
              <div className="trailer">
                <FontAwesomeIcon icon={faYoutube} className="i-youtube" />
                <a
                  href={`https://www.youtube.com/watch?v=${video}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Trailer
                </a>
              </div>
            </div>
          </div>
          <div className="summery">
            <p>Film Synopsis :{movie.overview}</p>
          </div>
          <div className="btns">
            <button onClick={() => addMovietoWatchlist(movie)} disabled={watchlistDisabled || watchedDisabled}>
              ADD TO WATCHLIST
            </button>
            <button onClick={() => addMovietoWatched(movie)} disabled={watchlistDisabled || watchedDisabled}>
              ADD TO WATCHED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResaultCard;
