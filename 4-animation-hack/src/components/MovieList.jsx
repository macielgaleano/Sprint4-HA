// import reactDOM from "react-dom";
import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../assets/headerHack.scss";
import Rating from "./Rating";
import Movie from "./Movie";
import { formatUrl } from "../utilities/formatUrl";
import InfiniteScroll from "react-infinite-scroll-component";
import useFectchMoviesForText from "../hooks/useFetchMoviesForText";
import useFectchMoviesForRating from "../hooks/useFetchMoviesForRating";
import usefetchMoreMovies from "../hooks/useFetchMoreMovies";

const MovieList = ({ textSearched }) => {
  const [rating, setRating] = React.useState(2);
  const [movies, setMovies] = React.useState([]);
  const [page, setPage] = React.useState(1);

  function getRating(rating) {
    setRating(rating);
  }

  useFectchMoviesForText(
    formatUrl.Search(1, textSearched),
    textSearched,
    setMovies
  );

  useFectchMoviesForRating(formatUrl.Rating(1, rating), rating, setMovies);

  return (
    <div className="container-fluid">
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          {textSearched.length === 0 && <Rating getRating={getRating}></Rating>}
        </div>
        {movies.length > 0 && (
          <InfiniteScroll
            dataLength={movies.length}
            className="row d-flex justify-content-center"
            next={() => {
              usefetchMoreMovies(
                textSearched,
                page,
                movies,
                formatUrl,
                rating,
                setMovies,
                setPage
              );
            }}
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
