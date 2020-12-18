import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import "./Movie.css";
// state 를 사용할 필요가 없다면 , class 로 선언할 필요가 없다.

function Movie({ year, title, summary, poster , genres }) {
    return (
      <div>
      <Link to={{
        pathname : "/movie-detail",
        state : {
          year,
          title,
          summary,
          poster,
          genres
        }
      }}>detail</Link>
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <p className="movie__summary">{summary}</p>
        </div>
      </div>
      </div>
    );
  }

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired
};

export default Movie;