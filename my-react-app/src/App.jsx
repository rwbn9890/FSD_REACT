
import React, { useEffect, useState } from 'react'
import './App.css'


function App() {
const [data, setData] =useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)

const [title, setTitle] = useState("")
const [image, setImage] = useState("")
const [price, setPrice] = useState("")
const [desc, setDesc] = useState("")
const [editId, setEditId] = useState("");






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



const handleSubmit = async() => {

let obj = {
  id:Math.round(Math.random()*1000),
  title,
  desc,
  price,
  images:[image]
}

    await fetch(`http://localhost:8000/users/${editId}`, {
      method: editId ? "PATCH" : "POST",
      body: JSON.stringify(obj),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    setEditId("")
}


  const editProduct = async (ele) => {
    setEditId(ele.id)
    setTitle(ele.title)
    setPrice(ele.price)
    setImage(ele.images[0])
    setDesc(ele.description)


    // let obj = {
    //     title:"bhavangar bhujiya"
    // }
    // await fetch(`http://localhost:8000/users/${id}`, {
    //   method: "PUT",
    //   body: JSON.stringify(obj),
    //   headers:{
    //     "Content-Type" : "application/json"
    //   }
    // })
    
}



  const delProduct = (id) => {
    let obj = {
      method:"DELETE",
    }
     fetchAndUpdateData(users_url+id, obj)
  }


return (
    <>
    <div className="container">
      <h1 className='bg-amber-300 hover:text-white flex'>this is tailwind</h1>
      <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className='form-control' />
      <input type="text" onChange={(e) => setImage(e.target.value)} value={image} className='form-control' />
      <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} className='form-control' />
      <input type="text" onChange={(e) => setDesc(e.target.value)} value={desc} className='form-control' />
      <button onClick={() => handleSubmit()}>Add</button>
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
                <button className="btn btn-light" onClick={() => editProduct(ele)}>Edit</button>
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
