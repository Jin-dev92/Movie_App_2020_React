import React from "react";
import Axois from "axios";
import Movie from "./Movie";
// import PropTypes from "prop-types";
/**
 * 
 *    React - state
 *    state 를 사용하지 않을 때는 function 으로 선언해도 무관하다. 사용하면 class 로 선언 후 React.Component 를 상속받는다.
 */
class App extends React.Component {
  /*
  state = {
    count: 0
  };
  add = () => {
    //this.setState({count : this.state.count + 1});
    this.setState(current => ({count : current.count + 1})); // 이쪽이 좀더 좋은 표현
  };
  minus = () => {
    this.setState({count : this.state.count - 1});
  };
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  };
  */
 state = {
   isLoading : true,
   movies: []
 };

 getMovies = async () => {
  const {data : {
          data : {movies}
  }
} = await Axois.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");

  //console.log(movie.data.data.movies);
  this.setState({movies, isLoading : false});
  console.log(movies);
 }
 componentDidMount(){
  this.getMovies();
 };
 
 render() {
   const {isLoading , movies} = this.state;
   return (
     <div>
       {isLoading ? "Loading .. " : movies.map(movie => {
         console.log(movie);
         return (
         <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}/>
         );
       })}
     </div>
   )
 }
}
 
export default App;
