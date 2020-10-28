import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieModal = ({ show, handleClose, item }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="list-group">
          <a href="/" className="list-group-item list-group-item-action">
            <strong>Titulo:</strong> {item.title}
          </a>
          <a href="/" className="list-group-item list-group-item-action">
            <strong>Titulo original:</strong> {item.original_title}
          </a>
          <a href="/" className="list-group-item list-group-item-action">
            <strong>Lenguaje original:</strong> {item.original_language}
          </a>
          <a href="/" className="list-group-item list-group-item-action">
            <strong>Promedio de votos:</strong> {item.vote_average}
          </a>
          <a href="/" className="list-group-item list-group-item-action">
            <strong>Fecha de salida:</strong> {item.release_date}
          </a>
          <a href="/" className="list-group-item list-group-item-action">
            <strong>Popularidadl:</strong> {item.popularity}
          </a>
          <a href="/" className="list-group-item list-group-item-action">
            <strong>Descripcion:</strong> {item.overview}
          </a>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieModal;

// const [show, setShow] = useState(false);
// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);

{
  /* {show && (
        // <MovieModal
        //   show={show}
        //   handleClose={handleClose}
        //   item={item}
        // ></MovieModal>
      )} */
}
