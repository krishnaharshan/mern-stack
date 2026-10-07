function greet(name){
    console.log("hello ,",name);
    
}
// greet("krish");

function person(name, age){
    this.name = name;
    this.age = age; 
}

let person1 = new person("krish",19)

// console.log(person1)

function Phone(brand,series){
    this.brand = brand
    this.series = series
}
let user1 = new Phone("apple","17promax")
// console.log(user1);
let user2 = new Phone("Samsung","S23");
// console.log(user2);

function Tea(type){
    this.type = type
    this.describe = function(){
        return `This is a cup of ${this.type}`;
    };
}
let user = new Tea("lemon tea");
// console.log(user.describe());

function Animal(name){
    this.name = name;
}

Animal.prototype.sound = function(){
    return `${this.name} makes a sound.`
}

let dog = new Animal("Dog")
// console.log(dog.sound());

let cat = new Animal("Cat")
// console.log(cat.sound());

function earphone(name){
    if(!new.target){
        throw new Error("earphones must be called with new keyword")
    }
    this.name = name;
}
let user01 = new earphone("Oppo");
// let user02 = earphone("Apple")

