// import reactDOM from "react-dom";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import React from "react";
import "../assets/headerHack.scss";

const Search = (props) => {
  return (
    <div className="input-group input-group-lg input-search">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-lg">
          <i className="fa fa-search"></i>
        </span>
      </div>
      <input
        type="text"
        onChange={(e) => {
          props.handleSearch(e.target.value);
        }}
        name="textSearched"
        className="form-control "
        aria-label="Large"
        aria-describedby="inputGroup-sizing-sm"
      />
    </div>
  );
};

export default Search;
