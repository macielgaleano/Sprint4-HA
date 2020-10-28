import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ item }) => {
  return (
    <Link
      to={"/pelicula/" + item.id}
      key={item.id}
      className="col-6 col-md-2 col-sm-4 mt-4 "
    >
      <img
        className="img-fluid image"
        src={"https://image.tmdb.org/t/p/original" + item.poster_path}
        alt=""
      />
    </Link>
  );
};

export default Movie;
