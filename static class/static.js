// to make static use static keyword 

class person {
constructor(name){
this.name=name
}

  static display() { console.log(this.name)}
}

 const k = new person("Tapendra")
  person.display(k)