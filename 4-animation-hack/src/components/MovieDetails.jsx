import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { formatUrl } from "../utilities/formatUrl";
import useFetchMovieForId from "../hooks/useFetchMovieForId";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();

  let movieAux = useFetchMovieForId(formatUrl.Id(id));
  movieAux && console.log(movieAux.id);

  return (
    <div>
      {movieAux && (
        <div className="blur-spinner">
          <Spinner
            className="spinner"
            variant="light"
            size="100"
            animation="border"
          />
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              className="image-fluid"
              src={async (movieAux) => {
                if (await movieAux) {
                  return (
                    "https://image.tmdb.org/t/p/original" +
                    movieAux.backdrop_path
                  );
                }
              }}
              alt=""
            />
          </div>
          <Link to="/" className="btn btn-primary">
            Volver a home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
