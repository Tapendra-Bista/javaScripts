/*
varible declare using const cannot change but 
in array condition it will be change .
this rule only use at array condition only

*/

const myArray = ["Tapendra","Bimal"]
console.log(myArray.toString())
myArray[1]="Bista"
console.log(myArray.toString())
myArray.push("Bista1") // added elemnet at last
console.log(myArray.toString())
myArray.unshift("Tapendra1")
console.log(myArray.toString())
myArray.sort()
console.log(myArray.toString())
myArray.reverse()
console.log(myArray.toString())