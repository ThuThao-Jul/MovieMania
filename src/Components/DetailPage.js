import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

let myKey = process.env.REACT_APP_API_KEY;
const DetailPage = () => {
  const params = useParams();
  const movie_ID = params.id;
  const [movieDetail, setMovieDetail] = useState();
  useEffect(() => {
    const getMovieDetail = async () => {
      let url = `https://api.themoviedb.org/3/movie/${movie_ID}?api_key=${myKey}`;
      const data = await fetch(url);
      const res = await data.json();
      console.log("movie detail", res);
      setMovieDetail(res);
    };
    getMovieDetail();
  }, [movie_ID]);
  return <div>{movieDetail && <h1>{movieDetail.title}</h1>}</div>;
};
export default DetailPage;
