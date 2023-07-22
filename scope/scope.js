// scope means method of declaring varible 

// global variable 

const g = 999
// this is use every where in program
console.log(g)

// local variable 

{
    var l="qwert"
    // this l is use only inside  bracket not outside

    console.log(l)
}

console.log(l) // outside checking
// function varible

function fun (){
let t =9.9
console.log(t)
}

fun()