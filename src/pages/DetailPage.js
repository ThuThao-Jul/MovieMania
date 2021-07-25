import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import MovieDetail from "../Components/MovieDetail";

let myKey = process.env.REACT_APP_API_KEY;

const DetailPage = () => {
  const params = useParams();
  const movie_ID = params.id;
  const [movieDetail, setMovieDetail] = useState();
  const [trailer, setTrailer] = useState();
  
  useEffect(() => {
    const getMovieDetail = async () => {
      let url = `https://api.themoviedb.org/3/movie/${movie_ID}?api_key=${myKey}`;
      const data = await fetch(url);
      const res = await data.json();
      console.log("Detail", res);
      setMovieDetail(res);
    };
    const getTrailer = async () => {
      let url = `https://api.themoviedb.org/3/movie/${movie_ID}/videos?api_key=${myKey}`;
      const data = await fetch(url);
      const res = await data.json();
      setTrailer(res.results);
    };
    getMovieDetail();
    getTrailer();
  }, [movie_ID]);

  return (
    <div>
      <MovieDetail movieDetail={movieDetail} trailer={trailer} />
    </div>
  );
};
export default DetailPage;
