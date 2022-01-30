import React,{useState} from 'react';
/*import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';*/
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { hotelCards } from '../HotelCards';

import "./nav.css"

const Navbar = () => {
    const [slideRef, setSlideRef] = useState(null)
    const sliderSetting = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        
    }
    return <div className='content'>
      
    <Slider ref={setSlideRef} {...sliderSetting}>
        {hotelCards.map((data,index ) =>(
          <div className='card' key={index}>
          <div className='card-header'>
              <h2>{hotelCards.title}</h2>
              <img className='card-image' src={data.imageSrc} />
              </div>
              <div className='card-body'>
              <ul>
                  {data.features.map((feature, index) =>(
                      <li key={index}>{feature}</li>
                  ))}
              </ul>
              </div>
              <button className='card-btn'>Buy Now</button>
           
          </div>  
        ))}
        
    </Slider>
    <div className='controls'>
        <button onClick={slideRef?.slickPrev}>
          left button
        </button>
        <button className='right' onClick={slideRef?.slickNext}>
          right button
        </button>
      </div>
    </div>;
}



export default Navbar;