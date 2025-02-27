import React from 'react'

export const ChildProps = ({email, name, num}) => {
    
  return (
    <div>

   <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                    Bootstrap
                    </a>
                    <button className='btn btn-primary'>{num}</button>
                </div>
                </nav>
    </div>
  )
}

