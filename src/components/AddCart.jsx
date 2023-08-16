import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartDel } from "../Redux/UserAdd/Action";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const AddCart = () => {
  const productdata = useSelector((state) => state.userdata.cart);
  const dispatch = useDispatch();
  // const navigate=useNavigate()
  const [price, setprice] = useState();
  const [quantity, setquantity] = useState(0);
  console.log(productdata);

  const send_id = (id) => {
    dispatch(CartDel(id));
    // navigate('/')
  };
  const total = () => {
    let pri = 0;
    productdata.map((e) => {
      return (pri = e.price + pri);
    });
    setprice(pri);
  };
  useEffect(() => {
    total();
  }, [total]);

  return (
    <div className="container-fluid app-back cart-main">
        <div className="container ">
      <div className="row ms-5">
        {productdata.length ? (
          productdata.map((elem, ind) => {
            return (
              <div className="d-flex  mt-4 col-md-12 cart-child" key={ind}>
                <div className=" ">
                  <NavLink to={`/detail/${elem.id}`}>
                    <img
                      style={{ width: "12rem", height: "16rem" }}
                      src={elem.image}
                      alt=""
                    />
                  </NavLink>
                </div>
                <div className="cart-de1">
                  <h3>{elem.title}</h3>
                  <p>{elem.description}</p>



                <div className="cart-bt d-flex">
                    <h2 className="mt-3 h1">Amount :-</h2>
                  <h1 className="display-4">${elem.price}</h1>
                  <button
                    className="btn ms-auto text-light bt-css2"
                    onClick={() => send_id(elem.id)}
                  >
                    Remove-cart
                  </button>
                </div>

                </div>
              </div>
            );
          })
        ) :  <h1 className="text-light no-product">No Product Found</h1>}
        {productdata.length ? <h1 className="text-light">Total Price: ${price}</h1> : null}
      </div>
      </div>

    </div>
  );
};

export default AddCart;
