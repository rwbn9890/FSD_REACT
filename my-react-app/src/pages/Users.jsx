import React, { useContext, useEffect } from 'react'
import { ApiContext } from '../context/ApiContext'

const Users = () => {

    const {setUsers} = useContext(ApiContext)

useEffect(() => {
    fetch("https://fakestoreapi.com/users")
    .then((res) => res.json())
    .then((res) => setUsers(res))
},[])

  return (
    <div>Users</div>
  )
}

export default Users