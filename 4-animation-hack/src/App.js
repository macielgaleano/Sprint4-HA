import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
// import Error from "./components/Error";
import About from "./components/About";
import SearchPage from "./components/SearchPage.jsx";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg d-flex justify-content-center fixed-top">
              <Link to="/" className="navbar-brand text-white mr-4">
                Anime Hack
              </Link>
              <Link className="nav-link text-white ml-4 mr-2" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
              <Link className="nav-link text-white ml-4 mr-2" to="/about">
                Acerca de <span className="sr-only">(current)</span>
              </Link>
              <Link className="nav-link text-white ml-4 mr-2" to="/contact">
                Contacto <span className="sr-only">(current)</span>
              </Link>
              <Link className="nav-link text-white ml-4 mr-2" to="/search">
                Buscar <span className="sr-only">(current)</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/search" component={SearchPage} />
      <Redirect from="/movie/:id" to="/pelicula/:id" />
      <Route path="/pelicula/:id">
        <MovieDetails></MovieDetails>
      </Route>

      {/* <Route path="*" exact={true} component={Error} /> */}
    </Router>
  );
}

export default App;
