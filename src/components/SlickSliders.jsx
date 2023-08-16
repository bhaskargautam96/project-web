import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpeg'
import img4 from '../img/img4.jpg'

const SlickSliders = () => {
    const settings = {
        dots: true,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        fade:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      };
  return (
    <div className=' my-5 px-3'>
        {/* <h2> Lazy Load</h2> */}
        <Slider {...settings}>
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
            
          </div>
          <div>
          <img src={img3} alt="" />
            
          </div>
          <div>
          <img src={img4} alt="" />
            
          </div>
        </Slider>
      </div>
  )
}

export default SlickSliders