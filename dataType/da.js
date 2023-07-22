/*
JavaScript has 8 Datatypes
1. String
2. Number
3. Big_int
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date

*/

let a = 19 // integers
let b = 9.9 // double
let c = "Tapendra"  // string
let d = true  // boolean
let e = null // null
let f  // undefine
let  array = ['tapedra','Bista','sharma','shree'] // array
let object ={
    "name":"Tapendra",
    "cast":"Bista"
} // object
let date = new Date("2023-08-03") // Date
let bigint=  BigInt("123456789123456789123456789") // BigInt
document.writeln("Integers " +a)
document.writeln("double " +b)
document.writeln("String " +c)
document.writeln("Boolean " +d)
document.writeln("null  " +e)
document.writeln("undefine " +f)
document.writeln("array " +array)
document.writeln("object " +object)
document.writeln("data" + date)
document.writeln("BigInt " + bigint)
