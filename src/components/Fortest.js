import React from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import { Increament ,Decreament} from '../Redux/CountTest/Action'
const Fortest = () => {
    const data=useSelector(state=>state.counter)
    const dispatch=useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(Increament())}>+</button>
            <h1>{data.count}</h1>
        <button onClick={()=>dispatch(Decreament())}>-</button>
    </div>
  )
}

export default Fortest