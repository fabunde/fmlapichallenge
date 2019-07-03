import React from "react";

import { Modal } from "react-bootstrap";

export default function Alert(props) {
  return (
    <div>
      <Modal show={props.showAlert}>
        <Modal.Header>
          <Modal.Title className="errheading">Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.alertMsg}</Modal.Body>
      </Modal>
    </div>
  );
}
