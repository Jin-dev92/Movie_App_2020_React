import React from "react";
import PropTypes from "prop-types";

// state 를 사용할 필요가 없다면 , class 로 선언할 필요가 없다.

function Movie({id , year , title , summary , poster}) {
    return (
    <div>
        <h4>{title}</h4>
        <img src={poster}></img>
    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;