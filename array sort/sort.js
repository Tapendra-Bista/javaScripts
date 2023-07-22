/*
Sorting array  in js
*/

const numbers = [9,8,7,6,5,4,3,2,1,11,10,12,13,15,14]
console.log(numbers.sort((a,b)=>{
  return a -b
}))
console.log(numbers.sort((a,b)=>{
    return b -a
  }))
  console.log(numbers.reverse())
  // string 
  const names = ["tapendra","bista","apple"]
  console.log(names.sort((a,b)=>{
    return b -a
  }))

  console.log(names.reverse())
  console.log(names.sort())

  // largest and lower number in array 

  function myMax (numbers){
return Math.max.apply(null,numbers)
  }

  console.log("Max number in array : "+myMax(numbers))
  function mymin (numbers){
    return Math.min.apply(null,numbers)
  }
  console.log("Min number in array : "+mymin(numbers))


  