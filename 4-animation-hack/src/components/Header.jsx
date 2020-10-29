// import reactDOM from "react-dom";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import React from "react";
import "../assets/headerHack.scss";
import Search from "./Search";

const headerHack = (props) => {
  function handleSearch(textSearched) {
    props.handleSearch(textSearched);
  }

  return (
    <div className="img-header">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <div className="col-12 d-flex justify-content-center flex-column align-items-center titles ">
              <h2 className="Text-cemter text-white">
                El lugar que estabas buscando, el mejor sitio de Fukuoka
              </h2>
              <Search handleSearch={handleSearch}></Search>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default headerHack;
