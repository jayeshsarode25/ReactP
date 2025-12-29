import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice';

function App() {

  const [num, setNum] = useState(0)

  const counter = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();


  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={()=>{
        dispatch(increment())
      }}>
        increment
      </button>
      <button onClick={()=>{
        dispatch(decrement())
      }}>
        decrement
      </button>


      <input type="number" value={num} 
        onChange={(e)=>{
          setNum(e.target.value)
        }}
      />



      <button onClick={()=>{
        dispatch(incrementByAmount(Number(num)))
      }}>
        increment by 5
      </button>
    </div>
  )
}

export default App