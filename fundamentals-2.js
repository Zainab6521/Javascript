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
console.log(chinaPop,pakPop,singaporePop)

//Functions Expressions
//Example 1
const findAge = function(age){
    return 100- age;
}
console.log(findAge(2));

//Example 2
const percentageOfWorld2 = function(population2){
    return(population2 / 7990) * 100;
}
const chinaPop2 = percentageOfWorld2(1441);
const pakPop2 = percentageOfWorld2(229.0)
const singaporePop2 = percentageOfWorld2(32.37);

console.log(chinaPop2,pakPop2,singaporePop2)
