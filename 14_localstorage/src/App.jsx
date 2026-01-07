import React from 'react'

const App = () => {

  const user = localStorage.getItem('user')
  console.log(user)

  /* Local Storage has 4 important methods (i.e. setItem , getItem , removeItem , Clear) 
  setItem: used to insert data in localstorage
  getItem: used to get the data from localstorage
  removeItem: used to remove data from localstorage
  clear: used to clear the whole local storage
  
  */

  return (
    <div>
    
    </div>
  )
}

export default App
