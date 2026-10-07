let computer = { cpu: 8 };
let lenovo = {
  screen: "hd",
  __proto__: computer,
};
let apple = {};

// console.log(lenovo);
// console.log(`lenovo`,lenovo.__proto__);

// let genericCar = {
//     wheels:4
// }
// let tesla = {
//     driver:"AI",
//     __proto__:genericCar
// }

// console.log(`tesla`, tesla.__proto__)

let genericCar = {
  wheels: 4,
};
let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla,genericCar);
console.log(`tesla`,Object.getPrototypeOf(tesla));

Array.prototype.mylength= function(){
    let count=0;
    for(let i=0;i<this.length;i++){
        count++;
    }
    return count;
}

let arr = [12,23,4,5,6,7];
console.log(arr.mylength());
