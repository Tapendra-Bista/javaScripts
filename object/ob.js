// object as similar as map have two value type

/**
 * Do Not Declare Strings, Numbers, and Booleans as Objects!
When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object
 *
 */
const Person = {
name:"Tapendra Bista",
age:21,
gender:"male",
bodyColor :"mid color",
Height:5.9,
bodyType:"Slim"
}
// Spaces and line breaks are not important. 
//An object definition can span multiple lines:
document.writeln(Person.name)
document.writeln(Person.age)
document.writeln(Person.gender)
document.writeln(Person.bodyColor)
document.writeln(Person.Height)
document.writeln(Person.bodyType)

document.getElementById("demo").innerHTML= Person['name'] + " is a " + Person['age'] + "  year old "