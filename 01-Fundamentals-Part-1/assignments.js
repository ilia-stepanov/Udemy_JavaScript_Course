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