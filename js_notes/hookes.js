


// function useState(init){

//     let count = init
//     // let count2 = init*init*init


//     function setCount(newState){
//         count = newState
//     }

//     function getCount(){
//         return count;
//     }

//     // let obj ={
//     //     c1 : count,
//     //     c2 : count2
//     // }

//     // let {count, coutn2} = obj;

//     // let {c1, c2} = obj;

//     // return obj;

//     //  return  {c1, c2}
    
//      return   {getCount, setCount}
   
// }








export function useState(init){

    let state = init

    function setCount(newState){
        state = newState
    }

    function count(){
        return state;
    }

     return   {count, setCount}
   
}
