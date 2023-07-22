// random number generator 
// math.random generat number upto 1 only 
// To make random number as required ,we have  multiple with number

function randomDouble (number){
return Math.random()*number
}
var x=5
console.log(`RandomDouble number upto ${x} is ` +randomDouble(x))

function randomIntegers (number){
    return Math.floor(Math.random()*number)
}

console.log(`RandomIntegers number upto ${x} is ` +randomIntegers(x))

function randomCeil (number){
return Math.ceil(Math.random()*number)
}
console.log(`RandomCeil number upto ${x} is ` +randomCeil(x))


// random number two number 
function rndBetween (max,min){
return Math.floor(Math.random()*(max -min)) +min
}
var a=10
var b=20
console.log(` Random number between ${a} and ${b} is `+(rndBetween(b,a)))