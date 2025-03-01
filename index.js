

let val1 = 10;
let val2 = 20;


function fun(num1, num2){  // lexical scope

    let result = num1 + num2;

    return fun2(result);
}

check()

check2()

function fun2(res){
    return res*res;
}

function check(){

}


function check2(){

}


let result1 = fun(val1, val2); // fun2()
let result2 = fun(40, 30);



// global execution context

// functinal execution context
