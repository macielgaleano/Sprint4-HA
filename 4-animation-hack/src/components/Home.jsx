import React from "react";
import HeaderHack from "./Header";
import MovieList from "./MovieList";

function Home() {
  const [textSearched, setTextSearched] = React.useState("");

  function handleSearch(textSearched) {
    setTextSearched(textSearched);
  }
  return (
    <div className="App">
      <HeaderHack handleSearch={handleSearch}></HeaderHack>
      <MovieList textSearched={textSearched}></MovieList>
    </div>
  );
}

export default Home;
