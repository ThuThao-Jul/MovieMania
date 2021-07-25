import React from "react";
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieDetail = ({ movieDetail, trailer }) => {
  return (
    <div className="container-fluid">
      <div className="movieDetail">
        {movieDetail && (
          <img
            src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
            alt=""
            className="movieDetailIMG"
          />
        )}

        {movieDetail && (
          <div className="movieDetailTitle">
            <h1 className="movieDetailGradient" style={{ fontSize: "3rem" }}>
              {movieDetail.title ? movieDetail.title : movieDetail.name}
            </h1>
            <span style={{ color: "yellow", fontSize: "1.5rem" }}>
              <FontAwesomeIcon icon={faStar} className="star" />
              {"  "}
              {movieDetail.vote_average}
            </span>
            <div>
              {movieDetail.genres.map((genres) => (
                <Badge
                  bg="danger"
                  style={{ margin: "10px 20px 10px 0", fontSize: "1rem" }}
                >
                  {genres.name}
                </Badge>
              ))}
            </div>
            <h4 style={{ color: "yellow" }}>Release date:</h4>
            {movieDetail.release_date}
            <div>
              <h4 style={{ color: "yellow" }}>Overview:</h4>
              <p>{movieDetail.overview}</p>
            </div>
            <div style={{ color: "yellow" }}>Duration:</div>
            <p>{movieDetail.runtime} minutes</p>
            <div>
              <h4 style={{ color: "yellow" }}>Production Company:</h4>
              {movieDetail.production_companies.map((company) => (
                <Badge
                  bg="primary"
                  style={{ margin: "10px 20px 10px 0", fontSize: "1rem" }}
                >
                  {company.name}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
      <br />
      <div className="trailerFlex">
        {trailer ? (
          <iframe
            src={`https://www.youtube.com/embed/${trailer[0].key}`}
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
            title="Youtube video player"
            className="trailerRES"
          />
        ) : (
          <p>This movie have no trailer</p>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
