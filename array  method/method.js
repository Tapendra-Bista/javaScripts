/*
Array length 
Array toString()
Array pop()
Array push()
Array shift() //  it is similar to  popping but  pop first element instead of last
Array unshift() //  it is similar to  pushing but  push first element instead of last
Array join() // merge with another array
Array delete() // delete items
Array concat() //  merge with another array
Array flat() 
Array splice() // add to items with index
Array slice() // creaate new array

The methods are listed in the order
 they appear in this tutorial page
*/
const students =["Tapendra","Dibas","Abhishek" ,"Udhhav","Raju","pawan","Nitesh","Ayush","David","suraj","Karsang","Karun"]
console.log(students)
console.log(students.length) // length
console.log(students.toString()) // toString
console.log(students.pop("pawan")) // pop
console.log(students.push("Ramesh")) // push
console.log(students.shift()) // shift
console.log(students.unshift("qwert")) // unshift
console.log(students.join(["A","B","C"])) // join
// console.log(students.delete()) // delete
console.log(students.concat(["qwe","asd"])) // concat
console.log(students.flat(1)) // flat
console.log(students.splice(3,"kala")) // splice
console.log(students.slice(4)) // slice 
