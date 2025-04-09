import { useEffect, useState } from "react"
import Input from "./component/Input"
import SelectCurrency from "./component/SelectCurrency"
import fetchApi from "./utilities/fetchApi"

function App() {

  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [amountFrom, setAmountFrom] = useState(0)
  const [amountTo, setAmountTo] = useState(0)

  const [obj, setObj] = useState({username:"red", num:"1234"})

  const data = fetchApi(from, to)


  

  const selectCurFrom = (e) => {
    setFrom(e.target.value)
  }

  const selectCurTo = (e) => {
    setTo(e.target.value)
  }


  function changeAmountFrom(e) {
    let val = e.target.value
    setAmountFrom(val)

    setObj((prev) => ({...prev, num : e}))

    console.log(val)
    setAmountTo(data[to] * val)
  }


  function changeAmountTo(e) {
    let val = e.target.value
    setAmountTo(val)
    console.log(val / data[to])
    
    setAmountFrom(val / data[to])

  } 


  useEffect(()=>{
    setAmountTo(data[to] * amountFrom)
    setAmountFrom(data[from] * amountTo)
  },[from, to, data])




  function swap(){
    let sw = from;
    setFrom(to)
    setTo(sw)
    
  }


  return (
    <div className="h-lvh flex justify-center items-center">

      <div className=" w-3xl m-auto shadow rounded shadow-amber-300 p-4  backdrop-blur-xl">

        <div className="shadow p-7 m-2 flex flex-col gap-3">
          <div className="flex">
            <label className="font-bold" htmlFor="">From {from.toLocaleUpperCase()}</label>
          </div>
          <div className="flex justify-between">
            <Input place={from} changeAmount={changeAmountFrom} amount={amountFrom} />
            <SelectCurrency selectCur={selectCurFrom} data={data} curCur={from} />
          </div>
        </div>
        <div className="p-3 text-center">
          <button onClick={swap} className="bg-indigo-600 text-white font-bold px-3 py-1 shadow rounded"> Swap</button>
        </div>
        <div className="shadow p-7 m-2 flex  flex-col gap-3">
          <div className="flex">
          <label className="font-bold" htmlFor="">To {to.toLocaleUpperCase()}</label>
          </div>
          <div className="flex justify-between">
          <Input place={to} changeAmount={changeAmountTo} amount={amountTo} />
          <SelectCurrency selectCur={selectCurTo} data={data} curCur={to} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
