import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { MdDelete } from "react-icons/md";  
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function VideoCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
    
            
    <Card  onClick={handleShow}  style={{width:'200px',height:'250px'}} className='p-4'>
      <Card.Img variant="top" src="https://static-00.iconduck.com/assets.00/react-javascript-js-framework-facebook-icon-2048x1822-f7kq7hho.png" />
      <Card.Body className='d-flex'>
        <p className=''>Card Title</p>  < ><MdDelete className='fs-3 fw-bolder'/></>
      </Card.Body>
    </Card>
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
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/t-5r2ZDE804?si=lST0L5-MwJ3nKD-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </Modal.Body>
      </Modal>    
    </div>
  )
}

export default VideoCard