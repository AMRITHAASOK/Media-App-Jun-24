import React from 'react'
import VideoCard from './VideoCard'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
function ViewVideo() {
  return (
    <div>
      <Row className='border border-white p-3'>
        <Col>
        <VideoCard/>
        </Col>
        <Col>
        <VideoCard/>
        </Col>
        <Col>
        <VideoCard/>
        </Col>
      </Row>
   
     
    </div>
  )
}

export default ViewVideo