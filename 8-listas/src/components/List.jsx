import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const List = () => {
  const { id } = useParams();
  let list = useSelector((state) => state.listOfListsReducer[id]);

  return (
    <div className="main">
      <div className="container ">
        <div className="row d-flex justify-content-center ">
          <div className="col-7" style={{ background: list.listCardColor }}>
            <h1 className="text-white">{list.listName}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
