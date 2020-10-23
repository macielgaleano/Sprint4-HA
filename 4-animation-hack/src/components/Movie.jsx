// import reactDOM from "react-dom";
import React, { useState } from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../assets/HeaderHack.scss";
import movies from "../models/movies.json";
import Stars from "./Stars";
import ModalMovie from "./ModalMovie";

const Movie = ({ textSearched }) => {
  const [countStars, setCountStars] = React.useState(2);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function getStars(countStars) {
    setCountStars(countStars);
  }

  return (
    <div className="container">
      <div className="row mt-3 d-flex justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          <Stars getStars={getStars}></Stars>
        </div>

        {movies.map((item, index) => {
          if (
            (item.title.includes(textSearched) ||
              item.title.toLowerCase().includes(textSearched) ||
              item.title.toUpperCase().includes(textSearched)) &&
            item.vote_average > countStars * 2
          ) {
            return (
              <div key={index} className="col-6 col-md-4 col-sm-4 mt-4 ">
                <img
                  className="img-fluid"
                  src={item.poster_path}
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
          }
        })}
      </div>
    </div>
  );
};

export default Movie;
