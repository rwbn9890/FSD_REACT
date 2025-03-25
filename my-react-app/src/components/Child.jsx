

const Child = ({count, handleCount}) => {




    let num = 10
  return (
    <div>
        <button onClick={() => handleCount(num)}>+</button>
        <h2>{count}</h2>
        <button>+</button>
    </div>
  )
}

export default Child