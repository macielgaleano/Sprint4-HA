import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";
import HeaderHack from "./components/Header";
import Movie from "./components/Movie";

function App() {
  const [textSearched, setTextSearched] = React.useState("");
  const [movies, setMovies] = React.useState([]);

  function search(textSearched) {
    setTextSearched(textSearched);
  }

  return (
    <div className="App">
      <HeaderHack search={search}></HeaderHack>
      <Movie
        textSearched={textSearched}
        setMovies={setMovies}
        movies={movies}
      ></Movie>
    </div>
  );
}

export default App;
