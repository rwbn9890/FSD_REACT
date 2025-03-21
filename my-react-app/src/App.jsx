import { useEffect, useState } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Product from "./components/Product"

import {BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import User from "./components/user"


function App() {

  const navigate = useNavigate()

  const [login, setLogin] = useState(false)


 

useEffect(() => { 
  !JSON.parse(sessionStorage.getItem("login")) ? navigate('/') : ``
},[])



return (
    <>


      <Navbar login={login} setLogin={setLogin}/>   
      <Routes>
        <Route path='/' element={ <Login  setLogin={setLogin} />}/>
        <Route path='/home' element={ <Home/>} />
        <Route path='/about' element={ <About/>} />
        <Route path='/product' element={ <Product/>} />
        <Route path='/contact' element={ <Contact/>} />
        <Route path='/user/:userId' element={ <User/>} />

      </Routes> 




    </>
  )
}

export default App
