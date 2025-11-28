import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")

  const submitHandeler = (event) => {
    event.preventDefault();
    console.log("Form Submitted", title);
  }

  return (
    <div>
      <form onSubmit={(event) => submitHandeler(event)}>
        <input type="text" 
        placeholder='Enter The Name'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App