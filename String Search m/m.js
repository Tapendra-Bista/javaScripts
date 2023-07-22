/*
String Search Methods
String indexOf() // Find the  indexof word or letter
String lastIndexOf() // Find word or letter of last
String search() // Any thing in String
String match() // match something avaible in string or not
String matchAll() // match all  in string
String includes() // word or letter  inlcude in string or not
String startsWith() // boolean if string start with  given than true
String endsWith() // boolean if string end with  given than true

*/

var word ="TapendraBista";
document.writeln(word)
document.writeln(word.indexOf("B")) // indexOf
document.writeln(word.lastIndexOf("a")) // lastIndexOf
document.writeln(word.search("pen")) // search
document.writeln(word.match("pen")) // match
document.writeln(word.includes("Bista")) // includes
document.writeln(word.startsWith("Tap")) // startswith
document.writeln(word.endsWith("ra")) // endsWith