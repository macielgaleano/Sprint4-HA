import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionListOfListsAddList } from "../../actions/actionListOfListsAddList";

function ModalListOfLists({ handleClose, show, setShow }) {
  const [listText, setListText] = React.useState();
  const dispatch = useDispatch();
  function handleList() {
    dispatch(actionListOfListsAddList(listText));
    setShow(false);
  }

  function handleListText(e) {
    setListText(e.target.value);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Crear lista</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Completa los siguientes datos para crear tu lista</h6>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre de la lista"
              aria-describedby="helpId"
              onChange={handleListText}
            />
            <small id="helpId" className="text-muted">
              Ingrese un nombre para la lista*
            </small>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="success" onClick={handleList}>
            Agregar lista
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalListOfLists;
