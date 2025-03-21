import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'



const User = () => {
    
    const [singleUser, setSingleUser] = useState([])
    
    const {userId} = useParams()


     const fetchUsers = async () => {
        const res = await fetch(`https://api.github.com/users/${userId}`)
        const user = await res.json()
        setSingleUser(user)
    
        }
    
        console.log(singleUser)
    
      useEffect(() => {
        fetchUsers()
      }, [userId])



  return (
    <div className='container bg-primary-subtle py-3'>
        
        <div className="row g-3 ">
            <div className="col-6">
                <img className='img-thumbnail' src={singleUser.avatar_url
} alt="" />
            </div>
            <div className="col-6 p-5">
                    <h2>{singleUser.name}</h2>
                    <h4>{singleUser.followers}</h4>
                    <p className="d-flex"><span className='badge text-bg-warning rounded-0'>public_repos</span> <span className='badge text-bg-success rounded-0'>{singleUser.public_repos}</span></p>
            </div>
        </div>
    </div>
  )
}

export default User