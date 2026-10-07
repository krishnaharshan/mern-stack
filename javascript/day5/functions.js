// function greet(name){
//     console.log(`HELLO ${name}`);
// }
// greet("krish")

// 1

// function makeTea(typeOfTea){
//         return `MAKING ${typeOfTea}`;
// }
// let teaOrder =makeTea("lemon tea");
// // console.log(teaOrder);


// 2

function teaOrder(teaType){
    let tea =teaType; 
    function confirmOder(tea){
        return `Order confirmed for ${tea}`;
    }
    return confirmOder(tea)
}
// console.log(teaOrder("lemon Tea"));

// 3
// const calculateTotal = (price,quantity) =>{
//     return price * quantity;
// }
const calculateTotal = (price,quantity) => price * quantity
let total = calculateTotal(569,90);
// console.log(total);

// 4
function makeTea(typeoftea){
    return `orderedTea: ${typeoftea}`;
}
function processTeaOrder(teaFunction){
    return teaFunction("oolong tea");
}
let order = processTeaOrder(makeTea);
// console.log(order);


// 5
function createTeaMaker(){
    return function (teaType) {
        return `Making ${teaType}`
    }
}
let teaMaker = createTeaMaker();
let result = teaMaker("lemon tea")
console.log(result);
