import React, { useMemo, useState } from 'react'
import Add from './Add'

const Optimize = () => {
    const [count, setCount]  = useState(0)

    const [add, setAdd] = useState([])

    // const changeCount = () => {
        
    // }

    const changeCount = useMemo(() => {
        setCount(count+1)
    }, [count])


    const changeAdd = () => {
        setAdd([...add, "Adding"])
    }

    

  return (
    <div>
        
        <button onClick={changeCount} className='bg-amber-400 rounded m-5 shadow px-5 focus:bg-amber-600'>Inc <b>{count}</b></button>

        <button onClick={changeAdd} className='bg-fuchsia-500 rounded m-5 shadow px-5 focus:bg-fuchsia-600' >Add</button>
        <Add add = {add} />
    </div>
  )
}

export default Optimize