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
