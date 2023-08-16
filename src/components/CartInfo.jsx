import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col ,Card,Button} from "react-bootstrap";
import { useDispatch ,useSelector} from "react-redux";
import { UserAdd } from "../Redux/UserAdd/Action";
import { NavLink } from "react-router-dom";
import LoadPage from "./LoadPage";

const CartInfo = () => {

    const dispatch=useDispatch()
    // const [buffring , setbuffring]=useState(false)
  const [itemdata, setitemdata] = useState([]);
  // const data=useSelector((state)=>state.userdata.cart)
  // const load=useSelector((state)=>state.userdata.loading)

  useEffect(() => {
    const getdata=()=>{
      axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setitemdata(res.data);
      })
      .catch((erro) => console.log(erro));
    
    }
    getdata()
  },[]);
  console.log(itemdata);
  
  const senditem=(value)=>{
        dispatch(UserAdd(value))
        // console.log(senditem())
        // console.log(value)
    }
    // const senddetail=(value )=>{
    //   dispatch(UserAdd(value))
    // }
    // const loading=()=>{
    //   return <h1>Loading</h1>
    // }

    
  return (
    <div className="me-5 container">
      <Row >
     {   itemdata.map((item, index) => {
          return (

              <Col md={4} key={item.id} >
            <div  >
                <Card className="card-all" style={{ width: "18rem", height:"26rem", margin:"1rem" }}>
                  <Card.Img variant="top" className="card-img" style={{height:"14rem"}} src={item.image} />
                  <Card.Body>
                    <Card.Title className="text-card">{item.title}</Card.Title>   
                    <h1>${item.price}</h1>
                    <div className="bttn-div  ">   
                    <Button variant="primary" onClick={()=>senditem(item)} className="mt-2 bt-css">Add-Cart</Button>
                    {/* <NavLink to={`/detail/${item.id}`}>

                    <Button variant="primary" onClick={()=>senddetail(item)} className="mt-2 bt-css1">View-Detail</Button>
                    </NavLink> */}
                    </div>
                  </Card.Body>
                </Card>
            </div>
              </Col>
          );
        })}

      </Row>
    </div>
  );
};

export default CartInfo;
