import ModalMovie from "./ModalMovie";
import React from "react";

const Movie = ({ item, show, handleClose, handleShow }) => {
  return (
    <div key={item.id} className="col-6 col-md-2 col-sm-4 mt-4 ">
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
};

export default Movie;
