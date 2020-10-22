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
  const [items, setItem] = React.useState([]);

  function addToCart(id) {
    setItem([...items, id]);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 col-12 mr-5">
            <Gondola addCart={addToCart}></Gondola>
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
