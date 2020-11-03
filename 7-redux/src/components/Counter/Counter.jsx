import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./counter.css";
import { actionCounterAdd } from "../../actions/actionCounterAdd";
import { actionCounterRemove } from "../../actions/actionCounterRemove";
import { actionCounterModify } from "../../actions/actionCounterModify";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  let number = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  let handlePlus = () => {
    dispatch(actionCounterAdd());
  };

  let handleMinus = () => {
    dispatch(actionCounterRemove());
  };

  let handleNumber = (e) => {
    dispatch(actionCounterModify(e.target.value));
  };

  return (
    <div className="box">
      <div className="container">
        <div className="row mt-10">
          <div className="col-12 mx-auto  ">
            <div className="father h-100 border-dark d-flex align-items-center justify-content-center ">
              <i className="fa fa-minus-square iconSize mr-5" onClick={handleMinus}></i>
              <h1 className="display-4">{number}</h1>
              <i className="fa fa-plus-square iconSize ml-5" onClick={handlePlus}></i>
            </div>
          </div>
          <div className="col-2 mx-auto mt-5">
            <div className="form-group d-flex form ">
              <label className="mr-4" for="">
                Comienzo
              </label>
              <input
                type="text"
                className="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder=""
                onChange={handleNumber}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
