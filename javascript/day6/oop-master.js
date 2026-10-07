let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car model ${this.model} got started in ${this.year}`;
  },
};
// console.log(car.start())

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let John = new Person("John", 20);

// console.log(John.name)
// console.log(John)
// function Math(num1, num2) {
//   this.num1 = num1;
//   this.num2 = num2;
// }

// Math.prototype.addition = function(){
//     return this.num1 + this.num2;
// }
// Math.prototype.subtract = function(){
//     return this.num1 - this.num2;
// }
// Math.prototype.multiply = function(){
//     return this.num1 * this.num2;
// }
// Math.prototype.division = function(){
//     return this.num1 / this.num2;
// }
//  let cal = new Math(6,6);

//  console.log(cal.addition())
//  console.log(cal.subtract())
//  console.log(cal.multiply())
// console.log(cal.division())

let array = [1, 2, 3, 4];
let array2 = [1, 2, 3, 4, 5, 6, 7];
Array.prototype.krish = function () {
  return `This is a custom Method [${this}]`;
};

// console.log(array.krish());
// console.log(array2.krish());

class vehicle {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  start() {
    return `${this.name} guy has age of ${this.age} `;
  }
}

class canDrive extends vehicle {
  drive() {
    return `YES ${this.name} can drive all types of cars.`;
  }
}

let user23 = new canDrive("krish", 22);

// console.log(user23.start())
// console.log(user23.drive())

let user121 = new vehicle("harsha", 32);
// console.log(user121.name);

// Encapsulation
// stop or restricting direct access to data object
class bankAccount {
  #bankbalance = 0;

  deposite(amount) {
    this.#bankbalance += amount;
  }
  getbalance() {
    return `$ ${this.#bankbalance}`;
  }
}
let account1 = new bankAccount();
account1.deposite(500);
// console.log(account1.getbalance());

// Abstraction

class CoffeMachine {
  start() {
    //complex process
    return `Strating the CoffeMachine....`;
  }
  brewCoffe() {
    return `Brewing Coffe....`;
  }
  pressStratButton() {
    let msg1 = this.start();
    let msg2 = this.brewCoffe();

    return `${msg1} \n ${msg2}`;
  }
}

let Coffe = new CoffeMachine();
// console.log(Coffe.start());
// console.log(Coffe.brewCoffe());
// console.log(Coffe.pressStratButton());

// POLYMORPHISM

class bird {
  fly() {
    return `Flying.....`;
  }
}
class penguin extends bird {
  fly() {
    return `penguin can't fly.`;
  }
}

let b = new bird();
let peng = new penguin();

// console.log(b.fly());
// console.log(peng.fly());

// static

class calculator {
  static add(n1, n2) {
    return n1 + n2;
  }
}

let user38 = new calculator();
// console.log(user38.add(5,6));
//  if i  use static then
// console.log(calculator.add(77,88));

// getters and setters

class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  set balance(amount) {
    if (amount < 0) {
      console.log("Invalid amount");
      return;
    }
    this._balance = amount;
  }
}

const acc = new BankAccount(1000);
// acc.balance = 2000; // allowed
// console.log(acc.balance);
acc.balance = 500; // setter
// console.log(acc.balance);

class vote {
  constructor(age) {
    this._age = age;
  }
  get age() {
    if (this._age < 18) {
      return "You are not eligible to vote.";
      this._age = age;
    } else {
      return "YES YOU CAN VOTE....";
    }
  }
  set age(age) {
    this._age = age;
  }
}

let voter = new vote(27);
// console.log(voter.age);
voter.age = 12;
// console.log(voter.age);

class bankA {
  constructor(amount) {
    this._amount = amount;
  }

  get amount(){
    return this._amount
  }

  set amount(amount){
    if(amount <0){
      return `invalid amount`
    }
    this._amount = amount
  }
}

let user111 =new bankA(1000);
console.log(user111.amount);
user111.amount=-99
console.log(user111.amount);


