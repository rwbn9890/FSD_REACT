
// import './App.css'

import { useState } from "react"
import Child from "./components/Child"
import Login from "./components/Login"
import Profile from "./components/Profile"

import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'



function App() {

  const [count, setCount] = useState(1)

  const {detail, user} = useContext(AuthContext)

   const handleCount = (num) => {
    setCount(count + num)
   }



return (
    <>
    {/* <Child count={count} handleCount={handleCount}/> */}
      {user.pass}
      <div className="container max-w-200 border mx-auto">
      <Login/>
      <Profile/>
      </div>
   
    </>
  )
}

export default App
