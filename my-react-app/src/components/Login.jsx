
import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'




const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(AuthContext)

     function handleLogin(){
        let obj = {
            name : username,
            pass : password
        }
        setUser(obj)
    }

  return (
    <div className='flex flex-col gap-3 p-10'>
        <input type="text" placeholder='username' className='border p-3' onChange={(e) => setUsername(e.target.value)} />
        <input type="text" placeholder='password' className='border p-3' onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login