// import reactDOM from "react-dom";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import React from "react";
import "../assets/HeaderHack.scss";
import Search from "./Search";

const headerHack = (props) => {
  function search(textSearched) {
    props.search(textSearched);
  }

  return (
    <div className="img-header">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <nav className="navbar navbar-expand-lg d-flex justify-content-between">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <a href="/" className="navbar-brand text-white">
                Anime Hack
              </a>
              <a className="nav-link text-white" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </nav>
            <div className="col-12 d-flex justify-content-center flex-column align-items-center titles ">
              <h2 className="Text-cemter text-white">
                El lugar que estabas buscando, el mejor sitio de Fukuoka
              </h2>
              <Search search={search}></Search>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default headerHack;
