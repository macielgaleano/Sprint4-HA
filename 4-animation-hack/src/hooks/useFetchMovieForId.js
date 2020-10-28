import { useEffect, useState } from "react";

const UseFetchMovieForId = (url) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        if (!movie) {
          setMovie(data);
        }
      });
  });
  return movie;
};

export default UseFetchMovieForId;
