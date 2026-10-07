// ||->logical OR which means either on of the statements should be correct (or) true/false
// &&-> logical AND which means both of the statements should be correct (or) true or both 
//      the statements are false
// !->logical NOT(reversed) the assume the statement is false when we use the logical not 
//    it will be reverse to true
let n1=10;
let n2=90;
let n3=60;
let n4=0;
console.log(n1<n2 || n3<n4);//hence the n3<n4 is false but the output is true because n1<n2
                            // is true so one statement is correct
console.log(n1<n2 && n3<n4);//hence the n3<n4 is false and the output is also false
                //  because it consist one false statement in the condition
let iamtall=true
console.log(!iamtall);// here is it reversed the statement so the outpput is false


