import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({setLogin}) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleLogin = () => {

        if(username=="admin" && password=="1234"){

              

               sessionStorage.setItem("login", JSON.stringify(true))

                navigate('/home')
        }
        else{

        }
    }


    return (
        <div className='m-auto' style={{maxWidth:"500px"}}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input onChange={(e) => setUsername(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" />
            </div>
           
            <button onClick={handleLogin} type="submit" class="btn btn-primary">Submit</button>
        </div>
    )
}

export default Login