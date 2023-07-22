// map is a collection  of pair data
const mapList = new  Map([
[1,"One"],
[2,"Two"],
[3,"Three"]
])

mapList.set(4,"Four")
console.log(mapList)
mapList.delete(1)
console.log(mapList)
mapList.clear()
console.log(mapList)

// second way to make 
const map2 =  new Map()
map2.set("Apple",500)
map2.set("Orange",600)
console.log(map2)
map2.clear()
console.log(map2)