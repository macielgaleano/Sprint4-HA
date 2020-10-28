import React from "react";
import Search from "./Search";
import Movie from "./Movie";
import { formatUrl } from "../utilities/formatUrl";
import useFectchMoviesForText from "../hooks/useFetchMoviesForText";
import InfiniteScroll from "react-infinite-scroll-component";
import usefetchMoreMovies from "../hooks/useFetchMoreMovies";

const SearchPage = (props) => {
  const [movies, setMovies] = React.useState([]);
  const [textSearched, setTextSearched] = React.useState("");
  const [page, setPage] = React.useState(1);

  function handleSearch(textSearched) {
    setTextSearched(textSearched);
  }

  useFectchMoviesForText(
    formatUrl.Search(1, textSearched),
    textSearched,
    setMovies
  );
  return (
    <div className="">
      <div className="box-search">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <h1 className="text-center mt-4 mb-5 text-white">
                Busca tu pelicula favorita!
              </h1>
              <Search handleSearch={handleSearch}></Search>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mt-4 d-flex justify-content-center">
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
                  null,
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
    </div>
  );
};

export default SearchPage;
