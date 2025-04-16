import React, { useRef, useState } from 'react'

const UseRef = () => {

    const [name, setName] = useState("")


    let input1 = useRef()
    let input3 = useRef()

    const changeFocus = () => {
      let in2 = document.getElementById("input2")
      if(name != ""){

          in2.style.backgroundColor = "orange"
      }

      console.log(input1.current)

      input1.current.focus()

      console.log(input3.current.value)
     input3.current.style.width = "500px"
    }

  return (
    <div className='text-center'>
        <div className="flex justify-between ">
            <input className='shadow' ref={input1} />
            <input className='shadow' onChange={(e) => setName(e.target.value)}  id="input2" />
            <input className='shadow' ref={input3} />
        </div>
        <button onClick={changeFocus} className=" shadow px-5 bg-amber-950">Click</button>
    </div>
  )
}

export default UseRef