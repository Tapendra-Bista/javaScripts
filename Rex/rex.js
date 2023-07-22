const namex = " hello man , i am here dude Tapedra"
console.log(RegExp(/here/))
const x = RegExp(/man/i)
console.log(x)


// A regular expression is a sequence of characters that forms a search pattern.

// The search pattern can be used for text search and text replace operations.
let k = " hii man to "
let n = k.search("to")
console.log(n)

// using rex
let c = k.search(/man/i)
console.log(c)

// to do something with regExp just use /word/i
/*
i	Perform case-insensitive matching	
g	Perform a global match (find all matches rather than stopping after the first match)	
m	Perform multiline matching

*/

let change = namex.replace(/here/i,"HERE")
console.log(change)
 const repeat = namex.repeat("am")
console.log(repeat)
  const z = namex.charAt("am")
console.log(z)
const o =  namex.match(/am/i)
console.log(o)