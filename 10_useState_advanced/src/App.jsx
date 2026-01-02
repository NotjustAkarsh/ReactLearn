import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user:"Akarsh", age:21})

  const btnClicked = ()=>{ 
    console.log(num.user);
    console.log(num.age);
  }
  

  return (
    <div>
      <h1> {num.user}, {num.age} </h1>
      <button onClick={btnClicked}> Click</button>
    </div>
  )
}

export default App
