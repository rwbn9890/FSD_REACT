import React from 'react'

function User({data}) {
  return (
    <div className='container row g-2'>
       {
        data.map((ele) => (
            <div className="col-3">
                <div className="card" >
                <img className="card-img-top" src={ele.picture.large} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{ele.name.first } {ele.name.last}</h5>
                    
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
        ))
       }
    </div>
  )
}

export default User