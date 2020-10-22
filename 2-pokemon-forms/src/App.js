import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Pokedex from "./components/Pokedex";
import Multiplicar from "./components/Multiplicar";

function App() {
  return (
    <div className="App">
      <Pokedex></Pokedex>
      <Multiplicar></Multiplicar>
    </div>
  );
}

export default App;
