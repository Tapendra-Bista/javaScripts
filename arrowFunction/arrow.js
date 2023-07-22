// Arrow functions allow us to write shorter function syntax:
// without arrow function

const without = function(name){
  return  console.log(name)
}

// with arrow function

const withArrow = (name)=> console.log(name)

without("tapendra")
withArrow("bista")

// it is also know as call back function

const Fav = (number)=>console.log("Favourite number is "+number)
import prompt from "prompt-sync"
const num = prompt()("Enter your Fav number :")
Fav(num)