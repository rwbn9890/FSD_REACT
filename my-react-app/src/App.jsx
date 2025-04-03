import { useContext } from "react"
import Dashboard from "./Dashboard"
import Products from "./pages/Products"
import Users from "./pages/Users"
import {Link, NavLink, Route, Routes} from "react-router-dom"
import { ApiContext } from "./context/ApiContext"
import { AuthContext } from "./AuthContext/AuthProvider"

function App() {

  const {users} = useContext(ApiContext)
  const {tok} = useContext(AuthContext)




return (
    <>

<header className='shadow '>
      <div className="container mx-auto flex justify-between p-3">
        <h1 className='bg-slate-400 text-2xl font-bold'>Routing</h1>
      
    <div className="flex gap-4">
      <NavLink className={({isActive, isPending}) => isActive ? `text-red-400`  : isPending ? `text-green-600`  : `text-slate-800`} to="/dash">Dashboard</NavLink>
     {tok ?
      <NavLink className={({isActive, isPending}) => isActive ? `text-red-400`  : isPending ? `text-green-600`  : `text-slate-800`} to="/products">Product</NavLink>
      :
      <></>} 
      <NavLink className={({isActive, isPending}) => isActive ? `text-red-400`  : isPending ? `text-green-600`  : `text-slate-800`} to="/users">Users</NavLink>
    </div>
        
       
  </div>
    </header>

    <Routes>
      <Route path="/:dash" element={<Dashboard/>}/>
      {tok &&
      <Route path="/products" element={<Products/>}/>
}
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
