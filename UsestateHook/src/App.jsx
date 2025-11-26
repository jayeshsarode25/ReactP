import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);

  

  const increment = () => {
    setNum(num + 1);
  }

  const decrement = () => {
    setNum(num - 1);
  }

  return (
    <div className='w-60 h-60 m-4 bg-gray-300 flex flex-col justify-center items-center gap-4'>
      <h1 className='text-6xl bg-black text-white'>{num}</h1>
      <button onClick={increment} className='bg-gray-600 text-white p-4 rounded-2xl'>Increment</button>
      <button onClick={decrement} className='bg-gray-600 text-white p-4 rounded-2xl'>Decrement</button>

    </div>
  )
}

export default App