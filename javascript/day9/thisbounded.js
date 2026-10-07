const Person = {
    name:"KRISH",
     greet(){
        console.log(`HELLO, EVERY ONE MY NAME IS ${this.name}`);
     }
}
// Person.greet()

let greetFunction = Person.greet
// greetFunction()


// const boundGreet = Person.greet.bind({name: "HARSHA"})
const boundGreet = Person.greet.bind(Person)
// boundGreet()


function getInfo(city,state){
    console.log(`HAI, I AM ${this.name} and form ${city}, ${state}`);
}

const user =  {name : "KRISH"}

let show = getInfo.bind(user ,"WARANGAL","TELANGANA")
// show()
// getInfo.call(user ,"WARANGAL","TELANGANA")
getInfo.apply(user ,["WARANGAL","TELANGANA"])