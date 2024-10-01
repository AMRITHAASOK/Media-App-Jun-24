import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { Link } from 'react-router-dom'
import AddVideo from '../Components/AddVideo'
import ViewVideo from '../Components/ViewVideo'
import AddCategory from '../Components/AddCategory'
import { LuHistory } from "react-icons/lu";

function Home() {
  return (
    <>
    <Container>
      <Row>
        <Col className='p-5'>
        <div className='d-flex'> 
        <p className='me-4 fw-bolder fs-3 text-white'>Upload Video </p> <AddVideo/>
        </div>
        </Col>
        <Col className='p-5 '>
        <Link className='text-white' to={'/watchHistory'}>
        <p className='fw-bolder fs-3' style={{float:'right'}}>Watch History <LuHistory className='fs-3' /></p>
        </Link>
        </Col>
      </Row>
      <div className='row d-flex'>
        <div className='col-9'>
        <p>All Videos</p>
        <ViewVideo/>
        </div>
        <div className='col-3'>
        <div style={{float:'right'}}>
        <p>Category</p>
        <AddCategory/>
        </div>
        </div>
        
      </div>
    </Container>

    </>
  )
}

export default Home