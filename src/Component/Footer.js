import React from 'react'


import { FaFacebookF ,FaTwitter,FaYoutube ,FaInstagram  } from "react-icons/fa";

import {Container, Row, Col, } from 'react-bootstrap';



export default function Footer() {
  return (
    <>
      <div className='footer'>
        <Container>
          <Row className='g-3'>
            <Col lg={3} md={3}>
              <h1>About</h1>
              <p>
                JohnnyGo is a large company with more than 10 years of experience in helping  people with their house problems and malfunctions. During our work we helped a huge number of people and have garnered a reputation as a stable company with a team of real skilled experts who don’t fear any difficulties.					</p>
            </Col>
            <Col lg={3} md={3}>
              <h1>services</h1>
              <h2>Bicycle removal</h2>
              <h2>Hot tub removal</h2>
              <h2>Tv removal</h2>
              <h2>Electronics recycling</h2>
              <h2>Carpet removal</h2>
              <h2>Mattress disposal</h2>
              <h2>Furniture removal</h2>
              <h2>Refrigerator removal</h2>
              <h2>Appliance removal</h2>
            </Col>
            <Col lg={3} md={3}>
              <h1>Projects</h1>
              <h2>Heather Ln, Glasgow</h2>
              <h2>Central Str, New York</h2>
              <h2>Main Avn, London</h2>
              <h2>Hauptstrasse, Berlin</h2>
              <h2>Green Str, Boston</h2>
              <h2>Hard Ln, Paris</h2>
              <h2>Love Str, Los Angeles</h2>
              <h2>Sheer Str, London</h2>
              <h2>Motion Str, Riga</h2>
              <h2>Liberty Ln, Chicago</h2>
            </Col>
            <Col lg={3} md={3}>
              <h1>Online quote</h1>
              <p>Free online quotes for windows, doors, conservatories and aluminium bi-fold doors.</p>
              <button>FREE QUOTE</button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* last */}

      <div className='last'>
        <Container>
          <Row>
            <Col className='text-center text-md-end col-md-6 col-12 '>Zemez © All rights reserved.</Col>
            <Col className='text-center text-md-end col-md-6 col-12 '>
              <i><FaFacebookF /></i>
              <i><FaTwitter /></i>
              <i><FaYoutube /></i>
              <i><FaInstagram /></i>
            </Col>
          </Row>
        </Container>
      </div> 
    </>
  )
}
