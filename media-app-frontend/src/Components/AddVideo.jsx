import React from 'react'
import { FiUpload } from "react-icons/fi";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function AddVideo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant='light' className='rounded' onClick={handleShow}> <FiUpload className='fs-4 fw-bolder ' /> </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> <p className='fs-3'>Upload Video</p> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border border-light p-2 '>
            <FloatingLabel
              controlId="floatingInput"
              label="Video Caption"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Video Caption" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingP" label="Video Image" className="mb-3">
              <Form.Control type="text" placeholder="Video Image" />
            </FloatingLabel>
            <FloatingLabel controlId="floating" label="Video Url" className="mb-3">
              <Form.Control type="text" placeholder="Video Url" />
            </FloatingLabel>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddVideo