import React from "react";
// import { useEffect } from "react";
// import axios from "axios";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { Row, Col } from "react-bootstrap";
// import { useState } from "react";
import CartInfo from "./CartInfo";
import SliderProduct from "./SliderProduct";
import Carosalx from "./Carosalx";
import FooterPage from "./FooterPage";
import Catagory1 from './Catagory1'

import SlickSliders from "./SlickSliders";
import FlipCate from "./FlipCate";
import SlickSlider2 from "./SlickSlider2";
// import SimpleSlider from "./SliderSlickeruse";
// import Fortest from './Fortest'


const Home = () => {
//   const api = "https://fakestoreapi.com/products";
//   const [data, setdata] = useState([]);
//   const getdata = () => {
//     axios.get(api).then((res) => setdata(res.data));
//   };
//   getdata()

//   useEffect(() => {
//     getdata();
//   }, []);

  
  
  // const data=[
  //   {
  //     name:"",
  //     discrpition:"",
  //     images:"",
  //     // visible:Boolean,
  //     createdAt:"",
      

  //   }
  // ]

  // const product={
  //   ProductName:"",
  //   productSku:"",
  //   ProductDesp:"",
  //   ShortDesp:"",
  //   ProductPrice:Number,
  //   Category:"categoryId",
  //   stock:"",
  //   ProductStatus:"",
  //   ProductImage:"",
  //   Discount:"",
  //   ManufactName:"",
  //   Brand:"",
  //   Visible:Boolean
  // }
  // const user={
  //   name:'',
  //   email:'',
  //   mobile:'',
  //   password:'',
  //   userstatus:'active inactive'
  // }
  return (
    <div className="container-fluid app-back">
      <FlipCate/>
        {/* <SimpleSlider/> */}
      {/* <SliderProduct /> */}
      <Catagory1/>
      <SlickSlider2/>
        <Carosalx/>
      <SlickSliders/>
      <CartInfo />
      <FooterPage/>
      {/* {
      data? loading:<CartInfo />
      } */}
      {/* <Row>
          {data.map((elm, ind) => {
              return (
                <Col md={4}>
              <div key={ind}>
                <Card style={{ width: "18rem" ,height:"24rem"}}>
                  <Card.Img variant="top" style={{height:"12rem"}} src={elm.image} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
        </Col>
            );
          })}
      </Row> */}
      {/* <Fortest/> */}
    </div>
  );
};

export default Home;
