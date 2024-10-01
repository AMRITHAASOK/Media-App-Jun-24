import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function WatchHistory() {
  return (
    <>
      <Row>
        <Col>
        <p className='fs-2 fw-bolder'>Watch History</p>
      </Col>
        <Col > 
        <Link to={'/'} className='text-white fs-3'>
        <p style={{float:'right'}} className='px-5'>Back to Home</p>
        </Link>
        </Col>
      </Row>
      <Row>
        <Col className='p-5 mx-5'>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Sl No</th>
          <th>Caption</th>
          <th>Url</th>
          <th>Timestamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
       
      
      </tbody>
    </Table>
        </Col>
      </Row>
    </>
  )
}

export default WatchHistory