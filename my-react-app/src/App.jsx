
import React, { useState } from 'react'
import './App.css'
// import { Child } from './components/Child'
import  Parent from './components/Parent'
import { Props } from './props/Props'

function App() {

  const [show, setShow] = useState(true)

  console.log(show)


return (
    <>
    <div className='border p-5'>
      <input type={show ? "password" : "text"} />
      <button className='btn btn-sm ' style={{transform:"translateX(-100%)"}} onClick={ () => setShow(!show) }>
       {
        !show ?
        <i class="fa-solid fa-eye"></i>
        :
        <i class="fa-solid fa-eye-slash"></i>
       } 
        </button>
    </div>
      {/* <Parent /> */}
      <Props/>
    </>
  )
}

export default App
