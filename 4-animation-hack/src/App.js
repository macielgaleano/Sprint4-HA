import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/pelicula/:id">
        <MovieDetails></MovieDetails>
      </Route>
    </Router>
  );
}

export default App;
