import { useEffect } from "react";

let ApiMovieDb = {
  GetMoviesForText: (url, textSearched, movies, setMovies) => {
    useEffect(() => {
      if (textSearched) {
        fetch(url)
          .then((data) => data.json())
          .then((data) => {
            setMovies(data.results);
          });
      }
    }, [url, textSearched]);
    return () => movies;
  },
  GetMoviesForRating: (url, countStars, movies, setMovies) => {
    useEffect(() => {
      if (url) {
        fetch(url)
          .then((data) => data.json())
          .then((data) => {
            setMovies(data.results);
          });
      }
      return () => movies;
    }, [url, countStars]);
  },
};

export default ApiMovieDb;
