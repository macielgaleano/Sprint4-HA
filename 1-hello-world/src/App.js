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
      <Pelicula
        name="Ad Astra"
        year="2019"
        imagen="https://image.tmdb.org/t/p/original/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
        puntaje="No la vi aun"
      ></Pelicula>
      <Pelicula
        name="Batman"
        year="1989"
        imagen="https://i.pinimg.com/originals/92/b4/a6/92b4a64312055fc4ade1e6254835d6bf.png"
        puntaje="excelente"
      ></Pelicula>
      <Pelicula
        name="Batman and Robin"
        year="1997"
        imagen="https://upload.wikimedia.org/wikipedia/en/3/37/Batman_%26_Robin_poster.jpg"
        puntaje="malo"
      ></Pelicula>

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
