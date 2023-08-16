import React, { createContext, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { UserAdd } from '../Redux/UserAdd/Action';

const SliderData = ({data}) => {
    // const {title,price,image}=data
    const dispatch=useDispatch()

    const send=(values)=>{
      // console.log(value)
      dispatch(UserAdd(values))

    }
  return (
        <>   
           <div className='d-flex container '>
         <Card  className="card-all" style={{ width: '18rem' }}>
      <Card.Img variant="top" className="card-img" style={{height:"12rem"}} src={data.image} />
      <Card.Body>
        <Card.Title  className="text-card">{data.title}</Card.Title>
        <h1>${data.price}</h1>
          <div className="bttn-div">
        <Button variant="primary" className='bt-css' onClick={()=>send(data)}>Add-Cart</Button>
        </div>
      </Card.Body>
    </Card>


    </div>

   
    </>
  )
}

export default SliderData