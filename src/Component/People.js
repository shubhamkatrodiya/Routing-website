import React from 'react'


import {Container } from 'react-bootstrap';
import {FaQuoteLeft} from "react-icons/fa";



import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const Options = {
    responsive: {
      0: {
        items: 1,
      },
      770: {
        items: 2,
      },
      1000:{
        items: 3,
      }
    }
  }


export default function People() {
    return (
        <>
            <div className='people'>
                <Container>
                    <h1>What People Think About Us</h1>

                    <OwlCarousel className='owl-theme slider' items={3} {...Options}>

                        <div class='item'>
                            <div className='item1'>
                                <i><FaQuoteLeft /></i>
                                <p>Thanks to JohnnyGos team my house is now as good as new! They helped me to renew my roof, fixed the heating system and rewired the house. I’m very grateful as I could never do it alone! These guys are very careful, skilled and indeed fast!</p>
                            </div>
                        </div>
                        <div class='item'>
                            <div className='item1'>
                                <i><FaQuoteLeft /></i>
                                <p>Thanks to JohnnyGo’s team my house is now as good as new! They helped me to renew my roof, fixed the heating system and rewired the house. I’m very grateful as I could never do it alone! These guys are very careful, skilled and indeed fast!</p>
                            </div>
                        </div>
                        <div class='item'>
                            <div className='item1'>
                                <i><FaQuoteLeft /></i>
                                <p>Thanks to JohnnyGo’s team my house is now as good as new! They helped me to renew my roof, fixed the heating system and rewired the house. I’m very grateful as I could never do it alone! These guys are very careful, skilled and indeed fast!</p>
                            </div>
                        </div>
                        <div class='item'>
                            <div className='item1'>
                                <i><FaQuoteLeft /></i>
                                <p>Thanks to JohnnyGo’s team my house is now as good as new! They helped me to renew my roof, fixed the heating system and rewired the house. I’m very grateful as I could never do it alone! These guys are very careful, skilled and indeed fast!</p>
                            </div>
                        </div>
                        <div class='item'>
                            <div className='item1'>
                                <i><FaQuoteLeft /></i>
                                <p>Thanks to JohnnyGo’s team my house is now as good as new! They helped me to renew my roof, fixed the heating system and rewired the house. I’m very grateful as I could never do it alone! These guys are very careful, skilled and indeed fast!</p>
                            </div>
                        </div>

                    </OwlCarousel>
                </Container>

            </div>

        </>
    )
}
