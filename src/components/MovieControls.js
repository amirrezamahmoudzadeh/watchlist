import { faEye, faEyeSlash, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

function MovieControls({ movie, type }) {
  const { removeFromWatchlist ,  removeFromWatched , moveToWatchlist , moveToWatched} = useContext(GlobalContext);

  return (

    
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn">
            <FontAwesomeIcon icon={faEye} onClick={()=> moveToWatched(movie)} />
          </button>

          <button className="ctrl-btn" onClick={()=>removeFromWatchlist(movie.id)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn">
            <FontAwesomeIcon icon={faEyeSlash} onClick={()=> moveToWatchlist(movie)} />
          </button>

          <button className="ctrl-btn" onClick={()=>removeFromWatched(movie.id)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </>
      )}

    </div>
  );
}

export default MovieControls;
