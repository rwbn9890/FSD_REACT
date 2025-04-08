import { useEffect, useState } from "react"
import Input from "./component/Input"
import SelectCurrency from "./component/SelectCurrency"
import fetchApi from "./utilities/fetchApi"

function App() {

  const [from, setFrom]  = useState("usd")
  const [to, setTo]  = useState("inr")
  const [amountFrom, setAmountFrom]  = useState(0)
  const [amountTo, setAmountTo]  = useState(0)

   const data = fetchApi(from, to)


   const selectCurFrom = (e) => {
    setFrom(e.target.value)
   }

   const selectCurTo = (e) => {
    setTo(e.target.value)
   }

   
   function changeAmountFrom(e){
    let val  = e.target.value
    setAmountFrom(val)
    setAmountTo(data[to]*val)
   }

   const changeAmountTo = (e) => {
    let val  = e.target.value
    setAmountTo(val)
    setAmountFrom(data[from])
    console.log(data[from])
   }


 
return (
    <div className="h-lvh flex justify-center items-center">

    <div className=" w-3xl m-auto shadow rounded shadow-slate-900 p-4">

       <div className="shadow shadow-blue-400 p-10 m-2 flex justify-between">
        <label htmlFor="">From</label>
          <Input place={from} changeAmount={changeAmountFrom} amount={amountFrom}/>
          <SelectCurrency selectCur={selectCurFrom} data={data}/>
       </div>
       <div className="shadow shadow-blue-400 p-10 m-2 flex justify-between">
        <label htmlFor="">To</label>
          <Input place={to} changeAmount={changeAmountTo} amount={amountTo}/>
          <SelectCurrency selectCur={selectCurTo} data={data}/>
       </div>

    </div>
    </div>
  )
}

export default App
