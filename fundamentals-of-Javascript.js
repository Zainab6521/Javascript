let js = "amazing";

if (js === "amazing") {
  console.log("Js is AMAZING BRUH!");
  console.log(`I'm ${js}`);
}

let country = "Pakistan";
const continent = "ASIA";
let rank = "4th";
// let population = 229.0 ;
//Objects
let pakistan = {
  capital: "islamabad",
  province: 5,
  population: 229.0,
};

console.log(
  `I'm from ${country} It's located in sub-continent ${continent} It's the World's ${rank} Most Populous country With the Population of almost ${pakistan.population} millions population`
);

//Data Types
let isIsland = false;
const language = "URDU";
console.log(
  typeof country,
  typeof isIsland,
  typeof language,
  typeof pakistan.population,
  typeof null
);

//operators

let halfCountry = pakistan.population / 2;
halfCountry++;
console.log(halfCountry);

const finlandPopulation = 6;
console.log(pakistan.population > finlandPopulation);

if (pakistan.population > finlandPopulation) {
  console.log("My country has more population than Finland");
} else {
  console.log("Finland has more population than My country");
}
var description =
  "Portugal is in Europe, and its 11 million people speak portuguese";
const avgPopulation = 33;
console.log(
  `${avgPopulation} million is an average population in a country but my country has ${pakistan.population} Million people. BTW ${description}`
);

//Assignment
if (pakistan.population >= avgPopulation) {
  console.log("Portugal's population is above average");
} else {
  console.log("Portugal's population is 22 million below average");
}
//find behavior of operators from operator precedence table

let x, y;
x = y = 25 - 10 - 2;
// y=15;
// console.log(`${x} is same as ${y}`)

if (
  x === y
    ? console.log(`${x} is same as ${y}`)
    : console.log(`${x} is different from ${y}`)
) {
}

//Coding Challenge # 1

//BMI = mass / height ** 2;
//FirstCase
const markMass = 78;
const markHeight = 1.69;
const markBMI = markMass / markHeight ** 2;

const johnMass = 92;
const johnHeight = 1.95;
const johnBMI = johnMass / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;
console.log("markBMI", markBMI);
console.log("johnBMI", johnBMI);

if (
  (markHigherBMI = true
    ? console.log(
        `mark's BMI (${markBMI}) is greater than John's BMI (${johnBMI})`
      )
    : console.log(
        `John's BMI (${johnBMI}) is greater than mark's BMI (${markBMI})`
      ))
);

//conversion and coercion
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

let n = "21";
console.log(Number(n), n);

const numNeighbours = Number(prompt(
  "How many neighbour countries does your country have?"
));

if (numNeighbours === 1) {
  console.log("Only 1 border!");
}
if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
    console.log("No borders")
}
