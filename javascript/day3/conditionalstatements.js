// Checking if a number is  greater than another number:
let a = 10;
let b = 20;
if(a > b){

    console.log(a,"is greater then",b);

}
else{

    console.log(b,"is greater then",a);

}


// Checking if a string is equal to another string:
let previousname = "krish";
let newName = "krish";// if newname is krishna the second case will execute
if(previousname == newName){

    console.log("Pick another Name");

}
else{
 
    console.log("You can choose this Name");

}


// Checking if a  variable is a number or not:
let num = "1234" // if it is number then first case will execute
if(typeof num=="number") {

    console.log("Yes this is a number");

}
else{

    console.log("No this is NOT a number");

}



// Checking if a boolean value is true or false:
let isTeaReady = true // if false second case will execute

if(isTeaReady){
  
    console.log("Your tea was ready");

}
else{

    console.log("Your tea was NOT ready");

}


// Checking if an array is empty or not:

let array = [];//if array as element the else will execute

if(array.length == 0){

    console.log("The array is Empty");
    
}
else{
    
    console.log("The array is NOT Empty");

}