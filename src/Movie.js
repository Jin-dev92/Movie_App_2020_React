import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
// state 를 사용할 필요가 없다면 , class 로 선언할 필요가 없다.

function Movie({ year, title, summary, poster }) {
    return (
      <div class="movie">
        <img src={poster} alt={title} title={title} />
        <div class="movie__data">
          <h3 class="movie__title">{title}</h3>
          <h5 class="movie__year">{year}</h5>
          <p class="movie__summary">{summary}</p>
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