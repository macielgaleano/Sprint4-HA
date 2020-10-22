import reactDOM from "react-dom";
import React, { Component } from "react";

const Pokemon = (props) => {
  return (
    <div className="box-pokemon">
      <h2 className="titte"> {props.name} </h2>
      <img src={props.image} className="img-fluid image" alt="" />
      <p>Type: {props.type}</p>
    </div>
  );
};

export default Pokemon;
