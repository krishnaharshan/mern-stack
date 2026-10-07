function Person(name){
    this.name = name
}

Person.prototype.greet = function(){
    console.log(`HELLO MY NAME IS ${this.name}`);
}
let welcome = new Person("KRISH");
welcome.greet()