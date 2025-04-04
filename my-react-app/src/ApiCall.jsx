import React, { useEffect, useState } from 'react'

const ApiCall = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchData = async () => {
        try {
            let res = await fetch('https://randomuser.me/api/?results=500')
            let resp = await res.json()
            setData(resp)
            console.log(resp)
          
        }
         catch (error) {
            setError(true)
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    }

 

    useEffect(() => {
        fetchData()

    // fetch('https://randomuser.me/api/?results=500')
    // .then((res) => res.json())
    //  .then((res) => setData(res))
    // .catch((err) => {setError(true); console.log(err)})
    // .finally(() => setLoading(false))

    }, [])

  

  return (
    <div>

        {
            loading ?
             (
                <div className='mx-auto border w-[500px] text-center'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />
                    <p className='text-5xl'>loading....</p>
                </div>
             )
             : error ? 
                (<h1 className='text-red-600 text-center my-8 text-6xl'>something went wrong...!</h1>)
                :
                (
                   <div>
                    {
                        data.results?.map((ele) => (
                            <h3>{ele.name.first} {ele.name.last}</h3>
                        ))
                    }
                   </div> 
                )
        }
    </div>
  )
}

export default ApiCall