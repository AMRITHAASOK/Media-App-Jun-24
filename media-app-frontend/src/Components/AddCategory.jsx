import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function AddCategory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button onClick={handleShow} className='btn btn-primary btn-lg'>Add Category</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> <p className='fs-3'>Add Category</p> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border border-light p-2 '>
            <FloatingLabel
              controlId="floatingInput"
              label="Video Caption"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Add Caption" />
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

export default AddCategory