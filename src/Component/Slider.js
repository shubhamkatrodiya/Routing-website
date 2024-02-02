import React from 'react'


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import slider1 from '../image/slide-1.jpg'
import slider2 from '../image/slide-2.jpg'


export default function slider() {
  return (
    <>
     <OwlCarousel className='owl-theme slider' items={1}>
        <div class='item'>
          <img src={slider1} alt="" />
          <div className='bom'>
            <h1>We Are Your Local Removal  Service Company</h1>
            <h2>GIVE US A CALL TO GET A QUOTE TODAY!</h2>
            <button>FREE QUOTE!</button>
          </div>
        </div>
        <div class='item'>
          <img src={slider2} alt="" className='w-100'  style={{objectFit:'cover'}}/>
        </div>

      </OwlCarousel> 
    </>
  )
}
