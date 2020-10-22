import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Gondola from "./components/gondola";
import Carrito from "./components/carrito";
// import { groceries } from "./models/groceries";

function App() {
  const [items, setItems] = React.useState([]);

  function addToCart(item) {
    const found = items.find((el) => el.id === item.id);
    if (!found) {
      setItems([...items, { ...item, quantity: 1 }]);
    } else if (found) {
      const elementsIndex = items.findIndex(
        (element) => element.id === item.id
      );
      let newArrayItems = [...items];
      newArrayItems[elementsIndex] = {
        ...newArrayItems[elementsIndex],
        quantity: newArrayItems[elementsIndex].quantity + 1,
      };
      setItems([...newArrayItems]);
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
            <Carrito items={items}></Carrito>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
