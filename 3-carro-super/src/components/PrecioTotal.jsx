// import reactDOM from "react-dom";
import React from "react";
import { groceries } from "../models/groceries";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import { map } from "jquery";

//Cambiar nombres de archivos, .jsx

const Gondola = (props) => {
  let amount = 0;

  return (
    <div className="alert-success mt-3">
      {props.items.map((el, index) => {
        amount = amount + el.unitPrice * el.quantity;
      })}
      <p className="p-2" key={1}>
        {" "}
        Precio total: {amount}{" "}
      </p>
    </div>
  );
};

export default Gondola;
