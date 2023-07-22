/*
there are only two type of number in  js 
20 non decimal number
20.3 decimal number

but in other {
we have 
long
short 
long long
interges
double
}
*/

let number =99999999999999999999999999999999999 // only accept 15 digist
document.writeln(number)
let number2 = 90.90
document.writeln(number2)
let number3 = 1e10
let number4 = Infinity
document.writeln(number3)
document.write(number4)

// we have function also to check number or not  as Dart
// let see
let checkNumber = NaN
  document.write ("This is a number " +checkNumber)

  // checking  infinity or not 

if ( number4!=Infinity){
    document.write(" This is not a inifity number")
} else{
    document.writeln(" this is a infinity number")
}
