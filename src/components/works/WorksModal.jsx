import React from 'react';
import Modal from 'react-bootstrap/Modal';

const WorksModal = ({ show, setShow, imageSource, title }) => {

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-works"
        aria-labelledby="works-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="works-modal">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imageSource} alt={title} className="modal-works__image"/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default WorksModal;