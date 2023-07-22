// way of taking inputfrom user

//  import prompt from "prompt-sync"
// const input = prompt()("Enter Your name :");

// console.log(input)

// switch 
import prompt from "prompt-sync"
var age = parseInt(prompt()("Enter your age :"))

switch(age){ // switch is similar as c++ in js
case 10:{
    console.log("age is "+age)
    break
}
case 20 :{
    console.log("age is "+age)
    break
}
case 30:{
    console.log("age is "+age)
    break
}
case 40 :{
    console.log("age is "+age)
    break
}
case 50 :{
    console.log("age is "+age)
    break
}
default:{
    console.log("Invalid Option !")
}
}


// 