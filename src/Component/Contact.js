import React from 'react'
import Navbar1 from './Navbar1'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFax ,FaRegEnvelope } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { IoSearch, IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

import Footer from './Footer'


export default function Contact() {
  return (
    <>
      
      <Navbar1/>

      <div className='sec-link'>
        <Container>
            <Row>
                <Col>
                    <h1>CONTACTS</h1>
                </Col>
                <Col>
                    <h2>You Are Here : <Link to={'/'} style={{color:'#79787F'}}>Home</Link> / CONTACTS</h2>
                </Col>
            </Row>
        </Container>
    </div>


    {/* contact table */}
    
    <div className="table">
        <Container>
            <Row>
                <Col lg={4} md={4} sm={12} >
                    <h1>CONTACT ETAILS</h1>
                    <div className="mem pb-3 flex-sm-column flex-md-row text-md-start align-items-sm-center text-center ">
                        <i><FaLocationDot  /></i>
                        <h3>Address : <br></br>4578 Marmora</h3>
                    </div>
                    <div className="mem pb-3 flex-sm-column flex-md-row text-md-start align-items-sm-center text-center">
                        <i><IoCall /></i>
                        <h3>Phone : <br></br>(719) 445-2808;</h3>
                    </div>
                    <div className="mem pb-3 flex-sm-column flex-md-row text-md-start align-items-sm-center text-center">
                        <i><FaFax  /></i>
                        <h3>Fax : <br></br>(719) 445-2808;</h3>
                    </div>
                    <div className="mem pb-3 flex-sm-column flex-md-row text-md-start align-items-sm-center text-center">
                        <i><FaRegEnvelope  /></i>
                        <h3>Email : <br></br>info@dlink.org</h3>
                    </div>
                    <div className="mem pb-3 flex-sm-column flex-md-row text-md-start align-items-sm-center text-center">
                        <i><FiClock  /></i>
                        <h3>Monday: 08.00 –<br></br>Saturday:09.00</h3>
                    </div>
                </Col>

                <Col lg={8} md={8} sm={12}>
                    <h2>DROP US  LINE</h2>
                    <h5><input type='text' placeholder='Your Name' w-100></input></h5>
                    <h5><input type='text' placeholder='Your Email' w-100></input></h5>
                    <h5><input type='text' placeholder='Your Company' w-100></input></h5>
                    <h5><textarea cols={78} rows={4} placeholder='Your Comment' w-100></textarea></h5>
                    <div className='sir d-flex'>
                        <p>We will contact you within one business day.</p>
                        <button>SEND MESSAGE</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>


    <Footer/>

    </>
  )
}
