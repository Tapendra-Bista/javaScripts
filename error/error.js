/*
Throw, and Try...Catch...Finally
The try statement defines a code block to run (to try).

The catch statement defines a code block to handle any error.

The finally statement defines a code block to run regardless of the result.

The throw statement defines a custom error.

*/

import prompt from "prompt-sync"
var number1 = prompt()("Enter first number :")
var number2 = prompt()("Enter second number :")

try{
if (number2==0){
     throw 0
}else {
    console.log(`${number1} is divide by ${number2} is ` +(number1/number2).toFixed(2))
}
} catch (error){
console.log("Not divide by Zero")
} finally{
console.log("Your Result!")
}