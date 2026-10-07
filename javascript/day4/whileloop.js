// Add 1 to 5 Numbers using while loop

// let sum = 0;
// let i = 1;
// while(i <=5){
//     sum+=i;
//     i++;
// }
// console.log(sum);

// program to insert 5 to 1 elements in array
// let num = [];
// let j = 5;
// while(j > 0){
//     num.push(j);
//     j--;
// }
// console.log(num);

// write do while loop to enter a collection of teas in arrays

// let teaCollections=[];
// let tea;
// do{
//     tea =prompt("Enter your tea collection(to Stop enter stp):");
//     if(tea!="stp"){
//         teaCollections.push(tea)
//     }
// }
// while(tea!="stp");

// console.log(teaCollections)

// this code will not work here because node.js does not have prompt so go 
// and execute is js compiler
// let total=0;
// let i=1;
// do{
//     total+=i;
//     i++;
// }
// while(i<=3);

// console.log(total);

// for loop code just multiply the each element form the array and it in new 
// new array

let nums=[2,3,4,5];
let  multiply=[];

for(let i=0;i<nums.length;i++){
    // multiply.push(nums[i] * 2);
    multiply[i] = (nums[i] * 2);
}

// console.log(multiply);

// add elements into a array using for loop
let dreamCars = ["BMW", "Audi", "Skoda", "Honda", "Bugati"];
let carList=[];
for (let index = 0; index < dreamCars.length; index++) {
        carList.push(dreamCars[index]);
}
console.log(carList);

