import React from "react";
// import PropTypes from "prop-types";

// function Food ({name, picture , rating}) {
  
//   return (
//     <div>
//       <h2>I like {name}</h2>
//       <img src={picture}></img>
//       <h1>{rating} / 5.0</h1>
//     </div>
//     );
//   }

//   Food.propTypes ={
//     name : PropTypes.string.isRequired,
//     picture : PropTypes.string.isRequired,
//     rating : PropTypes.number
//   };
  
//   // function Food ({fav}) { // {fav} = props.fav
//   //   console.log(props.fav);
//   //   return <h1></h1>;
//   //   }

// //  const friends = ["강우진","김덕화","신동훈","장태열"];
// //friends.map(function (friend) {
//   // return friend + "님";
//   //console.log(friend);
//    //});

//    const foodILike = [
//     {
//       id: 1,
//       name: "Kimchi",
//       image:
//         "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
//       rating : 4.2
//     },
//     {
//       id: 2,
//       name: "Samgyeopsal",
//       image:
//         "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
//         rating : 3.8,
//     },
//     {
//       id: 3,
//       name: "Bibimbap",
//       image:
//         "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
//         rating : 2.4
//     },
//     {
//       id: 4,
//       name: "Doncasu",
//       image:
//         "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
//         rating : 4.9,
//     },
//     {
//       id: 5,
//       name: "Kimbap",
//       image:
//         "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
//         rating : 5.5,
//     }
//   ];

// function renderFood(dish) {  
//   console.log(dish);
//   return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
// }
// function App() {
//   return (
//     <div className="App">
//         <h1>hello!!</h1>
//         {/* <Food 
//           fav="kimchi" 
//           something = {"123123"} 
//           insa = {["hello", "안녕", "boujour",true,2,3,4]}/>
//         <Food 
//           fav="빵"/>
//         <Food 
//           fav="라면"/> */}
//           {/* {foodILike.map(dish => <Food name = {dish.name} picture={dish.image}/>)} */}
//           {foodILike.map(renderFood)}
//     </div>
//   );
// }
/**
 * 
 *    React - state
 * 
 */
class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState({count : this.state.count + 1});
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
}
export default App;
