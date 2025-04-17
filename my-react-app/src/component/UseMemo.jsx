import React, { useMemo, useState } from 'react'

const UseMemo = () => {


           
  const [count, setCount] =useState(0)
  const [show, setShow] = useState(false)


  let finalCount = useMemo(() =>{
   return calCount(count)
  }, [count]) 


  function calCount(num){
      for(let i=0; i<1000000000; i++){}
      return num;
  }


  return (

  <>
    <div className="w-xl shadow p-4 mx-auto my-5 text-center">

    <p className="m-4 text-3xl">{finalCount}</p>

    <button onClick={() =>setCount(count+1)} type="button" class="text-white bg-blue-400 dark:bg-blue-500 hover:bg-blue-500 cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Inc Count</button>

    <br />
    <br />
    <br />

    <button onClick={() => setShow(!show)} type="button" class="text-white bg-gradient-to-r  from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2">
      {show ? "Clicked...!" : "please Click"}
    </button>
    </div>
</>
  )
}

export default UseMemo