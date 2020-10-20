import reactDOM from "react-dom";
import React, { Component } from "react";

const persona = (props) => {
  let name = props.name,
    age = props.age,
    message;
  if (age >= 18) {
    message = "Bienvenido. Lo invitamos a tomar una cerveza";
  } else {
    message = "Lo sentimos, no tiene edad legal para beber alcohol";
  }
  return (
    <p>
      Hola {name}, <span>{message}</span>
    </p>
  );
};

export default persona;
