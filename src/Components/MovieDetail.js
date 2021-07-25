import React from "react";

const MovieDetail = ({ movieDetail }) => {
  return (
    <div>
      {movieDetail && (
        <h1>{movieDetail.title ? movieDetail.title : movieDetail.name}</h1>
      )}
    </div>
  );
};

export default MovieDetail;
