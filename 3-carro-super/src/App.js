import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Gondola from "./components/gondola";
import Carrito from "./components/carrito";
import PrecioTotal from "./components/PrecioTotal";
// import { groceries } from "./models/groceries";

function App() {
  const [items, setItems] = React.useState([]);

  function auxiliarCart(item, itemCalc) {
    const elementsIndex = items.findIndex((element) => element.id === item.id);
    let itemsAux = [...items];
    itemsAux[elementsIndex] = {
      ...itemsAux[elementsIndex],
      quantity: itemsAux[elementsIndex].quantity + itemCalc,
    };
    setItems([...itemsAux]);
  }

  function addToCart(item) {
    const found = items.find((el) => el.id === item.id);
    if (!found) {
      setItems([...items, { ...item, quantity: 1 }]);
    } else if (found) {
      auxiliarCart(item, +1);
    }
  }

  function removeFromCart(item) {
    if (item.quantity > 1) {
      auxiliarCart(item, -1);
    } else if (item.quantity === 1) {
      let filteredArrayItems = items.filter((el) => el.id !== item.id);
      setItems([...filteredArrayItems]);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 col-12 mr-5">
            <Gondola addToCart={addToCart}></Gondola>
          </div>
          <div className="col-sm-5 col-12 mr-5">
            <Carrito items={items} removeFromCart={removeFromCart}></Carrito>
            {items.map((el, index) => {
              if (Number(el.quantity) > 5 && (el.id === 20 || el.id === 21)) {
                let messague =
                  " Lo sentimos. No es posible comprar más unidades. Otras familias también necesitan abastecerse";
                return (
                  <div key={index} className="alert-danger mt-3 ">
                    {messague}
                  </div>
                );
              }
            })}
            <PrecioTotal items={items}></PrecioTotal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
