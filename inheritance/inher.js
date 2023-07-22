// to make inheritance we use extends keyword in javascripts

class  namex {
    constructor(namex){
this.namex = namex
    }
}


class fullName extends namex{
constructor (name,cast){
    super (name) // super use for parent class constructor value
    this.cast=cast
 
}

display= ()=>{
console.log("Fullname is " +this.namex+" "+this.cast)
}
}

const k =  new fullName("Tapendra","Bista")
k.display()