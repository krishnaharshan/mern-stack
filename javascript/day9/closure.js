
// function incre(){
//     let i = 12;
//     i++;
//     return i;
// }

// console.log(incre());
// console.log(incre());


function outerfun(){
    let count =1;
    return function innerfun(){
        count++;
        return count;
    }    
}    

let increment = outerfun()
// console.log(increment)
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())

