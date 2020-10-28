import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Switch,
} from "react-router-dom";
import useIsOnline from "./hooks/useIsOnline";
import Home from "./components/Home";
import Error from "./components/Error";
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
              <NavLink to="/" className="navbar-brand text-white mr-4">
                HACKFLIX
              </NavLink>
              <NavLink className="nav-NavLink text-white ml-4 mr-2" to="/">
                Home
              </NavLink>
              <NavLink className="nav-NavLink text-white ml-4 mr-2" to="/about">
                Acerca de
              </NavLink>
              <NavLink
                className="nav-NavLink text-white ml-4 mr-2"
                to="/contact"
              >
                Contacto
              </NavLink>
              <NavLink
                className="nav-NavLink text-white ml-4 mr-2"
                to="/search"
              >
                Buscar
              </NavLink>
              <NavLink
                className="nav-NavLink text-white ml-4 mr-2"
                to="/search"
              >
                {useIsOnline() && (
                  <div className="d-flex justify-content-center">
                    <p className="m-0 mr-1">Online</p>
                    <i className="m-0 fa fa-globe text-success"></i>
                  </div>
                )}
                {!useIsOnline() && (
                  <div className="d-flex justify-content-center">
                    <p className="m-0 mr-1">Offline</p>
                    <i className="m-0 fa fa-globe text-danger"></i>
                  </div>
                )}
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/search" component={SearchPage} />
        <Redirect from="/movie/:id" to="/pelicula/:id" />
        <Route path="/pelicula/:id">
          <MovieDetails></MovieDetails>
        </Route>

        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
