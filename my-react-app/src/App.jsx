
import React, { useEffect, useState } from 'react'
import './App.css'


function App() {
const [data, setData] =useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)



let prod_url= `http://localhost:8000/prod`
let users_url = `http://localhost:8000/users/`



  const fetchAndUpdateData = async (url, obj) =>{
    setLoading(true);
   try { 
      const res = await fetch(url, obj);
      const prod = await res.json();
      setData(prod)
   } catch (error) {
      setError(error)
      console.log("message: " + error)
   } finally {
    setLoading(false)
   }
  }

  useEffect(() => {
    fetchAndUpdateData(users_url, {})
  }, [])

  console.log(data)



  const delProduct = (id) => {

    const itemId = 4;
const url = `http://localhost:8000/users/${+itemId}`;

      fetch(url, {
        method: "DELETE"
      }).catch(err => {
        console.log(err)
      })
  }


return (
    <>
    <div className="container">
      <div className="row">
        { 
        loading ? (
          <h2>loading...!</h2>
        ): error ?  (
          <h2>Something went wrong</h2>
        ) : (
           data.map((ele) =>(
            <div key={ele.id} className="col-3">
            <div className="card">
              <img src={ele.images[0]} alt="" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{ele.title}</h5>
                <p className="card-content"></p>

                <button className="btn btn-light" onClick={() => delProduct(ele.id)}>Delete</button>
              </div>
            </div>
          </div>
          ))
        )
         
        }
      </div>
    </div>
    </>
  )
}

export default App
