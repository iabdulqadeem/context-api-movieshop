import React from "react";
import { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MoviesList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
    <h1>Available Movies</h1>

      {movies && movies.map(movie => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
};

export default MoviesList;
