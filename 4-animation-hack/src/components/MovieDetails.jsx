import React from "react";
import { useParams } from "react-router-dom";
import { formatUrl } from "../utilities/formatUrl";
import useFetchMovieForId from "../hooks/useFetchMovieForId";
import { Link } from "react-router-dom";
import "../assets/spinner.scss";

const MovieDetails = () => {
  const { id } = useParams();
  let movieAux = useFetchMovieForId(formatUrl.Id(id));
  return (
    <div>
      {!movieAux && (
        <div className="text">
          <span className="txt">H</span>
          <span className="txt1">A</span>
          <span className="txt2">C</span>
          <span className="txt3">K</span>
          <span className="txt4">F</span>
          <span className="txt5">L</span>
          <span className="txt6">I</span>
          <span className="txt6">X</span>
        </div>
      )}

      {/* {window.setTimeout(() => {
        !movieAux == null && alert("pelicula no encontrada, volviendo a home");
        !movieAux &&
          window.setTimeout(() => {
            return <Redirect to="/"></Redirect>;
          }, 3000);
      }, 5000)} */}
      {movieAux && (
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <img
                  className="img-fluid"
                  src={
                    "https://image.tmdb.org/t/p/original" + movieAux.poster_path
                  }
                  alt=""
                />
              </div>
              <div className="col-8 row d-flex align-items-start ">
                <div className="row r">
                  <h1 className="col-12 display-4 text-white ">
                    {movieAux.title}
                  </h1>
                  <h2 className="col-12 display-5 mb-3 mt-3 text-white">
                    Titulo original:
                    {movieAux.original_title}{" "}
                  </h2>
                  <hr />
                  <h3 className="col-12 mt-3 text-white lead text-justify">
                    Sinopsis:{" "}
                  </h3>
                  <p className="col-12 mt-2 mb-2 text-white">
                    {movieAux.overview}
                  </p>

                  <Link to="/" className="ml-3 mt-2 btn btn-primary">
                    Volver a home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
