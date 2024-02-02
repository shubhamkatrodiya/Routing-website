import React from 'react'
import Navbar1 from './Navbar1'
import Phone from './Phone'
import Footer from './Footer'

import b2 from '../image/b2.jpg'
import f1 from '../image/f1.jpg'
import { Container, Row, Col } from 'react-bootstrap'
import { FaCheck, FaMedal } from "react-icons/fa";
import { FaRegClock, FaPiggyBank, FaRegStar } from "react-icons/fa6";


export default function About() {
  return (
    <>
      {/* header */}
      <Navbar1 />

      {/* section 2 */}
      <diV className='item2'>
        <img src={b2}></img>
        <div className='bom2'>
          <h1>Need some professional garbage <br></br> removal help?</h1>
          <h2>Contact our Customer Service representative to make an appointment and to answer all your questions!</h2>
          <button>MAKE AN APPOINTMENT</button>
        </div>
      </diV>
      {/* we are */}

      <div className='we'>
        <Container>
          <Row>
            <Col className='we-left' lg={6} md={6} sm={12}>
              <h1>WE ARE JohnnyGo</h1>
              <p>We are a team of professional and skilled experts in all domestic spheres. We offer a wide range of services and at the same time we are always glad to help you with any unconventional household needs:</p>
              <h2><FaCheck style={{ color: '#93CE20' }} />Appliance Removal</h2>
              <h2><FaCheck style={{ color: '#93CE20' }} />Refrigerator removal</h2>
              <h2><FaCheck style={{ color: '#93CE20' }} />Furniture removal</h2>
              <h2><FaCheck style={{ color: '#93CE20' }} />Mattress disposal</h2>
              <h2><FaCheck style={{ color: '#93CE20' }} />Carpet removal</h2>
              <h2><FaCheck style={{ color: '#93CE20' }} />Electronics recycling</h2>
              <h2><FaCheck style={{ color: '#93CE20' }} />Hot tub removal</h2>
              <h2><FaCheck style={{ color: '#93CE20' }} />Bicycle removal</h2>
            </Col>
            <Col className='we-right' lg={6} md={6} sm={12}>
              <img src={f1}></img>
            </Col>
          </Row>
        </Container>
      </div>

      {/* why choice */}

      <div className='choice'>
        <Container>
          <h1>WHY CHOOSE US</h1>
          <Row className='g-3'>
            <Col lg={3} md={3} sm={12}>
              <div className='icon'>
                <i><FaRegClock /></i>
              </div>
              <h2>Always Available</h2>
              <p>We accept requests and phone calls 24/7 so you could resolve any problem whenever you need. Our emergency team will be at your place to fix the breakdown at short notice.</p>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <div className='icon'>
                <i><FaMedal /></i>
              </div>
              <h2>Qualified Agents</h2>
              <p>All our team members are high-qualified, educated and skilled agents. All of them are being trained according to the latest technologies. Our newbies work together with experienced colleagues to study all the details.</p>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <div className='icon'>
                <i><FaPiggyBank /></i>
              </div>
              <h2>Fair Prices</h2>
              <p>Our prices are both fair and affordable for all people. We offer flexible discount system so you could use any service you need.</p>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <div className='icon'>
                <i><FaRegStar /></i>
              </div>
              <h2>Best Offers</h2>
              <p>We provide discounts on the most popular services and on the season services, so you could definitely receive any help without delay.</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* our mission */}

      <div className='mission'>
        <Container>
          <Row>
            <Col className='o-m' md={6} sm={12}>
              <h1>OUR MISSION</h1>
              <p>We work to ensure people’s comfort at their home, and to provide the best and the fastest help at fair prices. We stand for quality, safety and credibility, so you could be sure about our work.</p>
              <p>Initially we started as a company specializing in household maintenance. During our successful work we expanded our list of services. Now we are proud that we can help people with welding, moving, dry cleaning, landscaping and even pest control.</p>
              <p>Every member of our team is indeed good at his job and the company guarantees the quality of work and materials we use.</p>
              <p>We value our every worker and every client, and we strive to do our best to provide you with the best services ever.</p>
              <button>OUR PROJECTS</button>
            </Col>
            <Col className='p-q' md={6} sm={12}>
              <h1>POPULAR QUESTIONS</h1>
              <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Why does a renovation project cost so much?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                      Every renovation project requires a lot of expenses. They include such bulks as materials and labor. Materials, in turns, include tile, mortar, grout, rough plumbing materials, paint and many other. If you need to  make a calculation of your future renovation project, please give us a call or email us, and our manager will help you with this issue.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                      What is the timeline for the project?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                    <div class="accordion-body">
                    Depending on dimensions of the space and amount of work, it takes from a week to a 2-3 month to complete the renovation project.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    What is the total budget for construction?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                    <div class="accordion-body">
                    The total budget may vary as sizes of rooms are very different. For example, approximate budget for a basic bathroom renovation is from $3500 to $5000. If you need detailed calculation of materials and work, please contact our Customer Service Department.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    How is renovation project initiated?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                    <div class="accordion-body">
                    Renovation project can be initiated by the clients. If you need to reconstruct your old house, a room or a basement, you need to appeal to us, approve the project and budget and we’ll start working.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Phone />
      <Footer />

    </>
  )
}
