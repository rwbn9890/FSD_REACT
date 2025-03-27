import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const Home = () => {


  const [data, setData] = useState([])

  useEffect(()=>{
      fetch('https://dummyjson.com/products?limit=100')
      .then(res => res.json())
      .then(res => setData(res))
  },[])

  // console.log(data)



  return (
    
     <div className=' border p-4 container mx-auto text-2xl'>
      <div className="grid  grid-cols-3 gap-4">
        {
          data.products?.map((item) =>(
             <div key={item.id} class="  relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div style={{backgroundImage:`url(${item.images[0]})`, backgroundSize:"cover"}} class="relative border border-black mx-4 -mt-6 h-40 rounded-xl  text-white shadow-lg shadow-blue-gray-500 from-blue-500 to-blue-600">
                 
                </div>
            <div class="p-6">
              <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {item.title}
              </h5>
              <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula. 
              </p>
            </div>
            <div class="p-6 pt-0">
              <Link to={`/products/${item.id}`} data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Read More
              </Link>
            </div>
          </div>
          ))
        }
         
         
      </div>

    </div>
  )
}

export default Home