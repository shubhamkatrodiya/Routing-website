import React from 'react'
import { LuClock } from "react-icons/lu";
import { FaMoneyBill, FaRegBookmark, FaBars, FaQuoteLeft, FaFacebookF ,FaTwitter,FaYoutube ,FaInstagram  ,FaRegEnvelope } from "react-icons/fa";
import { IoSearch, IoCall } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


import { useState } from 'react';

import {Container, Row, Col, Nav, Button, Offcanvas, NavDropdown, Navbar} from 'react-bootstrap';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import logo from '../image/logo.png'
import { Link } from 'react-router-dom';
import About from './About';


export default function Navbar1() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <navbar>
                <Container className='nav-bar d-none d-md-block'>
                    <div className="nav d-none d-md-block">
                        <Row className='justify-content-end '>
                            <Col xs={'auto'} >
                                <h1><i><LuClock /></i>24/7 Customer Service</h1>
                            </Col>
                            <Col xs={'auto'} >
                                <h1><i><FaMoneyBill /></i>No credit card required</h1>
                            </Col>
                            <Col xs={'auto'}>
                                <h1><i><MdCall /></i>(719) 445-2808;(719) 445-2809</h1>
                            </Col>
                            <Col xs={'auto'}>
                                <button><i><FaRegBookmark /></i>FREE QUOTE!</button>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </navbar>
            <div className='menu d-block d-md-none  d-flex '>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <Button variant="primary" onClick={handleShow} className='d-md-none d-sm-block'>
                    <FaBars />
                </Button>

                <Offcanvas show={show} onHide={handleClose} placement={'end'} className='w-100'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className='hi'>
                            <li className='nav-item'><Link to='/'>HOME</Link></li>
                            <li className='nav-item'><Link to='/About'>ABOUT</Link></li>
                            <li className='nav-item'><Link to='/Service'>SERVICE</Link></li>
                            <li className='nav-item'><Link to='/Project'>PROJECTS</Link></li>
                            <li className='nav-item'><Link to=''>BLOG</Link></li>
                            <li className='nav-item'><Link to='/Coontact'>CONTACTS</Link></li>

                            <div>
                                <div className='dd'>
                                    <h1><i><LuClock /></i>24/7 Customer Service</h1>
                                    <h1><i><FaMoneyBill /></i>No credit card required</h1>
                                </div>
                                <h1><i><MdCall /></i>(719) 445-2808;(719) 445-2809</h1>
                                <button className='w-100'><i><FaRegBookmark /></i>FREE QUOTE!</button>
                            </div>
                        </div>

                    </Offcanvas.Body>
                </Offcanvas>
            </div>

            <nav>
                <Navbar expand="lg" className="bg-success d-none  d-md-block">
                    <Container className='nav.'>
                        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <li className='nav-item'><Link className='nav-link' to="/">HOME</Link></li>
                                <li className='nav-item'><Link className='nav-link' to="/about">ABOUT</Link></li>
                                <li className='nav-item'><Link className='nav-link' to='/service'>SERVICE</Link></li>
                                <li className='nav-item'><Link className='nav-link' to="/project">PROJECTS</Link></li>
                                <li className='nav-item'><Link className='nav-link' to="#link">BLOG</Link></li>
                                <li className='nav-item'><Link className='nav-link' to="/contact">CONTACTS</Link></li>
                                <li className='nav-item'><Link className='nav-link' to="#link"><IoSearch /></Link></li>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </>
    )
}
