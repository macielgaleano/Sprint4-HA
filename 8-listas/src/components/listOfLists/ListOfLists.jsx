import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import Randomcolor from "randomcolor";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/es";
import "./listOfLists.css";

const ListOflists = () => {
  let state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="main">
      <div className="container ">
        <div className="row d-flex justify-content-center">
          <div className="col-8">
            <h1 className="diplay-5 text-center mb-5 mt-2"> Mis listas de compra</h1>
            <div
              className="list text-white"
              style={{ background: Randomcolor({ luminosity: "dark" }) }}
            >
              <div className="header d-flex justify-content-between align-items-center">
                <h2 className="listName">Vegetales</h2>
                <p className="listQuantityItems">0/0</p>
              </div>
              <p className="listDateCreated">{moment().format("ll")}</p>
            </div>
            <i className="fa fa-plus-circle addListIcon" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOflists;
