export let formatUrl = {
  Search: (page, textSearched) => {
    return (
      "https://api.themoviedb.org/3/search/movie?api_key=b67547c76e0dfd494f62c63f827e73f7&query=" +
      textSearched.split(" ").join("+") +
      "&page=" +
      page
    );
  },

  Rating: (page, countStars) => {
    return (
      "https://api.themoviedb.org/3/discover/movie?api_key=b67547c76e0dfd494f62c63f827e73f7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=" +
      countStars * 2 +
      "&page=" +
      page
    );
  },
  Id: (id) => {
    return (
      "https://api.themoviedb.org/3/movie/" +
      id +
      "?api_key=b67547c76e0dfd494f62c63f827e73f7&language=en-US"
    );
  },
};
