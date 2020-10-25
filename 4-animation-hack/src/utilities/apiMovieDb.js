import { useEffect } from "react";

let ApiMovieDb = {
  GetMoviesForText: (url, textSearched) => {
    useEffect(() => {
      if (textSearched) {
        fetch(url)
          .then((data) => data.json())
          .then((data) => {
            return data.results;
          });
      }
      return () => {};
    }, [textSearched]);
  },
};

export default ApiMovieDb;
