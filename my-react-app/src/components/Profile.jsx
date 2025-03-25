import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Profile = () => {

    const {details, user} = useContext(AuthContext)

  return (
    <div>
        <h2>{user.name}</h2>
        <h2>{user.pass}</h2>
    </div>
  )
}

export default Profile