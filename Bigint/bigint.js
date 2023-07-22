/*
here data can accept upto 15 digits so we use bigInt method


// waya of use of bigInt
1: use n at the end of varibel
2:Bigint()
*/

// example
var smallNumber = 99;
console.log(smallNumber)

// Now 1 method
var Bignumber = 12345678901234567823456789098765456234567899876n
console.log(Bignumber)

var bigNumber2 = BigInt(2345678901234567890123456789)
console.log(bigNumber2)
console.log(" add of bigInt : " +(bigNumber2+Bignumber))