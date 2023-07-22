const arrayNumber = [1,2,3,4,5,6,7,8,9,10]
console.log(arrayNumber.toString())

arrayNumber.forEach(( value,index,array)=>{
 console.log(value)
// console.log(index)
// console.log(array)
})

  const newArray =arrayNumber.filter((value,index,array)=>{
return value>5
})
console.log(newArray)

 const newMap = arrayNumber.map((value,index,array)=>{
return 2*value
 })

 console.log(newMap)


 const sum = arrayNumber.reduce((previousValue,currentValue,index,array)=>{
return previousValue + currentValue
 })


 console.log(sum)
 