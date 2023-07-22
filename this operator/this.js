// this  opertor use at the same name occur and to have distinguish data we use this
// similar as c++

class demo {
 namex ="";
    constructor(namex){
this.namex = namex 
console.log(namex)
    }

}

 new demo("here")


 // 
 const person = {
name:"Tapendra",
cast:"Bista",
display:function (){
 return "Full name is :"+this.name + this.cast
}
 }

 const v =person.display()
 console.log(v)

 const k = this
 console.log(k)

 // NOTE: THIS IS ONLY USE IN FUNCTION METHOD NOT IN ARROR FUNCTION OR CALLBACK FUNCTION