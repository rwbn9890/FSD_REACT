import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'



const Products = () => {

  const {prodId} = useParams()

    const [data, setData] = useState({})
  
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${prodId}`)
        .then(res => res.json())
        .then(res => setData(res))
    },[])
  
    console.log(prodId)
  
  


  return (
    <div className=' border p-4 container mx-auto text-2xl'>
      <div className="grid grid-cols-2 gap-3">
        <div className="shadow">
          <img src={data.thumbnail} alt="" />
        </div>
        <div className="shadow">
          <div className="text-xl">{data.title}</div>
          <div className="text-xl font-bold">{data.price}</div>
          <div className="text-xl">{data.category}</div>
        </div>
      </div>

    </div>
  )
}

export default Products