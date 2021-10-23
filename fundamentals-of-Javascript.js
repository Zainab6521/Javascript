let js = "amazing";

if (js === "amazing"){
    console.log("Js is AMAZING BRUH!")
    console.log(`I'm ${js}`)
}

let country = "Pakistan";
const continent = "ASIA";
let rank = "4th"
// let population = 229.0 ;
//Objects
let pakistan = {
    capital : "islamabad",
    province: 5,
    population : 229.0
}
console.log(`I'm from ${country} It's located in sub-continent ${continent} It's the World's ${rank} Most Populous country With the Population of almost ${pakistan.population} millions population`)


//Data Types
let isIsland = false;
const language = "URDU";
console.log(typeof country, typeof isIsland, typeof language, typeof pakistan.population, typeof null);

//operators

let halfCountry = pakistan.population / 2 ;
halfCountry ++;
console.log(halfCountry);

const finlandPopulation = 6;
console.log(pakistan.population > finlandPopulation);

if (pakistan.population > finlandPopulation) {
    console.log("My country has more population than Finland")
}else{
    console.log("Finland has more population than My country")
}
var description = "Portugal is in Europe, and its 11 million people speak portuguese";
const avgPopulation = 33;
console.log(`${avgPopulation} million is an average population in a country but my country has ${pakistan.population} Million people. BTW ${description}`)

//find behavior of operators from operator precedence table

let x,y;
x= y = 25-10-2;
// y=15;
// console.log(`${x} is same as ${y}`)

if(x === y ? console.log(`${x} is same as ${y}`) : console.log(`${x} is different from ${y}`)){
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

console.log("markBMI",markBMI , "johnBMI" ,johnBMI)

console.log("In first case markHigherBMI:",markHigherBMI = markBMI > johnBMI );

// //SecondCase
// const markMass1 = 95;
// const markHeight1 = 1.88;
// const markBMI1 = markMass1 / markHeight1 ** 2;

// const johnMass1 = 858;
// const johnHeight1 = 1.76;
// const johnBMI1 = johnMass1 / johnHeight1 ** 2;

// console.log("markBMI",markBMI1 , "johnBMI" ,johnBMI1)

// console.log("In second case markHigherBMI:",markHigherBMI = markBMI1 > johnBMI1 );