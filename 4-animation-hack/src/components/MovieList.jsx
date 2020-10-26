// import reactDOM from "react-dom";
import React, { useEffect } from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../assets/HeaderHack.scss";
import Stars from "./Stars";
import Movie from "./Movie";
import { formatUrl } from "../utilities/formatUrl";
// import ApiMovieDb from "../utilities/apiMovieDb";

const MovieList = ({ textSearched }) => {
  const [countStars, setCountStars] = React.useState(2);
  const [movies, setMovies] = React.useState([]);
  const [scrolling, setScrolling] = React.useState(false);
  const [scrollTop, setScrollTop] = React.useState(0);
  const [page, setPage] = React.useState(1);

  function getStars(countStars) {
    setCountStars(countStars);
  }

  // ApiMovieDb.GetMoviesForText(formatUrl.Search(1, textSearched), textSearched);
  // ApiMovieDb.GetMoviesForRating(formatUrl.Rating(1, countStars), countStars);

  useEffect(() => {
    if (formatUrl.Rating(1, countStars)) {
      fetch(formatUrl.Rating(page, countStars))
        .then((data) => data.json())
        .then((data) => {
          setMovies(data.results);
        });
    }
  }, [countStars, page]);

  useEffect(() => {
    if (textSearched) {
      fetch(formatUrl.Search(page, textSearched))
        .then((data) => data.json())
        .then((data) => {
          setMovies(data.results);
        });
    }
  }, [textSearched, page]);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(window.innerHeight < scrollTop + 200);
    };

    window.addEventListener("scroll", onScroll);
    if (scrolling) {
      setPage(page + 1);
      if (formatUrl.Rating(page, countStars)) {
        fetch(formatUrl.Rating(page, countStars))
          .then((data) => data.json())
          .then((data) => {
            setMovies([...movies, data.results]);
          });
      }
      if (scrolling && textSearched.length > 0) {
        fetch(formatUrl.Search(page, textSearched))
          .then((data) => data.json())
          .then((data) => {
            setMovies(...movies, data.results);
          });
      }
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop, page, scrolling, textSearched, countStars, movies]);

  return (
    <div className="container-fluid">
      <div className="row mt-3 d-flex justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          {textSearched.length === 0 && <Stars getStars={getStars}></Stars>}
        </div>
        <div className="row d-flex justify-content-center">
          {movies.length > 0 &&
            movies.map((item, index) => {
              return <Movie item={item} key={item.id}></Movie>;
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
