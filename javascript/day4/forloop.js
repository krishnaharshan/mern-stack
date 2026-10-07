// 1. From the tea list, add teas to a new array until you find "chai". Stop when "chai" appears.
let teaList = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < teaList.length; i++) {
  if (teaList[i] == "chai") {
    break;
  }
  selectedTeas.push(teaList[i]);
}
// console.log(selectedTeas);

// 2. Add all cities to visitedCities except "Paris".
let cities = ["london", "new york", "Paris", "Berlin"];
let visitedCities = [];
for (let j = 0; j < cities.length; j++) {
  if (cities[j] == "paris" || cities[j] == "Paris") {
    continue;
  }
  visitedCities.push(cities[j]);
}
// console.log(visitedCities);

// 3. Copy numbers into a new array until number 4 is encountered.
let numbers = [1, 2, 3, 4, 5];
let smallnumbers = [];
for (let k = 0; k < numbers.length; k++) {
  if (numbers[k] === 4) {
    break;
  }
  smallnumbers.push(numbers[k]);
}
// console.log(smallnumbers);

// 4. From the tea list, skip "herbel tea" and add the rest to a new array.
let teas = ["chai", "green tea", "herbel tea", "black tea"];
let otherTeas = [];
for (const tea of teas) {
  if (tea == "herbel tea") {
    continue;
  }
  otherTeas.push(tea);
}
// console.log(otherTeas);

// 5. Copy city populations into a new object until the city "Berlin" is found.
let citiespopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let cityNewpopulations = {};
for (const city in citiespopulation) {
  if (city == "Berlin") {
    break;
  }
  cityNewpopulations[city] = citiespopulation[city];
}
// console.log(cityNewpopulations);

// 6. Create a new object containing only cities with population above 3 million.
let worldCityPopulation = {
  sydeny: 5000000,
  tokyo: 9000000,
  paris: 2200000,
  berlin: 3500000,
};
let above3mpopulation = {};
for (const city in worldCityPopulation) {
  if (worldCityPopulation[city] < 3000000) {
    continue;
  }
  above3mpopulation[city] = worldCityPopulation[city];
}
// console.log(above3mpopulation);

// 7. Using forEach, add all teas except "chai" to a new array.
let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
teaCollection.forEach((tea) => {
  if (tea == "chai") {
    return;
  }
  availableTeas.push(tea);
});
// console.log(availableTeas);

// 8. Using forEach, skip "sydney" and add remaining cities to traveledCities.
let myWorldcities = ["berlin", "paris", "sydney", "tokyo"];
let traveledcities = [];
myWorldcities.forEach(function (city) {
  if (city == "sydney") {
    return;
  }
  traveledcities.push(city);
});
// console.log(traveledcities);

// 9. Double each number and store it in a new array.
let nums = [6, 7, 8, 9];
let doubleNumbers = [];
for (let i = 0; i < nums.length; i++) {
  doubleNumbers.push(nums[i] * 2);
}
// console.log(doubleNumbers);

// 10. Add tea names to a new array until a tea name length exceeds 10 characters.
let teaProducts = [
  "chai",
  "green tea",
  "black tea",
  "jasmine tea",
  "herbel tea",
];
let shortTea = [];
for (const tea of teaProducts) {
  if (tea.length > 10) {
    break;
  }
  shortTea.push(tea);
}
console.log(shortTea);
