

import React, { useState } from 'react'

import { Child } from './Child'

function Parent(){

  const [count , setCount] = useState(0)
  const [num , setNum] = useState(0);

  const incCount = () =>{
    setCount(count+1)
  }

  const decCount = () =>{
    setCount(count-1)
  }


  const handleCount = (n) =>{
    setNum(num+n)
  }



return (
    <>


        <button onClick={incCount}>INC = {count} {num}</button>
        <button>{count}</button>
        
        <button onClick={decCount}>DESC = {count}</button>

        <br/>
        <hr/>
        <br/>

        <button onClick={() => handleCount(1)}>+</button>
        <h3>{num}</h3>
        <button onClick={() => handleCount(-1)}>+</button>

        <br/>
        <hr/>
        <br/>
  
    </>
  )
}

export default Parent
