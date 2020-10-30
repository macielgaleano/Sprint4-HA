import React from "react";
import { actionBuyListAdd } from "../../actions/actionBuyListAdd";
import { actionBuyListRemove } from "../../actions/actionBuyListRemove";
import { actionBuyListCheckItem } from "../../actions/actionBuyListCheckItem";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./buyList.css";

const BuyList = () => {
  const [inputValue, setinputValue] = React.useState();
  const dispatch = useDispatch();

  let handleCheck = (e) => {
    dispatch(actionBuyListCheckItem(e.currentTarget.attributes[1].value));
  };

  let handleMinus = (e) => {
    dispatch(actionBuyListRemove(e.currentTarget.attributes[1].value));
  };

  let handleItem = (e) => {
    dispatch(actionBuyListAdd(inputValue));
  };

  let handleChange = (e) => {
    setinputValue(e.target.value);
  };

  let items = useSelector((state) => state.buyListReducer);

  return (
    <div className="main d-flex flex-column">
      <h1 className="text-white text-center">Lista de compra</h1>
      <div className="container">
        <div className="row ">
          <div className="col-5 mx-auto bg-success list rounded pb-3 mt-5">
            <div className="form-group d-flex align-items-center mb-3  line">
              <input
                type="text"
                placeholder="Agregar item"
                className="form-control bg-success text-white  form"
                onChange={handleChange}
              />
              <i
                role="button"
                className="fa fa-plus-circle text-white icon"
                onClick={handleItem}
              ></i>
            </div>
            <div className="bg-light rounded h-25 pb-4">
              <ul className="bg-light pt-2">
                {items &&
                  items.sort().map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-light pb-4 mt-2 d-flex justify-content-between align-items-center"
                      >
                        <div className="d-flex align-items-center ">
                          {item.bought === false && (
                            <i
                              className="fa fa-square square "
                              item={index}
                              onClick={handleCheck}
                            ></i>
                          )}
                          {item.bought === true && (
                            <i className="fa fa-check icon" aria-hidden="true"></i>
                          )}
                          <p className="m-0 ml-3 itemName">{item.itemName}</p>
                        </div>
                        <i
                          className="fa fa-minus-square iconsize-red mr-1 text-danger"
                          onClick={handleMinus}
                          item={index}
                        ></i>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyList;
