import prompt from "prompt-sync";
let index, number;
do{
    index = 0;
number = 10;
for (index; index < number; index++) {
    process.stdout.write(`      ${(index + 1).toString()}`)
}
console.log()
console.log()
var num = parseInt(prompt()("      Choose any number from above :"))
console.log()
switch (num) {
    case 1: {
        console.log("      You're cute")
        break
    }
    case 2: {
        console.log("      I want to meet you")
        break
    }
    case 3: {
        console.log("      Hey,i like you")
        break
    }
    case 4: {
        console.log("      Your happy place")
        break
    }
    case 5: {
        console.log("      I have a crush on you")
        break
    }
    case 6: {
        console.log("      You make me happy")
        break
    }
    case 7: {
        console.log("      Can we be friends")
        break
    }
    case 8: {
        console.log("      Assume three things now")
        break
    }
    case 9: {
        console.log("      Happy day")
        break
    }
    case 10: {
        console.log("      Please go away")
        break
    }
    default: {
        console.log("      Invalid Option !")

        break
    }
}
console.log()
var yes = prompt()("      Wanna play again(Y/N) :")
console.clear()
}while(yes.match(/y/i))