/*
String length // number 
String slice() // remove out of rang lettter
String substring() // xstart print from give inde
String substr() // decrepted
String replace() //  replace letter with an other letter
String replaceAll()  // decrepted
String toUpperCase() // capital
String toLowerCase()  // smalll letter
String concat()  addition 
String trim()  // remove whitespace 
String trimStart() // first whitespace remove
String trimEnd() // last whitespace remove
String padStart() // pad at start
String padEnd() // pad at end 
String charAt() // character at given index
String charCodeAt() // same but if null it retun NAn
String split() // substring
*/
var word= "qwertyuiop"
var space = "    terfghujhkg         "
document.writeln(word) // word
document.writeln(word.length) // length
document.writeln(word.slice(3,8)) // slice 
document.writeln(word.substring(9)) // substring
document.writeln(word.replace("q","Tapendra")) // replace
document.writeln(word.toUpperCase()) // uppercase
document.writeln(word.toLowerCase()) // lower
document.writeln(word.concat("Tapendrs")) // concat
document.writeln(space.trim()) // trim
document.writeln(space.trimStart()) // trimStart
document.writeln(space.trimEnd()) // trimEnd
document.writeln(word.padStart(10,"q")) // padding
document.writeln(word.padEnd(9,'p')) // padding
document.writeln(space.charAt(5)) // charat
document.writeln(space.charCodeAt(6)) // charcodeat
document.writeln(space.split("")) // substring