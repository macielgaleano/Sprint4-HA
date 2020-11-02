import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import { useDispatch, useSelector } from "react-redux";
import ModalListOfLists from "../modalListOfLists/modalListOfLists";
import { actionListOfListsRemoveList } from "../../actions/actionListOfListsRemoveList";
import { Link } from "react-router-dom";
import "moment/locale/es";
import "./listOfLists.css";

const ListOflists = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  let Lists = useSelector((state) => state.listOfListsReducer);

  let handleList = (e) => {
    dispatch(actionListOfListsRemoveList(e.target.getAttribute("index")));
  };

  return (
    <div className="main">
      <div className="container ">
        <div className="row d-flex justify-content-center ">
          <div className="col-7">
            <h1 className="diplay-5 text-center mb-5 mt-2"> Mis listas de compra</h1>
            {Lists.map((list, index) => {
              return (
                <div
                  className="list text-white mb-4"
                  key={index}
                  style={{ background: list.listCardColor }}
                >
                  <div className="header d-flex justify-content-between align-items-center">
                    <Link to={"/lista/" + list.listId}>
                      <h2 className="listName">{list.listName}</h2>
                    </Link>
                    <div className="counter d-flex justify-content-between ">
                      <p className="listQuantityItems">0/{list.listQuantityItems}</p>
                      <i
                        index={index}
                        onClick={handleList}
                        className="fa fa-trash icon-remove text-white ml-1"
                      ></i>
                    </div>
                  </div>
                  <p className="listDateCreated">{list.listDateCreated}</p>
                </div>
              );
            })}

            <i
              className="fa fa-plus-circle addListIcon"
              onClick={handleShow}
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>
      <ModalListOfLists
        show={show}
        handleClose={handleClose}
        setShow={setShow}
      ></ModalListOfLists>
    </div>
  );
};

export default ListOflists;
