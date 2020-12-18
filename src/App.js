import React from "react";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
function App(params) {
  return (
    <HashRouter>
      <Navigation component={Navigation}/>
      <Route path="/" exact={true} component={Home}>
        {/* <h1>Home</h1> */}
      </Route>
      <Route path="/about" component={About}>
        {/* <h1>About</h1> */}
      </Route>
      {/* <Route path="/introduction" component={Introduction}> */}
        {/* <h1>Introduction</h1> */}
      {/* </Route> */}
      <Route path="/movie-detail" component={Detail}></Route>
    </HashRouter>
    );
}


export default App;

