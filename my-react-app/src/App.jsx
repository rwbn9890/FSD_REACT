
import './App.css'
import { Child } from './components/Child'
import { Parent } from './components/Parent'

function App() {

  let obj = {
    name: "red", 
    sirname : "white", 
    loc : "bhavngar"
  }

  let arr = ["first", "second" , "third", "fourth"]

return (
    <>
       <Child props={obj} />
       <Parent props = {arr} /> 
    </>
  )
}

export default App
