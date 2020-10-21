import reactDOM from "react-dom";
import React, { Component } from "react";

const pelicula = (props) => {
  let box;
  if (props.puntaje == "No la vi aun") {
    box = <div className="novista">{props.puntaje}</div>;
  } else if (props.puntaje == "malo") {
    box = <div className="malo">{props.puntaje}</div>;
  } else if (props.puntaje == "bueno") {
    box = <div className="bueno">{props.puntaje}</div>;
  } else if (props.puntaje == "regular") {
    box = <div className="regular">{props.puntaje}</div>;
  } else if (props.puntaje == "excelente") {
    box = <div className="excelente">{props.puntaje}</div>;
  }

  return (
    <div className="post">
      <div className="titulo">
        {props.name} ({props.year})
      </div>
      {box}
      <div className="subtitle">{}</div>
      <img src={props.imagen} />
    </div>
  );
};

export default pelicula;
