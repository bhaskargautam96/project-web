import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { CartDel } from '../Redux/UserAdd/Action'
import { NavLink } from 'react-router-dom'

const Details = () => {
    const productdata=useSelector(state=>state.userdata.cart)
    const dtailpage=useSelector(state=>state.userdata.cartdetail)
    // const [quentity ,setquentity]=useState(1)
    const [amount,setAmount]=useState(1)
    const dispatch =useDispatch()
    const navigatehomepage=useNavigate()
    const [data,setdata]=useState([])
    const {id}=useParams()
    console.log(id)
    const compare=()=>{
        let filterdata=productdata.filter((item,ind)=>{
            return item.id==id
            // if(item.id===item.id || item.id==id){
            //     return item
            // }
        })
        setdata(filterdata)

    }
    useEffect(()=>{
        compare()
    },[id])
    const remover=(id)=>{
        dispatch(CartDel(id))
        navigatehomepage('/')
    }
    const Increase=()=>{
        if(amount<=10-1){
            // setAmount(amount*price)
            setAmount(amount+1)
            if(amount==9){
                alert("Maximum Quantity is Reached")
                // amount=9;
            }

        }else{
            // setAmount(amount-0)
        }
    }
    const Decrease=()=>{
        if(amount>1){
            setAmount(amount-1)
        }
    }
  return (
    <div className='container-fluid detail-product' style={{height:"100vh",background:"#0f0f0f"}}>
            <div className="container ">

    {/* <h1 className='text-light'>   Product all Details   </h1>     */}
    {
        data.map((el,ind)=>{
            return(
                
                <div className='d-flex inner-detail' style={{height:"100%",background:"#0f0f0f"}} key={ind}>

                <div  className='product-img'>
                    <img src={el.image} style={{width:"28rem",height:"25rem"}} alt="" />
                    <div className="buy-bt py-4 ">
                    <NavLink to={`/payment`}>

                    <button className='btn text-light bt-css2'>Buy Now</button>
                    </NavLink>

                    <button className='btn btn-danger ms-5 bt-css2' onClick={()=>remover(el.id)}> Remove</button>
                    </div>
                </div>
                <div className='inner-child ms-5'>
                    <h2>{el.title}</h2>
                    <p>{el.description}</p>
                    <h1 className='text-danger'>${el.price*amount}</h1>
                    <p>Item in stock 10</p>
                    <div className="bt-amt d-flex">

                    <button className='btn btn-dark bt-css2' onClick={()=>Decrease()}>-</button>
                    <h4 className='mx-3'>{amount }</h4>
                    <button className='btn btn-dark bt-css2' onClick={()=>Increase(el.id)}>+</button>
                    </div>
                </div>
                </div> 
            )
        })
    }
    {
        dtailpage.map((le)=>{
            return (<>
            <h1>{le.title}</h1>
            </>)
        })
    }
    </div>
    </div>
  )
}

export default Details