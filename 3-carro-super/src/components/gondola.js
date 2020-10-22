// import reactDOM from "react-dom";
import React from "react";
import { groceries } from "../models/groceries";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

//Cambiar nombres de archivos, .jsx

const Gondola = (props) => {
  return (
    <div className="container-not">
      <h2 className="display-5 text-center mt-2 mb-4">Productos disponibles</h2>
      <ul className="list-group">
        {groceries.map((item, index, array) => {
          return (
            <li
              key={index}
              onClick={() => props.addToCart(item)}
              className="list-group-item d-flex align-items-center"
            >
              <div className="d-flex">
                <i
                  className="fa fa-plus-circle mr-2"
                  id={item.id}
                  onClick={() => props.addToCart(item)}
                ></i>
                <strong className="mr-2">{item.name}</strong>
                <p className="mr-2">({item.unitPrice} c/u)</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Gondola;
