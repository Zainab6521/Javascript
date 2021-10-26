"use strict";

//Function Declarations
//Example#1
function fruitprocessor(oranges, grapes) {
  // console.log("oranges",oranges,"grapes",grapes);
  const juice = `I'm making juice of ${oranges} oranges and ${grapes} grapes.`;
  return juice;
}

const freshJuice = fruitprocessor(5, 4);
const orangesJuice = fruitprocessor(7, 0);
console.log(freshJuice, orangesJuice);

//Example#2
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}. `;
}
const descPakistan = describeCountry("pakistan", "229.0 million", "Islamabad");
const descChina = describeCountry("China", "1.402 billion", "beijing");
const descSingapore = describeCountry(
  "Singapore",
  "32.37 million",
  "Kuala Lumpur"
);
console.log(descPakistan, descChina, descSingapore);

//Example#3
function percentageOfWorld1(population) {
  return (population / 7990) * 100;
}
const chinaPop = percentageOfWorld1(1441);
const pakPop = percentageOfWorld1(229.0);
const singaporePop = percentageOfWorld1(32.37);
console.log("With Functions Declarations -->", chinaPop, pakPop, singaporePop);

//Functions Expressions
//Example 1
const findAge = function (birthYear) {
  return 2037 - birthYear;
};
console.log(findAge(1999));

//Example 2
const percentageOfWorld2 = function (population2) {
  return (population2 / 7990) * 100;
};
const chinaPop2 = percentageOfWorld2(1441);
const pakPop2 = percentageOfWorld2(229.0);
const singaporePop2 = percentageOfWorld2(32.37);

console.log("With Function Expressions -->", chinaPop2, pakPop2, singaporePop2);

//Arrow Functions
//Example 1
const calAge = (birthYears) => 2037 - birthYears;
const age = calAge(1989);
console.log("age -->", age);

//Example 2
const yearsUntilRetirement = (yearOfBirth, firstName) => {
  const age1 = 2037 - yearOfBirth;
  const fullName = firstName;
  const retirement = 60 - age1;
  return `${fullName} is ${age1} years Old and has ${retirement} years left till his retirement.`;
};
console.log(yearsUntilRetirement(1985, "Mr Bert"));
console.log(yearsUntilRetirement(2005, "Mr James"));

//Example 3
const percentageOfWorld3 = (population3) => (population3 / 7990) * 100;
const chinaPop3 = percentageOfWorld3(1441);
const pakPop3 = percentageOfWorld3(299.0);
const singaporePop3 = percentageOfWorld3(32.37);
console.log("With Arrow functions -->", chinaPop3, pakPop3, singaporePop3);

//Function within function
const describePopulation = (country, population) => {
  const percPopulation = percentageOfWorld3(population);
  return `${country} has ${population} million people. which is about ${percPopulation} % of the World.`;
};
console.log(describePopulation("china", 1441));
console.log(describePopulation("pakistan", 299.0));
console.log(describePopulation("Singapore", 32.37));

//coding challenge #1
const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins Wins (${avgDolphins} VS ${avgKoalas}) !!`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas Wins (${avgKoalas} VS ${avgDolphins}) !!`);
  } else {
    console.log("No One Win Today!!");
  }
}
//DATA 1
// const scoreDolphins = calcAverage(44,23,71);
// const scoreKoalas = calcAverage(65,54,49);

//DATA 2
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);
///ARRAY

const countries = [
  "pakistan",
  "Malaysia",
  "Turkey",
  "China",
  "Cyprus",
  "Sweden",
];
console.log(countries);
console.log(countries.length);
console.log(countries[countries.length - 1]);

//Exercise
const year = [1990 , 1995 , 1999 , 1997];
const findAge1 = function (birthYear) {
  return 2037 - birthYear;
};
const age1 = findAge1(year[0])
const age2 = findAge1(year[1])
const age3 = findAge1(year[year.length - 1]) // for last element

console.log("age1",age1,"age2",age2,"last",age3)

const ages = [findAge1(year[0]),findAge1(year[1]), findAge1(year[2]),findAge1(year[year.length -1])]
console.log(ages)

//Exercise
const friends = ["a","b","c","d","e"]
//Add elements in Arrray
const moreFriends = friends.push("f","g")
friends.unshift("0")
// console.log(friends)
friends.shift()
//Remove elements in Array
const popped =friends.pop();
console.log(popped,friends)

console.log(friends.indexOf("c"),friends.includes("h"))

if(friends.includes('d')){
    console.log("The Friends have this friend.")
}

//coding challenge #2

const bills = [144, 555 ,44]

const calcTip = (billvalue) =>{
    return billvalue >=50 && billvalue <=300 ? billvalue * 0.15 : billvalue * 0.20;
}
const tip = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
console.log(tip)
const total = [bills[0]+tip[0],bills[0]+tip[0],bills[0]+tip[0]];
console.log(total)