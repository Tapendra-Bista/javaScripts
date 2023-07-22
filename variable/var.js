/*
JavaScript Variables can be declared in 4 ways:

Automatically
Using var
Using let
Using const

*/

// example Automaticlly
x=9
y=9
x=3
z=x+y

k="String automatically "
d= 9.9

document.writeln("Automatically  sum is "+z)
document.writeln("\n"+k)
document.writeln(" automatic double is " +d)

// exampple const never change once it declare

const  g ="Tapendra"
const c = 9999
// g="" // it never change document erroe
// let see

document.write(" value of g is "+g)
document.write(" value of c is "+c)
console.log(g)


// let   similar as  const never re declare once
// declare
let p,a ,t
a=99,

t=99,
p=a+t
a=10
document.write(" value of z is "+p)

document.write(" value of a is "+a)


// var example   it can be change

var namex =99
document.writeln(" let see value of name :"+namex)
namex ="Tapendra"
document.writeln(" let see value of name :"+namex)
