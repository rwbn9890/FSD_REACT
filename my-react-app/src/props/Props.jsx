import { useState } from "react";
import { ChildProps } from "./ChildProps";
import { ChildProps1 } from "./ChildProps1";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

export function Props(){

    const [num, setNum] = useState(0)
    
    let obj = {
        title: "surfexel",
        price : 200,
        rate :1.2
    }

    let arr = [1, 2, 3, 4]

    let warn ={
        err : "this is erro",
        status: 400
    }

    return (
       <>  <ChildProps email="alishan@gmail.com" name="alishan shaikh" num ={num} />
         <button className="btn btn-success" onClick={() =>  setNum(num+1) }>+</button>
         <button>{num}</button>
         <button onClick={() =>  setNum(num-1) }>-</button>
         <hr/>
         <br/>
       
         <hr/>
         <hr/>
         <hr/>
         <ChildProps1 item = {obj} list = {arr} {...warn} num ={num} />
       </>
    )
}
