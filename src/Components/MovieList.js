import React from "react";
import { useHistory } from "react-router-dom";

const MovieList = ({ movies }) => {
  const history = useHistory();
  const handleClickMovie = (movie_ID) => {
    history.push(`/movie/${movie_ID}`);
  };
  return (
    <>
      {movies &&
        movies.map((movie) => (
          <div>
            <h1 onClick={() => handleClickMovie(movie.id)}>{movie.title}</h1>
          </div>
        ))}
    </>
  );
};
export default MovieList;
