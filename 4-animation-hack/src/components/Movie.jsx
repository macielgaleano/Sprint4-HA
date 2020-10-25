// import reactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../assets/HeaderHack.scss";
import Stars from "./Stars";
import ModalMovie from "./ModalMovie";
import ApiMovieDb from "../utilities/apiMovieDb";

const Movie = ({ textSearched, movies, setMovies }) => {
  const [countStars, setCountStars] = React.useState(2);
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function getStars(countStars) {
    setCountStars(countStars);
  }

  let url =
    "https://api.themoviedb.org/3/search/movie?api_key=b67547c76e0dfd494f62c63f827e73f7&query=" +
    textSearched.split(" ").join("+") +
    "&per_page=10$page=" +
    page;

  // GetmoviesFromApiForDiscover();
  // GEtMoviesFromApiForStars(url, countStars)

  textSearched.length > 0 &&
    setMovies((url, textSearched) =>
      ApiMovieDb.GetMoviesForText(url, textSearched)
    );

  return (
    <div className="container-fluid">
      <div className="row mt-3 d-flex justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          {textSearched.length > 0 && <Stars getStars={getStars}></Stars>}
        </div>

        {movies.length > 0 &&
          movies.map((item, index) => {
            return (
              <div key={index} className="col-6 col-md-2 col-sm-4 mt-4 ">
                <img
                  className="img-fluid image"
                  src={"https://image.tmdb.org/t/p/original" + item.poster_path}
                  alt=""
                  onClick={handleShow}
                />
                <ModalMovie
                  show={show}
                  handleClose={handleClose}
                  item={item}
                ></ModalMovie>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Movie;
