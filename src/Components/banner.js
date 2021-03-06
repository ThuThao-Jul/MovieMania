import React from "react";
import { FaStar } from 'react-icons/fa';
import { useHistory } from "react-router-dom";

const Banner = ({ data }) => {
  let source = `https://www.themoviedb.org/t/p/w1920_and_h1080_face/${data.backdrop_path}`;
  const history = useHistory();

  const handleClickMovie = (movie_ID) => {
    history.push(`/movie/${movie_ID}`);
  };

  return (
    <div>
      <div
        style={{
          borderRadius: "10px",
          border: "1px solid #393E46",
          marginBottom: "0.5rem",
          paddingTop: "0.5rem",
          height: "fit-content",
        }}
      >
        {
          <h6 style={{ textAlign: "center", color: "#FF0000" }}>
            {data.title ? data.title : data.name}
          </h6>
        }
        {
          <p style={{ textAlign: "center", color: "white", fontSize: "small" }}>
            <FaStar color="yellow" /> {data.vote_average}/10
          </p>
        }
        {/* {<p style={{textAlign:"center", color:"white", fontSize:"small"}}>{data.popularity}</p>} */}
      </div>
      <img
        src={source}
        alt="title or description"
        style={{ width: "100%" }}
        data-action="http://andyyou.github.io/react-coverflow/"
        onDoubleClick={() => handleClickMovie(data.id)}
      />
    </div>
  );
};

export default Banner;
