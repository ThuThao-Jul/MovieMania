import React from "react";
import { useHistory } from "react-router-dom";

let IMG = process.env.REACT_APP_IMAGE;

const MovieList = ({ movies }) => {
  const history = useHistory();
  const handleClickMovie = (movie_ID) => {
    history.push(`/movie/${movie_ID}`);
  };
  return (
    <div className="slider">
      {movies &&
        movies.map((movie) => (
          <div onClick={() => handleClickMovie(movie.id)}>
            <h1>{movie.title ? movie.title : movie.name}</h1>
            <img src={`${IMG}${movie.backdrop_path}`} alt="" />
          </div>
        ))}
    </div>
  );
};
export default MovieList;
