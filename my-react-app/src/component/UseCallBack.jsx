import React, { useCallback, memo, useEffect, useState } from 'react'
import Todo from './Todo'

const UseCallBack = () => {
         
  const [count, setCount] =useState(0)
  const [todo, setTodo] = useState(["Todo -"])


//   function addTodo(){
//     setTodo([...todo, "Todo - "])
//   }

const addTodo = useCallback(()=>{
    setTodo([...todo, "Todo - "])
}, [todo])

  return (
    <div className="w-xl shadow p-4 mx-auto my-5 text-center">


        <Todo addTodo={addTodo} todo={todo} />

    <button onClick={() =>setCount(count+1)} type="button" className="text-white bg-blue-400 dark:bg-blue-500 hover:bg-blue-500 cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Inc Count <b className='bg-white text-blue-800 text-xl px-2'>{count}</b></button>

    <br />
    <br />
    <br />

  


    </div>
  )
}
export default UseCallBack;


