const usefetchMoreMovies = (
  textSearched,
  page,
  movies,
  formatUrl,
  rating,
  setMovies,
  setPage
) => {
  if (textSearched.length > 0) {
    setPage((page) => page + 1);
    fetch(formatUrl.Search(page, textSearched))
      .then((data) => data.json())
      .then((data) => {
        setMovies([...movies, ...data.results]);
      });
  } else {
    setPage((page) => page + 1);
    fetch(formatUrl.Rating(page, rating))
      .then((data) => data.json())
      .then((data) => {
        setMovies([...movies, ...data.results]);
      });
  }
};

export default usefetchMoreMovies;
