// import reactDOM from "react-dom";
import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

const Carrito = ({ items }) => {
  return (
    <div className="container-not">
      <h2 className="display-5 text-center mt-2 mb-4">Carrito</h2>
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className="list-group-item d-flex align-items-center"
            >
              <div className="d-flex">
                <i className="fa fa-minus-circle mr-2" id={item.id}></i>
                <strong className="mr-2">{item.name}</strong>
                <p>({item.unitPrice} c/u)</p>
                <p>Cantidad: {item.quantity}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Carrito;
