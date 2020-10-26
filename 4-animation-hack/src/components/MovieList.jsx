// import reactDOM from "react-dom";
import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../assets/HeaderHack.scss";
import Stars from "./Stars";
import Movie from "./Movie";
import { formatUrl } from "../utilities/formatUrl";
import InfiniteScroll from "react-infinite-scroll-component";
import ApiMovieDb from "../utilities/apiMovieDb";

const MovieList = ({ textSearched }) => {
  const [countStars, setCountStars] = React.useState(2);
  const [movies, setMovies] = React.useState([]);
  const [page, setPage] = React.useState(1);

  function getStars(countStars) {
    setCountStars(countStars);
  }

  ApiMovieDb.GetMoviesForText(
    formatUrl.Search(1, textSearched),
    textSearched,
    movies,
    setMovies
  );
  ApiMovieDb.GetMoviesForRating(
    formatUrl.Rating(1, countStars),
    countStars,
    movies,
    setMovies
  );

  let fetchMoreData = () => {
    if (textSearched.length > 0) {
      setPage((page) => page + 1);
      fetch(formatUrl.Search(page, textSearched))
        .then((data) => data.json())
        .then((data) => {
          setMovies([...movies, ...data.results]);
        });
    } else {
      setPage((page) => page + 1);
      fetch(formatUrl.Rating(page, countStars))
        .then((data) => data.json())
        .then((data) => {
          setMovies([...movies, ...data.results]);
        });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          {textSearched.length === 0 && <Stars getStars={getStars}></Stars>}
        </div>

        {movies.length > 0 && (
          <InfiniteScroll
            dataLength={movies.length}
            className="row d-flex justify-content-center"
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {movies.length > 0 &&
              movies.map((item, index) => {
                return <Movie item={item} key={index}></Movie>;
              })}
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

export default MovieList;
