import React from 'react'
import Navbar1 from './Navbar1'
import Footer from './Footer'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaQuoteLeft } from "react-icons/fa";

import i1 from '../image/10.jpg'
import i2 from '../image/1.jpg'
import i3 from '../image/11.jpg'
import i4 from '../image/12.jpg'
import i5 from '../image/13.jpg'
import i6 from '../image/14.jpg'
import i7 from '../image/15.jpg'
import i8 from '../image/16.jpg'
import i9 from '../image/17.jpg'


export default function Service() {
  return (
    <>
        {/* nav bar */}
        <Navbar1/>

        {/* sec.. 2 */}
    <div className='sec-link'>
        <Container>
            <Row>
                <Col>
                    <h1>SERVICE</h1>
                </Col>
                <Col>
                    <h2>You Are Here : <Link to={'/'} style={{color:'#79787F'}}>Home</Link> / SERVICE</h2>
                </Col>
            </Row>
        </Container>
    </div>

    {/* what we do */}

    <div className='what'>
        <Container>
            <h1>What We Do ?</h1>
            <Row className='r-1'>
                <Col lg={4}>
                    <img src={i1} style={{width:'100%'}}></img>
                </Col>
                <Col lg={8}>
                    <h2>Bicycle removal</h2>
                    <p>We provide our clients with all the range of services. We will fix any malfunction in record terms so you will have no worries! We offer a huge number of services and work is done by high-class experts using the latest technologies. JohnnyGo is here to meet your every demand so you could have no worries about your home!</p>
                    <p>All you need to do is contact our representative via phone or email and describe what is your issue. We will consult you and provide with the list of works that will need to be done. Our expert will visit you at the most convenient time for you. We provide all the materials. Price list of the materials can be found on our website. Our manager will answer all your questions.</p>
                    <p>JohnnyGo guarantees quality of work and speed of fulfilment.We always stand for doing our job fast and at the highest level as we understand people value their time and money.Our experts also can do even non-standard work!, so you need to discuss it with our representative.</p>
                    <p>We work to fulfill our goal – to provide our clients with the most complete list of services. We aim to expand our team of experts as there are more and more spheres of maintenance that we want to work with.</p>
                    <button>VIEW DETAILS</button>
                </Col>
            </Row>

            <Row className='r-1'>
                <Col lg={4}>
                    <img src={i2} style={{width:'100%'}}></img>
                </Col>
                <Col lg={8}>
                    <h2>Hot tub removal</h2>
                    <p>We provide our clients with all the range of services. We will fix any malfunction in record terms so you will have no worries! We offer a huge number of services and work is done by high-class experts using the latest technologies. JohnnyGo is here to meet your every demand so you could have no worries about your home!</p>
                    <p>All you need to do is contact our representative via phone or email and describe what is your issue. We will consult you and provide with the list of works that will need to be done. Our expert will visit you at the most convenient time for you. We provide all the materials. Price list of the materials can be found on our website. Our manager will answer all your questions.</p>
                    <p>JohnnyGo guarantees quality of work and speed of fulfilment.We always stand for doing our job fast and at the highest level as we understand people value their time and money.Our experts also can do even non-standard work!, so you need to discuss it with our representative.</p>
                    <p>We work to fulfill our goal – to provide our clients with the most complete list of services. We aim to expand our team of experts as there are more and more spheres of maintenance that we want to work with.</p>
                    <button>VIEW DETAILS</button>
                </Col>
            </Row>
            <Row className='r-1'>
                <Col lg={4}>
                    <img src={i3} style={{width:'100%'}}></img>
                </Col>
                <Col lg={8}>
                    <h2>TV removal</h2>
                    <p>We provide our clients with all the range of services. We will fix any malfunction in record terms so you will have no worries! We offer a huge number of services and work is done by high-class experts using the latest technologies. JohnnyGo is here to meet your every demand so you could have no worries about your home!</p>
                    <p>All you need to do is contact our representative via phone or email and describe what is your issue. We will consult you and provide with the list of works that will need to be done. Our expert will visit you at the most convenient time for you. We provide all the materials. Price list of the materials can be found on our website. Our manager will answer all your questions.</p>
                    <p>JohnnyGo guarantees quality of work and speed of fulfilment.We always stand for doing our job fast and at the highest level as we understand people value their time and money.Our experts also can do even non-standard work!, so you need to discuss it with our representative.</p>
                    <p>We work to fulfill our goal – to provide our clients with the most complete list of services. We aim to expand our team of experts as there are more and more spheres of maintenance that we want to work with.</p>
                    <button>VIEW DETAILS</button>
                </Col>
            </Row>
            <Row className='r-1'>
                <Col lg={4}>
                    <img src={i4} style={{width:'100%'}}></img>
                </Col>
                <Col lg={8}>
                    <h2>Electronics recycling</h2>
                    <p>We provide our clients with all the range of services. We will fix any malfunction in record terms so you will have no worries! We offer a huge number of services and work is done by high-class experts using the latest technologies. JohnnyGo is here to meet your every demand so you could have no worries about your home!</p>
                    <p>All you need to do is contact our representative via phone or email and describe what is your issue. We will consult you and provide with the list of works that will need to be done. Our expert will visit you at the most convenient time for you. We provide all the materials. Price list of the materials can be found on our website. Our manager will answer all your questions.</p>
                    <p>JohnnyGo guarantees quality of work and speed of fulfilment.We always stand for doing our job fast and at the highest level as we understand people value their time and money.Our experts also can do even non-standard work!, so you need to discuss it with our representative.</p>
                    <p>We work to fulfill our goal – to provide our clients with the most complete list of services. We aim to expand our team of experts as there are more and more spheres of maintenance that we want to work with.</p>
                    <button>VIEW DETAILS</button>
                </Col>
            </Row>
            <Row className='r-1'>
                <Col lg={4}>
                    <img src={i5} style={{width:'100%'}}></img>
                </Col>
                <Col lg={8}>
                    <h2>Carpet removal</h2>
                    <p>We provide our clients with all the range of services. We will fix any malfunction in record terms so you will have no worries! We offer a huge number of services and work is done by high-class experts using the latest technologies. JohnnyGo is here to meet your every demand so you could have no worries about your home!</p>
                    <p>All you need to do is contact our representative via phone or email and describe what is your issue. We will consult you and provide with the list of works that will need to be done. Our expert will visit you at the most convenient time for you. We provide all the materials. Price list of the materials can be found on our website. Our manager will answer all your questions.</p>
                    <p>JohnnyGo guarantees quality of work and speed of fulfilment.We always stand for doing our job fast and at the highest level as we understand people value their time and money.Our experts also can do even non-standard work!, so you need to discuss it with our representative.</p>
                    <p>We work to fulfill our goal – to provide our clients with the most complete list of services. We aim to expand our team of experts as there are more and more spheres of maintenance that we want to work with.</p>
                    <button>VIEW DETAILS</button>
                </Col>
            </Row>
            <Row className='r-1'>
                <Col lg={4}>
                    <img src={i6} style={{width:'100%'}}></img>
                </Col>
                <Col lg={8}>
                    <h2>Mattress disposal</h2>
                    <p>We provide our clients with all the range of services. We will fix any malfunction in record terms so you will have no worries! We offer a huge number of services and work is done by high-class experts using the latest technologies. JohnnyGo is here to meet your every demand so you could have no worries about your home!</p>
                    <p>All you need to do is contact our representative via phone or email and describe what is your issue. We will consult you and provide with the list of works that will need to be done. Our expert will visit you at the most convenient time for you. We provide all the materials. Price list of the materials can be found on our website. Our manager will answer all your questions.</p>
                    <p>JohnnyGo guarantees quality of work and speed of fulfilment.We always stand for doing our job fast and at the highest level as we understand people value their time and money.Our experts also can do even non-standard work!, so you need to discuss it with our representative.</p>
                    <p>We work to fulfill our goal – to provide our clients with the most complete list of services. We aim to expand our team of experts as there are more and more spheres of maintenance that we want to work with.</p>
                    <button>VIEW DETAILS</button>
                </Col>
            </Row>
            <Row className='r-1'>
                <Col lg={4}>
                    <img src={i7} style={{width:'100%'}}></img>
                </Col>
                <Col lg={8}>
                    <h2>Furniture removal</h2>
                    <p>We provide our clients with all the range of services. We will fix any malfunction in record terms so you will have no worries! We offer a huge number of services and work is done by high-class experts using the latest technologies. JohnnyGo is here to meet your every demand so you could have no worries about your home!</p>
                    <p>All you need to do is contact our representative via phone or email and describe what is your issue. We will consult you and provide with the list of works that will need to be done. Our expert will visit you at the most convenient time for you. We provide all the materials. Price list of the materials can be found on our website. Our manager will answer all your questions.</p>
                    <p>JohnnyGo guarantees quality of work and speed of fulfilment.We always stand for doing our job fast and at the highest level as we understand people value their time and money.Our experts also can do even non-standard work!, so you need to discuss it with our representative.</p>
                    <p>We work to fulfill our goal – to provide our clients with the most complete list of services. We aim to expand our team of experts as there are more and more spheres of maintenance that we want to work with.</p>
                    <button>VIEW DETAILS</button>
                </Col>
            </Row>
            <Row className='r-1'>
                <Col lg={4}>
                    <img src={i8} style={{width:'100%'}}></img>
                </Col>
                <Col lg={8}>
                    <h2>Refrigerator removal</h2>
                    <p>We provide our clients with all the range of services. We will fix any malfunction in record terms so you will have no worries! We offer a huge number of services and work is done by high-class experts using the latest technologies. JohnnyGo is here to meet your every demand so you could have no worries about your home!</p>
                    <p>All you need to do is contact our representative via phone or email and describe what is your issue. We will consult you and provide with the list of works that will need to be done. Our expert will visit you at the most convenient time for you. We provide all the materials. Price list of the materials can be found on our website. Our manager will answer all your questions.</p>
                    <p>JohnnyGo guarantees quality of work and speed of fulfilment.We always stand for doing our job fast and at the highest level as we understand people value their time and money.Our experts also can do even non-standard work!, so you need to discuss it with our representative.</p>
                    <p>We work to fulfill our goal – to provide our clients with the most complete list of services. We aim to expand our team of experts as there are more and more spheres of maintenance that we want to work with.</p>
                    <button>VIEW DETAILS</button>
                </Col>
            </Row>
            <Row className='r-1'>
                <Col lg={4}>
                    <img src={i9} style={{width:'100%'}}></img>
                </Col>
                <Col lg={8}>
                    <h2>Appliance removal</h2>
                    <p>We provide our clients with all the range of services. We will fix any malfunction in record terms so you will have no worries! We offer a huge number of services and work is done by high-class experts using the latest technologies. JohnnyGo is here to meet your every demand so you could have no worries about your home!</p>
                    <p>All you need to do is contact our representative via phone or email and describe what is your issue. We will consult you and provide with the list of works that will need to be done. Our expert will visit you at the most convenient time for you. We provide all the materials. Price list of the materials can be found on our website. Our manager will answer all your questions.</p>
                    <p>JohnnyGo guarantees quality of work and speed of fulfilment.We always stand for doing our job fast and at the highest level as we understand people value their time and money.Our experts also can do even non-standard work!, so you need to discuss it with our representative.</p>
                    <p>We work to fulfill our goal – to provide our clients with the most complete list of services. We aim to expand our team of experts as there are more and more spheres of maintenance that we want to work with.</p>
                    <button>VIEW DETAILS</button>
                </Col>
            </Row>
        </Container>
    </div>

    <div className='fast'>
        <Container>
            <h1><FaQuoteLeft /></h1>
            <p>Fast, efficient, clean and respectful. Plus they over estimated the time it would take so we ended up under the estimate.</p>
            <h2>Sherene Jensen LA / Orange County California 10/10 rating</h2>
        </Container>
    </div>

    {/* footer */}

    <Footer/>





    </>
  )
}
