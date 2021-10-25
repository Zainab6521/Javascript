'use strict';

//Function Declarations
//Example#1
function fruitprocessor(oranges, grapes){
    // console.log("oranges",oranges,"grapes",grapes);
    const juice = `I'm making juice of ${ oranges} oranges and ${grapes} grapes.`
    return juice;
}

const freshJuice = fruitprocessor(5,4);
const orangesJuice = fruitprocessor(7,0);
console.log(freshJuice,orangesJuice);

//Example#2
function describeCountry(country, population, capitalCity){
    return`${country} has ${population} people and its capital city is ${capitalCity}. `
    ;
}
const descPakistan = describeCountry("pakistan","229.0 million","Islamabad")
const descChina = describeCountry("China", "1.402 billion", "beijing")
const descSingapore = describeCountry("Singapore","32.37 million","Kuala Lumpur")
console.log(descPakistan,descChina,descSingapore)

//Example#3
function percentageOfWorld1(population){
    return (population / 7990) * 100;
}
const chinaPop = percentageOfWorld1(1441);
const pakPop = percentageOfWorld1(229.0);
const singaporePop =  percentageOfWorld1(32.37);
console.log("With Functions Declarations -->",chinaPop,pakPop,singaporePop)


//Functions Expressions
//Example 1
const findAge = function(birthYear){
    return 2037 - birthYear;
}
console.log(findAge(1999));

//Example 2
const percentageOfWorld2 = function(population2){
    return(population2 / 7990) * 100;
}
const chinaPop2 = percentageOfWorld2(1441);
const pakPop2 = percentageOfWorld2(229.0)
const singaporePop2 = percentageOfWorld2(32.37);

console.log("With Function Expressions -->",chinaPop2,pakPop2,singaporePop2)

//Arrow Functions
//Example 1
const calAge = birthYears => 2037 - birthYears;
const age = calAge(1989);
console.log("age -->", age)

//Example 2
const yearsUntilRetirement = (yearOfBirth, firstName) => {
    const age1 = 2037 - yearOfBirth;
    const fullName = firstName;
    const retirement = 60 - age1;
    return `${fullName} is ${age1} years Old and has ${retirement} years left till his retirement.`
}
console.log(yearsUntilRetirement(1985,"Mr Bert"))
console.log(yearsUntilRetirement(2005, "Mr James"))

//Example 3
const percentageOfWorld3 = population3 => (population3 / 7990) * 100;
const chinaPop3 = percentageOfWorld3(1441);
const pakPop3 = percentageOfWorld3(299.0)
const singaporePop3 = percentageOfWorld3(32.37);
console.log("With Arrow functions -->",chinaPop3,pakPop3,singaporePop3)