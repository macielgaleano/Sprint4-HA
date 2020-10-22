// import reactDOM from "react-dom";
import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import { groceries } from "../models/groceries";

const Carrito = (props) => {
  const [items, setItem] = React.useState([]);

  //Props -> Id values between [1,21]
  //groceries -> objects

  return (
    <div className="container-not">
      <h2 className="display-5 text-center mt-2 mb-4">Carrito</h2>
      <ul className="list-group"></ul>

      {/* {groceries.forEach((el) => {
        for (let i = 0; i < props.items.length; i++) {
          const found = items.find((element) => element.id !== props.items[i]);
          console.log(found);
          if (found === undefined) {
            setItem([...items, groceries[props.items[i]]]);
          } else {
            items.forEach((element, index) => {
              if (element.id === props.items[i]) {
                items[index].quantity = items[index].quantity + 1;
              }
            });
          }
        }
        console.log(items);
      })} */}
    </div>
  );
};

export default Carrito;
