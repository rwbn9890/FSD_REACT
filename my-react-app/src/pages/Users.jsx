import React, { useContext, useEffect } from 'react'
import { ApiContext } from '../context/ApiContext'

const Users = () => {

    const {setUsers, users} = useContext(ApiContext)

useEffect(() => {
    fetch("https://fakestoreapi.com/users")
    .then((res) => res.json())
    .then((res) => setUsers(res))
},[])

console.log(users)
  return (
    <div className='border p-5 max-w-7xl mx-auto'>
    <div className="grid grid-cols-4 gap-3">
     {
      users.map((ele) => (
        <div key={ele.id} className='rounded-2xl shadow shadow-slate-400 '>
        <img className='w-full h-56' src={ele.image} alt="" />
        <h2>{ele.name.firstname } {ele.name.lastname}</h2>
      </div>
      ))
     }
    </div>
</div>
  )
}

export default Users