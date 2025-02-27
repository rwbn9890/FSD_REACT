import React from 'react'
export const ChildProps1 = ({item, list,err, status, num}) => {
//     console.log(p)
//     const {item, list} = p



    
const {title, price, rate}  = item;

console.log(err, status)


  return (
     <div>  

               
        <div className="row">
                    <div className="col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{price}</p>
                            <span className="badge text-bg-secondary">⭐{ rate}</span>
                            <br/>
                            <br/>
                            <a href="#" class="btn btn-primary">Go somewhere <span className="badge text-bg-light">{num}</span></a>
                        </div>
                        </div>
            </div>
        </div>
     </div>
  )
}

