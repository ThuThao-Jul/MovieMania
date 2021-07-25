import React, { useEffect, useState } from "react";

import MovieList from "../Components/MovieList";

let myKey = process.env.REACT_APP_API_KEY;

const MainPage = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const getData = async () => {
      let url = `https://api.themoviedb.org/3/trending/all/day?api_key=${myKey}`;
      const data = await fetch(url);
      const result = await data.json();
      console.log(result);
      setMovies(result.results);
    };
    getData();
  }, []);

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
};

export default MainPage;
