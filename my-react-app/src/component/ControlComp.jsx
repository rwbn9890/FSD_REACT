import React, { useState } from 'react'

const ControlComp = () => {



    const [name, setName] = useState("")


    const getData = () => {
      let t = document.getElementById("input")
      let val = t.value;
      console.log(t.value)
      t.value = val;
    }
  


  return (
    <div>
         <div className=" w-4xl border text-center p-4">

<input type="text" id="input"  className="shadow border shadow-slate-900" />

<button onClick={getData} className="border bg-slate-400">click</button>


<br />
<br />
  <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="shadow border shadow-slate-900" />

</div>
    </div>
  )
}

export default ControlComp