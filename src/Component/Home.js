import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoSearch, IoCall } from "react-icons/io5";
import { FaMoneyBill, FaRegBookmark, FaBars, FaQuoteLeft, FaFacebookF ,FaTwitter,FaYoutube ,FaInstagram  ,FaRegEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import Navbar1 from './Navbar1';
import Slider from './Slider';
import Footer from './Footer';

import i4 from '../image/1.jpg'
import i5 from '../image/2.jpg'
import i6 from '../image/3.jpg'
import i7 from '../image/6.jpg'


import People from './People';
import Phone from './Phone';
import { Nav, Navbar } from 'react-bootstrap';
export default function Home() {
  return (
    <>

    {/* header */}
      <Navbar1/>
    {/* slider */}
      <Slider/>

      <div className='full'>
        <Container>
          <div className="ser">
            <h1>Full service junk removal</h1>
            <h2>Book junk removal for your home or business, including offices, retail locations, construction sites and more. Our friendly team is happy to meet all of your junk hauling needs.</h2>
          </div>
          <Row className='g-4 pt-5 mar'>
            <Col lg={4} md={4} sm={12} className="pe-3">
              <div className="img1">
                <span>Trash <br></br> removal</span><br></br>
                <h7>We do trash removal in timely manner, so you won’t have problems with trash.</h7>
                <button>VIEW DETAILS</button>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} className="pe-3">
              <div className="img2">
                <span>Junk <br></br> removal</span><br></br>
                <h7>Our junk hauling service is based on how quickly and  we can recycle materials.</h7>
                <button>VIEW DETAILS</button>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} className="3">
              <div className="img3">
                <span>Recycle </span><br></br>
                <h7>If the junk is comprised of all wood, yard waste, rock, brick, brush, tree, stumps, dirt, or concrete we can recycle the waste at a topsoil recycling center.</h7>
                <button>VIEW DETAILS</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* our team */}

      <div className='our'>
        <Container>
          <Row className='g-4'>
            <Col lg={4} sm={12} md={4}>
              <h2>Our team</h2>
              <div className='me'>
                <img src={i4} width={'100%'}></img>
                <p>Our team consists of people who care about environment and cleanliness. Every team member showed themselves as responsible and accurate person.</p>
                <h5>VIEW DETAILS - > </h5>
              </div>
            </Col>
            <Col lg={4} sm={12} md={4}>
              <h2>What we take</h2>
              <div className='me'>
                <img src={i5} width={'100%'}></img>
                <p>We collect paper, plastic, beverage cartons, white and colored glass, wood, textile etc. We care about environment and use recycle trash.</p>
                <h5>VIEW DETAILS - > </h5>
              </div>
            </Col>
            <Col lg={4} sm={12} md={4}>
              <h2>Towns we serve</h2>
              <div className='me'>
                <img src={i6} width={'100%'}></img>
                <p>We work all over Glasgow area, and also we serve such regions as Nashville, Princeton, Eddyville, Madisonville and others.</p>
                <h5>VIEW DETAILS - > </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* customer service */}

      <div className='ser'>
        <div className='custom text-end'>
          <Container>
            <h1>24/7 Customer Service</h1>
            <h2>(719) 445-2808;(719) 445-2809</h2>
            <p>Except in Quebec where Customer Service hours are 8 a.m. to 8 p.m. Eastern Time<br></br> Monday to Friday and 8 a.m. to 9 p.m. Saturday and Sunday</p>
            <button>FREE QUOTE!</button>
          </Container>
        </div>
      </div>

      {/* WHAT PEOPLE */}
      <People/>
      

      {/* phone */}

     <Phone/>

     {/* footer */}
      <Footer/>

    </>
  )
}
