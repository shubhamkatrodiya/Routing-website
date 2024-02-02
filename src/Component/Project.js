import React from 'react'
import Navbar1 from './Navbar1'
import People from './People'
import Footer from './Footer'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import i1 from '../image/10.jpg'
import i2 from '../image/1.jpg'
import i3 from '../image/25.jpg'
import i4 from '../image/12.jpg'
import i5 from '../image/1.jpg'
import i6 from '../image/14.jpg'
import i7 from '../image/15.jpg'
import i8 from '../image/16.jpg'
import i9 from '../image/17.jpg'


export default function Project() {
  return (
    <>

     <Navbar1/>

     <div className='sec-link'>
        <Container>
            <Row>
                <Col>
                    <h1>PROJECT</h1>
                </Col>
                <Col>
                    <h2>You Are Here : <Link to={'/'} style={{color:'#79787F'}}>Home</Link> / PROJECT</h2>
                </Col>
            </Row>
        </Container>
    </div>

    {/* our project */}

    <div className='pro'>
        <Container>
            <h1>Our Project</h1>
            <p>We are proud to show you our projects that were made with all our skills and professionalism.</p>

            <Row className='g-4'>
                <Col lg={4} md={4} sm={12}><img src={i1} style={{width:'100%'}}></img></Col>
                <Col lg={4} md={4} sm={12}><img src={i2} style={{width:'100%'}}></img></Col>
                <Col lg={4} md={4} sm={12}><img src={i3} style={{width:'100%'}}></img></Col>
                <Col lg={4} md={4} sm={12}><img src={i4} style={{width:'100%'}}></img></Col>
                <Col lg={4} md={4} sm={12}><img src={i5} style={{width:'100%'}}></img></Col>
                <Col lg={4} md={4} sm={12}><img src={i6} style={{width:'100%'}}></img></Col>
                <Col lg={4} md={4} sm={12}><img src={i7} style={{width:'100%'}}></img></Col>
                <Col lg={4} md={4} sm={12}><img src={i8} style={{width:'100%'}}></img></Col>
                <Col lg={4} md={4} sm={12}><img src={i9} style={{width:'100%'}}></img></Col>
            </Row>
            <div className="bo d-flex justify-content-center"><button>Load More</button></div>
        
        </Container>
    </div>



     
     <People/>


    {/* have any */}
    <div className='have'>
        <h1>Our experts will solve them in no time.</h1>
        <h2>Have Any Household Problems?</h2>
        <button>MAKE AN APPOINTMENT</button>
    </div>


     <Footer/>

    </>
  )
}
