import React from "react";
import Axois from "axios";
import Movie from "../components/Movie";
import "./Home.css";
// import PropTypes from "prop-types";
/**
 * 
 *    React - state
 *    state 를 사용하지 않을 때는 function 으로 선언해도 무관하다. 사용하면 class 로 선언 후 React.Component 를 상속받는다.
 */
class Home extends React.Component {
  /*
  state = {
    count: 0
  };
  add = () => {
    //this.setState({count : this.state.count + 1});
    this.setState(current => ({count : current.count + 1})); // 이쪽이 좀더 좋은 표현
  };
  */
 state = {
   isLoading : true,
   movies: []
 };

 getMovies = async () => {
  const {
    data: {
      data: { movies }
    }
  } = await Axois.get(
    "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
  );

  //console.log(movie.data.data.movies);
  this.setState({movies, isLoading : false});
 }
 componentDidMount(){
  this.getMovies();
 };
 
 render() {
  const {isLoading , movies} = this.state;
  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading ...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map(movie => (
                     <Movie
                     key={movie.id}
                     id={movie.id}
                     year={movie.year}
                     title={movie.title}
                     summary={movie.summary.slice(0,100)}
                     poster={movie.medium_cover_image}
                     genres={movie.genres}
                     />
          ))}
        </div>
      )
      }
    </section>
  );
 }
}
 
export default Home;
