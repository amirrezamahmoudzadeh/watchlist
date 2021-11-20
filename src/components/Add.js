import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ResaultCard from "./ResaultCard";

import "./Add.scss";

const Add = () => {
  const [query, setQuery] = useState("");
  const [resaults, setResaults] = useState([]);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const inputHandler = (event) => {
    setQuery(event.target.value);

    const searchQuery = `https://api.themoviedb.org/3/search/movie?api_key=0dffa9cbec133e4908c290ef49559678&language=en-US&query=${event.target.value}&page=1&include_adult=false`;

    if (event.target.value) {
      axios
      .get(searchQuery)
      .then((response) => response.data)
      .then((data) => setResaults(data.results.slice(0,5)))
      .catch(() => setResaults([]));

    }
    
  };

  return (
    <div className="add-page">
      <div className="input-wrapper">
        <input
          type="text"
          value={query}
          placeholder="search for a movie"
          onChange={inputHandler}
          ref={inputRef}
        />
      </div>
      {resaults.map((movie) => {
        return (
            <ResaultCard key={movie.id} movie={movie} />
        );
      })}
    </div>
  );
};

export default Add;
