import React from 'react'
import {Link} from "react-router-dom"

import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate()
  return (
    <header className='shadow '>
      <div className="container mx-auto flex justify-between p-3">
        <h1 className='bg-slate-400 text-2xl font-bold'>Routing</h1>
        <div className={JSON.parse(sessionStorage.getItem("login")) ? `flex gap-3` : `invisible`} >
          {/* <Link /> */}
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="products">Product</Link>
        <Link to="users">Users</Link>
        <Link to="contact">Contact</Link>
        <button onClick={() => {sessionStorage.removeItem("login"); navigate('/')}}>Logout</button>
        </div>
  </div>
    </header>
  )
}

export default Navbar