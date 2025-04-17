import React from "react";
import { PieChart } from 'react-minimal-pie-chart';

const Todo = ({addTodo, todo}) => {

    console.log("Added Todo")
  return (
    <div>

<PieChart
  data={[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value:todo.length, color: '#6A2135' },
  ]}
/>;
        <div className='shadow rounded-2xl w-fit mx-auto my-2 p-4'>
            {
            todo.map((ele, index) => <p key={index}>{ele} {index}</p>)
            }
        </div>

          <button onClick={addTodo} type="button" className="text-white bg-gradient-to-r  from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2">
      Add Todo
    </button>
    </div>
  )
}

export default React.memo(Todo);