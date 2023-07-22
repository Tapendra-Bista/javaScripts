/*
JSON is a format for storing and transporting data.

JSON is often used when data is sent from a server to a web page.

What is JSON?
JSON stands for JavaScript Object Notation
JSON is a lightweight data interchange format
JSON is language independent *
JSON is "self-describing" and easy to understand
* The JSON syntax is derived from JavaScript object
 notation syntax, but the JSON format is text only.
  Code for reading and generating JSON data
   can be written in any programming language.*
 */


const person = {
 boy:[
{"name":"Tapendra","age":19,"college":"amrit campus"},
{"name":"Giban","age":19,"college":"amrit campus"},
 ],
 girl:[
    {"name":"nimila","age":19,"college":"amrit campus"},
    {"name":"rose","age":19,"college":"amrit campus"},
 ]
}
console.log(person)
console.log(person.boy[0])
console.log(person.boy[1])
console.log(person.boy)
console.log(person.girl[0])
console.log(person.girl[1])
console.log(person.girl)