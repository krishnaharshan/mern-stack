let myScore=98
console.log(myScore)
console.log(typeof myScore)
let iCanVote=true
console.log(iCanVote);
console.log(typeof iCanVote)
// we can declare variable like this but really not recommoned 
let num=new Number(100)
console.log(num)
console.log(typeof(num))
let iAmBigGuy=true
let iAmCool=new Boolean(true)
console.log(iAmBigGuy);
console.log(iAmCool);


// What os null
// means the variable does not have anything 
let myname=null;
console.log(myname)
//what is undefined
// it means the variable is not declared or the variable is not defined
let mylastname;
let newCar=undefined
console.log(mylastname)
console.log(newCar)
// Strings
// string is a colllection of characters in squence
let yourname="krish"
console.log()
let greetings="hello"
let newSentence=greetings+" "+yourname
console.log(newSentence);
console.log(`hello ${yourname}!`);

// Symbol
// symbol means it generates a unique value 
let sym1=Symbol(krish);
let sym2=Symbol(krish);
console.log(typeof sym1);
console.log(sym2);
console.log(sym1==sym2);// it is false because they both have two different values



