import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function increaseNum(){
    console.log("Increasing")
    setNum(num+1)
  }

  function decreaseNum(){
    console.log("Decreasing")
    setNum(num-1)
  }

  function jumpby5(){
    setNum(num+5)
  }

  return (
    <div>
      <h1> {num} </h1>
      <button onClick={increaseNum} >Increase</button>
      <button onClick={decreaseNum} >Decrease</button>
      <button onClick={jumpby5}>Jump by 5</button>
    </div>
  )
}

export default App
