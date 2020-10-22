import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/welcome";
import Title from "./components/title";
import Subtitle from "./components/subtitle";
import Description from "./components/description";
import Persona from "./components/persona";
import Pelicula from "./components/pelicula";

function App() {
  return (
    <div className="app">
      <Pelicula id={592350}></Pelicula>
      <Pelicula id={532067}></Pelicula>
      <Pelicula id={347201}></Pelicula>

      {/* <div className="tercero">
        <Persona name="Maciel" age="19"></Persona>
        <Persona name="Maciel" age="12"></Persona>
      </div>
      <div className="segundo">
        <Title></Title>
        <Subtitle></Subtitle>
        <Description></Description>
      </div>
      <header className="App-header">
        <Welcome name="Maciel"></Welcome>
        <Welcome name="Jose"></Welcome>
        <Welcome name="El Pepe"></Welcome>
        <Welcome name="finalstory2"></Welcome>
      </header> */}
    </div>
  );
}

export default App;
