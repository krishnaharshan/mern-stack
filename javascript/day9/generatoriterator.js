function* generator(){
    yield 1
    yield 2
    yield 3
}

let iterator = generator()
// console.log(iterator);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
let iteTwo = generator()
console.log(iteTwo.next().value);
console.log(iteTwo.next().value);