
import React, { useState, useEffect } from 'react'
import './App.css'
import User from './user'

function App() {

const [status, setStatus] =useState(false)

const [count, setCount] = useState(1)
const [data, setData] = useState([])




const fetchData = () => {
  fetch(`https://randomuser.me/api??page=${count}&results=8`)
  .then((res) => res.json())
  .then((res) => setData(res.results))
}


// const handleCount = () => {
//   setCount(count+1)
// }


useEffect(() =>{
  // handleCount()
  fetchData()
},[count, status])

return (
    <>
    <User data={data} />
  <button onClick={() => {setStatus(!status)}}>{status ? "True" : "False"} - {count}</button>
  <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li onClick={() => setCount(count-1)} class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">{count}</a></li>
    <li onClick={() => setCount(count+1)} class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
   
    </>
  )
}

export default App
