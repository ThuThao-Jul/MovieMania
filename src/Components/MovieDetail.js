import React from "react";

const MovieDetail = ({ movieDetail, trailer }) => {
  return (
    <div>
      {movieDetail && (
        <img
          src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
        />
      )}
      {movieDetail && (
        <h1>{movieDetail.title ? movieDetail.title : movieDetail.name}</h1>
      )}
      {trailer ? (
        <iframe
          src={`https://www.youtube.com/embed/${trailer[0].key}`}
          width="800vw"
          height="500vh"
          frameBorder="0"
          allow="autoplay"
          allowFullScreen
          title="Youtube video player"
        />
      ) : (
        <p>This movie have no trailer</p>
      )}
    </div>
  );
};

export default MovieDetail;
