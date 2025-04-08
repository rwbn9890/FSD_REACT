import { useContext, useEffect } from "react"
import Dashboard from "./Dashboard"
import Products from "./pages/Products"
import Users from "./pages/Users"
import {Link, NavLink, Route, Routes} from "react-router-dom"
import { ApiContext } from "./context/ApiContext"
import { AuthContext } from "./AuthContext/AuthProvider"
import ApiCall from "./ApiCall"
import ThemeToggle from "./components/ThemeToggle"
import { ThemeContext } from "./ThemeContext/ThemeContext"

function App() {

  const {users} = useContext(ApiContext)
  const {tok} = useContext(AuthContext)

  const {theme} = useContext(ThemeContext)

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light", "forest")
    document.querySelector("html").classList.add(theme)
  },[theme])


 
return (
    <div className="dark:bg-slate-950 forest:bg-green-950 h-lvh">

<header className='shadow dark:bg-slate-400 forest:bg-green-400'>
      <div className="container mx-auto flex justify-between p-3">
        <h1 className='bg-slate-400 text-2xl dark:text-slate-950 forest:text-green-950 font-bold'>Routing</h1>
      
      <ThemeToggle/>
    <div className="flex gap-4">
      <NavLink className={({isActive, isPending}) => isActive ? `text-red-400`  : isPending ? `text-green-600`  : `text-slate-800`} to="/dash">Dashboard</NavLink>
    
      <NavLink className={({isActive, isPending}) => isActive ? `text-red-400`  : isPending ? `text-green-600`  : `text-slate-800`} to="/products">Product</NavLink>
     
      <NavLink className={({isActive, isPending}) => isActive ? `text-red-400`  : isPending ? `text-green-600`  : `text-slate-800`} to="/users">Users</NavLink>
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
        <img src={ele} alt="" /> 
        {ele.username}
      </div>
      ))
     }
    </div> 



    {/* <ApiCall/> */}
      
    </div>
  )
}

export default App
