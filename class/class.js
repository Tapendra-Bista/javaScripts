// JavaScript Classes are templates for JavaScript Objects.

// Note : in javascript if we use class , we must have to use constructor to simultaneously


// keyword class to make class

/*
A JavaScript class is not an object.

It is a template for JavaScript objects.

*/

class person {
constructor(){
console.log(" Hello tapedra bista !")
}
}

 new person()

 class add {
    constructor(n1,n2){
this.n1=n1
,this.n2=n2


    }
 add2 =()=>{
    console.log(this.n1+this.n2)
 }


}

const x =new  add(9,9)
x.add2()