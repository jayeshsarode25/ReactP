import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(10)

  const btnClick = () => {
    setNum(prev => prev + 1);
    setNum(prev => prev + 1);
    setNum(prev => prev + 1); 
    setNum(prev => prev + 1); 
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClick}>click</button>
    </div>
  )
}

export default App