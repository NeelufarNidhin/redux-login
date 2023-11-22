import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../actions/counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value);
    const myname = useSelector((state) => state.counter.name)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Counter App</h1>
          <h4>{count}</h4>  
<h3>{myname}</h3>
          <button onClick={()=>{
            dispatch(increment())
          }}>Increment</button>  
           <button onClick={()=>{
            dispatch(decrement())
          }}>Increment</button>      
    </div>
  )
}


