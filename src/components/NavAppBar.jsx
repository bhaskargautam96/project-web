import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { FaSistrix } from "react-icons/fa";
import { useState } from "react";
function NavAppBar() {
  const data = useSelector((state) => state.userdata.cart);

  const [fix,setfix]=useState(false)
   const scrollfix=()=>{
    if(window.scrollY>=30){
     setfix(true)
    }
     else{
      setfix(false)
    }
    }

   window.addEventListener("scroll",scrollfix)
   
   
  return (
  

    <Navbar className="nappbar" bg="dark"expand="lg">
      <Container >
        <Navbar.Brand href="#home" className="text-light">
          FAKE-PRODUCT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-light ">
            <NavLink className="nav-link text-light mt-2" to="/">
              Home
            </NavLink>
            {/* <NavLink className="nav-link text-light" to="/product">
              Category
            </NavLink> */}
            
            <div className="ms-5 d-flex ">
              <div className=" form-div">
                <input type="text" className="form-control" />
                <FaSistrix className="icon-search" />
              </div>
              <NavLink className={"nav-link text-light"} to="/login">
                <button className="btn btn-success bt-css2">Login</button>
              </NavLink>
            </div>
            <NavLink className="nav-link text-light " to="/cart">
              <div className="position-relative positi-btn d-flex">
            {/* <p className="rounded bg-danger me-5 positi-p">{data.length}</p> */}
                <button className="btn btn-success bt-css2 cart-btn d-flex">
              <BsFillCartCheckFill className="text-success add-icn mx-1"/><span >Cart({data.length})</span>
            </button>
            </div>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          
  );
}

export default NavAppBar;
