import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";
import HeaderHack from "./components/Header";
import ListMovies from "./components/ListMovies";

function App() {
  const [textSearched, setTextSearched] = React.useState("");

  function search(textSearched) {
    setTextSearched(textSearched);
  }

  return (
    <div className="App">
      <HeaderHack search={search}></HeaderHack>
      <ListMovies textSearched={textSearched}></ListMovies>
    </div>
  );
}

export default App;
