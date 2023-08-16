import React, { useContext, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Card ,Button } from "react-bootstrap";
// import "./styles.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { UserAdd } from "../Redux/UserAdd/Action";

const Carosalx =()=> {
  // const cartdata=useSelector(state=>state.userdata.cart)
  const dispatch=useDispatch()
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [data,setdata]=useState([])
  const dataget=()=>{
    axios.get("https://fakestoreapi.com/products?sort=desc")
    .then(res=>setdata(res.data))
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    dataget()
  },[])

    const send=(valuess)=>{
        dispatch(UserAdd(valuess))
  }
  return (
    <>
  
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >

        {
            data.map((item,index)=>{
                return(
                    <>
    
        <SwiperSlide className="swiperimg itemde-center">
          {/* <img className="img-full" src={item.image} />
          <p>
            {item.price}
          </p> */}


         <Card  className="card-all" style={{ width: '18rem' }}>
      <Card.Img  className="card-img" style={{height:"12rem"}} src={item.image} />
      <Card.Body>
        <Card.Title  className="text-card">{item.title}</Card.Title>
        <h1>${item.price}</h1>
          <div className="bttn-div">
        <Button variant="primary" className='bt-css' 
        onClick={()=>send(item)}
        >Add-Cart</Button>
        </div>
      </Card.Body>
    </Card>


   
        </SwiperSlide>
                    </>
                )
            })
        }


    
      </Swiper>


      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={1}
        slidesPerView={8}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      > {
        data.map((item,index)=>{
            return (
                <>
        <SwiperSlide className="img-swiper">
          <img src={item.image} className="swi-img" />
        </SwiperSlide>

                </>
            )
        })
      }    
      </Swiper>
    </>
  );
}

export default Carosalx;