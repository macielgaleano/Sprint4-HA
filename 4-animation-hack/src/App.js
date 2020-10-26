import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";
import HeaderHack from "./components/Header";
import MovieList from "./components/MovieList";

function App() {
  const [textSearched, setTextSearched] = React.useState("");

  function search(textSearched) {
    setTextSearched(textSearched);
  }

  return (
    <div className="App">
      <HeaderHack search={search}></HeaderHack>
      <MovieList textSearched={textSearched}></MovieList>
    </div>
  );
}

export default App;
