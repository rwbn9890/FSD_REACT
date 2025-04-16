import React from 'react'

const Add = ({add}) => {


    console.log("adding")
  return (
    <div>  <ul>
        {
            add.map(e=><li key={e}>{e}</li>)
        }
        </ul>
    </div>
  )
}

export default Add