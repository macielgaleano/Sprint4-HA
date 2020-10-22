// import reactDOM from "react-dom";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import React from "react";
import "../assets/HeaderHack.scss";
import movies from "../models/movies.json";
import Stars from "./Stars";

const Movie = ({ textSearched }) => {
  const [countStars, setCountStars] = React.useState(2);

  function getStars(countStars) {
    setCountStars(countStars);
  }

  return (
    <div className="container">
      <div className="row mt-3 d-flex justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          <Stars getStars={getStars}></Stars>
        </div>

        {movies.map((item, index) => {
          if (
            item.original_title.toLowerCase().includes(textSearched) ||
            item.original_title.toUpperCase().includes(textSearched) ||
            item.original_title.includes(textSearched) ||
            countStars * 2 < item.vote_average
          ) {
            console.log(item.vote_average);
            console.log(countStars);
            return (
              <div key={index} className="col-6 col-md-2 col-sm-4 mt-5 ">
                <img className="img-fluid" src={item.poster_path} alt="" />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Movie;
