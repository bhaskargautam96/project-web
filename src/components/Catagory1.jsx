import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { UserAdd, ViewDetail } from "../Redux/UserAdd/Action";

const Catagory1 = () => {
  const dispatch = useDispatch();
  const [data, setdata] = useState([]);

  const [data1, setdata1] = useState([]);
  const datagetapi = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setdata(res.data));
  };
  useEffect(() => {
    datagetapi();
  }, []);

  const filterResult = (catItem) => {
    const result = data.filter((curdata) => {
      return curdata.category === catItem;
    });
    setdata1(result);
  };
  const senditem = (value) => {
    dispatch(UserAdd(value));
  };
  // const sendView=(itevalue)=>{
  //     dispatch(ViewDetail(itevalue))
  // }
  // const filtercat =()=>{

  // }
  console.log(data);
  return (
    <div className="py-5 me-5 container ct-2">
      {/* <button
        className="btn bt-css2 mx-2 mybtn"
        onClick={() => setdata1(data)}
      >
        All
      </button> */}
      <button
        className="btn  bt-css2 mx-2 mybtn"
        onClick={() => filterResult("men's clothing")}
      >
        Men
      </button>
      <button
        className="btn bt-css2 mx-2 mybtn"
        onClick={() => filterResult("women's clothing")}
      >
        Women
      </button>
      <button
        className="btn bt-css2 mx-2 mybtn"
        onClick={() => filterResult("electronics")}
      >
        Electronics
      </button>
      <button
        className="btn bt-css2 mx-2 mybtn"
        onClick={() => filterResult("jewelery")}
      >
        Jewelery
      </button>

      {/* <h1>Catagory Page</h1> */}

      <div className="row">
        {data1.map((item, ind) => {
          return (
            <div className="col-md-4 p-3" key={ind}>
              <div>
              <Card className="card-all" style={{ width: "18rem", height:"26rem", margin:"1rem" }}>
                  <Card.Img variant="top" className="card-img" style={{height:"14rem"}} src={item.image} />
                  <Card.Body>
                    <Card.Title className="text-card">{item.title}</Card.Title> 
                    <h1>${item.price}</h1>  
                    <div className="bttn-div">   
                    <Button variant="primary" className="bt-css" onClick={()=>senditem(item)}>Add-Cart</Button>

                    {/* <NavLink to={`/detail/${item.id}`}>

                    <Button variant="primary" 
                    // onClick={()=>sendView(item)} 
                    className="mt-2 bt-css1">View-Detail</Button>
                    </NavLink> */}
                    </div>
                  </Card.Body>
                </Card>
                 
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catagory1;
