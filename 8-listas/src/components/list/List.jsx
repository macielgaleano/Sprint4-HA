import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./list.css";

const List = () => {
  const { id } = useParams();
  const [inputValue, setinputValue] = React.useState("Ingrese un nuevo item");
  let list = useSelector((state) => state.listOfListsReducer[id]);

  let handleItem = (e) => {
    setinputValue(e.target.value);
  };

  let removeText = (e) => {
    setinputValue("");
  };

  return (
    <div className="main">
      <div className="container ">
        <div className="row d-flex justify-content-center ">
          <div className="col-7 mt-4 rounded" style={{ background: list.listCardColor }}>
            <div className="list-header mb-2 mt-2">
              <h1 className="text-white text-center ">{list.listName} </h1>
              <h4 className="listDateCreated text-center">{list.listDateCreated}</h4>
            </div>
            <div class="form-group d-flex justify-content-center align-items-end">
              <input
                type="text"
                style={{ background: list.listCardColor }}
                className="form-control text-white"
                placeholder=""
                value={inputValue}
                onChange={handleItem}
                onFocus={removeText}
              />
              <i
                role="button"
                className="fa ml-2 fa-plus-circle text-white icon"
                onClick={handleItem}
              ></i>
            </div>
          </div>
          <div className="col-7 pb-4" style={{ background: list.listCardColor }}>
            <div className="mt-4 ml-5 pb-2 mr-5 rounded bg-light ">
              {list.listItems.map((el) => {
                return <div>{el}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
