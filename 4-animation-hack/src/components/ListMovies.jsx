// import reactDOM from "react-dom";
import React, { useEffect } from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../assets/HeaderHack.scss";
import Stars from "./Stars";
import Movie from "./Movie";
import { formatUrl } from "../utilities/formatUrl";

const ListMovies = ({ textSearched }) => {
  const [countStars, setCountStars] = React.useState(2);
  const [movies, setMovies] = React.useState([]);

  function getStars(countStars) {
    setCountStars(countStars);
  }

  useEffect(() => {
    if (formatUrl.Rating(1, countStars)) {
      fetch(formatUrl.Rating(1, countStars))
        .then((data) => data.json())
        .then((data) => {
          setMovies(data.results);
        });
    }
  }, [countStars]);

  useEffect(() => {
    if (textSearched) {
      fetch(formatUrl.Search(1, textSearched))
        .then((data) => data.json())
        .then((data) => {
          setMovies(data.results);
        });
    }
  }, [textSearched]);

  return (
    <div className="container-fluid">
      <div className="row mt-3 d-flex justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          {textSearched.length === 0 && <Stars getStars={getStars}></Stars>}
        </div>

        {movies.length > 0 &&
          movies.map((item, index) => {
            return <Movie item={item}></Movie>;
          })}
      </div>
    </div>
  );
};

export default ListMovies;
