import { useState, useEffect } from "react";

let ApiMovieDb = {
  GetMoviesForText: (url, textSearched) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      if (textSearched) {
        fetch(url)
          .then((data) => data.json())
          .then((data) => {
            setMovies(data.results);
          });
      }
    }, [url, textSearched]);
    return movies;
  },
  GetMoviesForRating: ({ url, countStars }) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      if (url) {
        fetch(url)
          .then((data) => data.json())
          .then((data) => {
            setMovies(data.results);
          });
      }
    }, [url, countStars]);
    return movies;
  },
};

export default ApiMovieDb;
