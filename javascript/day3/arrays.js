let dreamCars = ["BMW", "Audi", "Skoda", "Honda", "Bugati"];
let myfrdsdreamcars = ["Suzuki", "Ferrari", "Lamborghini", "Tesla"];
// let Cars=dreamCars+myfrdsdreamcars
// console.log(Cars)
// console.log(typeof Cars)
// console.log(typeof dreamCars);
// let Cars=[dreamCars+myfrdsdreamcars]
// console.log(Cars);
// let Cars=[dreamCars,myfrdsdreamcars]
// if we ececute this it become 2d array
// console.log(Cars);
// let Cars = dreamCars.concat(myfrdsdreamcars);
// console.log(Cars);


// to store a value form array
 let teaFlavours = ["green tea","black tea","oolong tea"]
  
 let teaName = teaFlavours[0];
//  console.log(teaName)

//access the third element in the and store it in a variable

let cities = ["LONDON","TOKYO","PARIS","NEW YORK"];

let cityName = cities[2]
// console.log(cityName);

//change the element in the array

let teatypes = ["herbal tea","white tea","masala chai",]
teatypes[1] = "jasmine tea"
// console.log(teatypes);

//add element in a array

citiesVisted = ["Mumbai","New york","chennai","Hyderabad"]
// citiesVisted.push("Berlin")
// citiesVisted[4]="Berlin"
citiesVisted[citiesVisted.length]="Berlin"
// console.log(citiesVisted);

// pop the element form the array //pop the last one
teaOrders=["chai","iced tea","matcha","early gray"]
// teaOrders.pop()
// teaOrders[teaOrders.length-1]=null
// console.log(teaOrders);

//soft copy of a array

popularTeas =["oolong tea", "green tea ","chai"]
softCopyTeas=popularTeas
popularTeas.pop()
// because this it called as softcopy the changes will take place in 
// softcopy
// console.log(softCopyTeas);
 
// MAKING HARDCOPY OF ARRAYS

let topCities = ["Berlin"," Singapore","New York"];
let hardCopyCities=[...topCities];
topCities.pop();
// console.log(topCities)
// no changes will take place in hard copy
// console.log(hardCopyCities)

//merging to arrays

let europeanCities = ["Paris","Rome"]
let asianCities = ["Tokyo","Bangkok"]
let worldCities = europeanCities.concat(asianCities)
// console.log(worldCities);

//find the length of the array and store it in variable 

let Menu = ["Masala chai","oolong tea","green tea","earl grey"]
let Menulenght = Menu.length
// console.log(Menulenght);

// check if the element exist or not in the array

let cityBucketList=["Delhi","jaipur","New york","Dubai"]
let isDubaiInList=cityBucketList.includes("Dubai")
console.log(isDubaiInList);
