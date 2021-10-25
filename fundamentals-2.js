'use strict';

function fruitprocessor(oranges, grapes){
    console.log("oranges",oranges,"grapes",grapes);
    const juice = `I'm making juice of ${ oranges} oranges and ${grapes} grapes.`
    return juice;
}

const freshJuice = fruitprocessor(5,4);
const orangesJuice = fruitprocessor(7,0);
console.log(freshJuice);
console.log(orangesJuice)


function describeCountry(country, population, capitalCity){
    return`${country} has ${population} people and its capital city is ${capitalCity}. `
    ;
}
const descPakistan = describeCountry("pakistan","229.0 million","Islamabad")
const descChina = describeCountry("China", "1.402 billion", "beijing")
const descSingapore = describeCountry("Singapore","32.37 million","Kuala Lumpur")
console.log(descPakistan,descChina,descSingapore)