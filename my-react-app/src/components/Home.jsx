import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'



const Home = () => {

  const [data, setData] = useState([])

  const fetchUsers = async () => {
    const res = await fetch(`https://api.github.com/users`)
    const user = await res.json()
      setData(user)

    }

    console.log(data)

  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <div className='p-5 container bg-primary fs-5'>
      
      <div className="row g-3">
        {
          data.map((use) => (
          <div className="col-3">
            <div className="card" >
              <img src={use.avatar_url} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{use.login}</h5>
                <a className="btn btn-primary"> <Link to={`/user/${use.login}`} className='nav-link'>show</Link> </a>
              </div>
            </div>
          </div>
          ))
        }
      
      </div>

    </div>
  )
}

export default Home