// set is a collection of unique value
// Each value can only occur once in a Set.
// set example

const setCollection = new Set(["T","A"])
console.log(setCollection)
setCollection.add("P")
console.log(setCollection)
setCollection.clear()
console.log(setCollection)
setCollection.add("E")
console.log(setCollection)
setCollection.delete("E")
console.log(setCollection)
setCollection.add("N")
console.log(setCollection)
setCollection.add("D")
console.log(setCollection)
setCollection.add("R")
console.log(setCollection)
setCollection.add("A")
console.log(setCollection)

