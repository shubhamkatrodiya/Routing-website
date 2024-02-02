import React from 'react'
import Container from 'react-bootstrap/Container';
import { IoSearch, IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import {FaRegEnvelope } from "react-icons/fa";
import{Row,Col } from 'react-bootstrap';

export default function Phone() {
    return (
        <>

            <div className='phone'>
                <Container>
                    <Row>
                        <Col className='dd' sm={12} md={4} lg={4}>
                            <i><IoCall /></i>
                            <h3>Phone : <br></br>(719) 445-2808; (719) 445-2809</h3>
                        </Col>
                        <Col className='dd' sm={12} md={4} lg={4}>
                            <i><FaLocationDot /></i>
                            <h3>Address:<br></br>4578 Marmora Road, Glasgow</h3>
                        </Col>
                        <Col className='dd' sm={12} md={4} lg={4}>
                            <i><FaRegEnvelope /></i>
                            <h3>E-mail:<br></br>info@demolink.org</h3>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}
