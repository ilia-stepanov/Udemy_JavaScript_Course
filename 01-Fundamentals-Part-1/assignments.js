// LECTURE: Values and Variables
// 1. Declare variables called 'country','continent'and'population'and 
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

let country;
let continent;
let population;

country = "UAE";
continent = "Middle East";
population = 10;


console.log(country);
console.log(continent);
console.log(population);


// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your country. 
// The variable should hold a Boolean value. Also declare a variable 'language', 
// but don't assign it any value yet
// 2. Logthetypesof'isIsland','population','country'and'language' to the console

let isIsland;
let language;

isIsland = false;

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);


// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some countries have 
// multiple languages, 
// but just choose one)
// 2. Think about which variables should be const variables(which values will never change, 
//and which might change?). 
// Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

language = 'English';
const language2 = language;
const continent2 = continent;
language2 = 'Arabic';
continent2 = 'Europe';

// I got the error below
// VM530:4 Uncaught TypeError: Assignment to constant variable.
//     at <anonymous>:4:11


// LECTURE: Basic Operators

// 1. If your country split in half, and each half would contain half the population, 
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console.
// 3. Finland has a population of 6 million. Does your country have more people than Finland?
// 4. The average population of a country is 33 million people. 
// Does your country have fewer people than the average country?
// 5. Based on the variables you created, create a new 
// variable 'description' which contains a string with this format: 
// 'Portugal is in Europe, and its 11 million people speak Portuguese.'

let half_population = population / 2;
population = population + 1
console.log(population);

let finland_population = 6;
let my_country_more_populated = population > finland_population;
console.log(my_country_more_populated);

let avg_population = 33;
let is_my_country_fewer = population < avg_population;
console.log(is_my_country_fewer);

let description;
description = country + " is in  " + continent + ", and its " + population + " million people speak " + language + ".";
console.log(description);


// LECTURE: Strings and Template Literals
// 1. Recreate the'description' variable from the last assignment, 
// this time using the template literal syntax

description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);

// LECTURE: Taking Decisions: if / else Statements

// If your country's population is greater than 33 million, log a string like this to the console: 
// 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' 
// (the 22 is the average of 33 minus the country's population).
// After checking the result, change the population temporarily to 13 and then to 130. See the different results, 
// and set the population back to the original.

if (population > avg_population) {
	console.log(`${country}'s population is above average`)
} else {
	console.log(`${country}'s population is ${avg_population - population} million below average`)
}

population = 13;
if (population > avg_population) {
	console.log(`${country}'s population is above average`)
} else {
	console.log(`${country}'s population is ${avg_population - population} million below average`)
}

population = 130;
if (population > avg_population) {
	console.log(`${country}'s population is above average`)
} else {
	console.log(`${country}'s population is ${avg_population - population} million below average`)
}

population = 10;