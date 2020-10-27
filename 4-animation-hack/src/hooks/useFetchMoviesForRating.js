import { useEffect } from "react";

const useFectchMoviesForRating = (url, rating, setMovies) => {
  useEffect(() => {
    if (rating) {
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          setMovies(data.results);
        });
    }
  }, [url, rating, setMovies]);
};

export default useFectchMoviesForRating;
