import { useEffect } from "react";

const useFectchMoviesForText = (url, textSearched, setMovies) => {
  useEffect(() => {
    if (textSearched) {
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          setMovies(data.results);
        });
    }
  }, [url, textSearched, setMovies]);
};

export default useFectchMoviesForText;
