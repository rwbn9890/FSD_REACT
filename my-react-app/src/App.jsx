import { useContext } from "react"
import Dashboard from "./Dashboard"
import Products from "./pages/Products"
import Users from "./pages/Users"
import {Link, Route, Routes} from "react-router-dom"
import { ApiContext } from "./context/ApiContext"

function App() {

  const {users} = useContext(ApiContext)




return (
    <>

<header className='shadow '>
      <div className="container mx-auto flex justify-between p-3">
        <h1 className='bg-slate-400 text-2xl font-bold'>Routing</h1>
      
    <div className="flex gap-4">
      <Link to="/dash">Dashboard</Link>
        <Link to="/products">Product</Link>
        <Link to="/users">Users</Link>
    </div>
        
       
  </div>
    </header>


    <Routes>
      <Route path="/:dash" element={<Dashboard/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/users" element={<Users/>}/>
    </Routes>

    <div className="max-w-5xl mx-auto grid grid-cols-4">
     {
      users.map((ele)=>(
        <div className="shadow shadow-slate-500 rounded-2xl">
        {/* <img src={ele.} alt="" /> */}
        {ele.username}
      </div>
      ))
     }
    </div>
      
    </>
  )
}

export default App
