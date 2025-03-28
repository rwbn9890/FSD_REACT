import React, { useContext, useEffect } from 'react'
import { ApiContext } from '../context/ApiContext'
import { useParams } from 'react-router-dom'

const Products = () => {

const {setProducts} = useContext(ApiContext)



useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((res) => setProducts(res))
},[])

  return (
    <div>Products</div>
  )
}

export default Products