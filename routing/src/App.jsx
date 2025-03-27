import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar/Navbar"
import Products from "./components/Products"
import Users from "./components/Users"
import Login from "./components/Login"



function App() {



  return (
    <>
  
 
    <Navbar/> 

    <div className="my-5">
         <Routes>
            <Route path="/" element={<Login />}  />
            <Route path="home" element={<Home />}  />
            <Route path="about" element={<About/>}  />
            <Route path="products/:prodId" element={<Products/>}  />
            <Route path="users" element={<Users/>}  />
            <Route path="contact" element={<Contact/>}  />
          </Routes>
    </div>
         

   
   
    </>
  )
}

export default App

{/* <Home num={num}>
  <ul>
    <li>this is first</li>
    <li>this is first</li>
    <li>this is first</li>
  </ul>
</Home> */}