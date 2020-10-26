import MovieModal from "./MovieModal";
import React, { useState } from "react";

const Movie = ({ item }) => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      key={getRandomInt(1, 100000000)}
      className="col-6 col-md-2 col-sm-4 mt-4 "
    >
      <img
        className="img-fluid image"
        src={"https://image.tmdb.org/t/p/original" + item.poster_path}
        alt=""
        onClick={handleShow}
      />
      <MovieModal
        show={show}
        handleClose={handleClose}
        item={item}
      ></MovieModal>
    </div>
  );
};

export default Movie;
