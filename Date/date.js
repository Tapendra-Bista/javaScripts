// Real date in javascripts
const date =  new Date()
console.log(date)
const date1 =  Date()
console.log(date1)
console.log(date.getMonth())
console.log(date.getDay())
console.log(date.getTime())
console.log(date.getFullYear())
// :Note get... gives reall time 
// :Note set.... make own date 
var varDate = new Date()
var s =varDate.setFullYear(2020,12,18)
console.log(s)
console.log(varDate.setMonth(0).toString())
const newdate = date.setTime(12)
console.log(newdate)