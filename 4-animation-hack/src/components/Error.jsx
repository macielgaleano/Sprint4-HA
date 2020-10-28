import React from "react";
import "../assets/MacError.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      {
        <div className="container-fluid">
          <div className="row">
            <div className="col-12  text d-flex flex-column justify-content-center align-items-center auto p-0">
              <div className="">
                <span className="txt">E</span>
                <span className="txt1">R</span>
                <span className="txt2">R</span>
                <span className="txt3">O</span>
                <span className="txt4">R</span>
                <span className="txt5">4</span>
                <span className="txt6">0</span>
                <span className="txt6">4</span>
              </div>
              <h1 className="mt-4">
                Error 404, la pagina que buscas no existe
              </h1>
              <Link to="/" className=" btn btn-success btn-lg mt-4">
                Vovler a home
              </Link>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Error;
