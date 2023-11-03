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
// 2. Log the types of'isIsland','population','country'and'language' to the console

let isIsland;
let language;

isIsland = false;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


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


// Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2.
// Execute the operations to check if you were right.


console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // False
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143


// Here's the corrected text with spaces between the words where necessary:

// LECTURE: Equality Operators: == vs. ===

// 1. Declare a variable 'numNeighbours' based on a prompt input like this: 
// prompt('How many neighbour countries does your country have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1.
// 4. Use an else block to log 'No borders' (this block will be executed 
// when 'numNeighbours' is 0 or any other value).
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of 'numNeighbours'. 
// Notice what happens when there is exactly 1 border! Why is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1.
// 8. Reflect on why we should use the === operator and type conversion in this situation.

let numNeighbours = prompt('How many neighbour countries does your country have?');

if (numNeighbours == 1) {
	console.log("Only 1 border!")
} else if (numNeighbours > 1) {
	console.log("More than 1 border")
} else {
	console.log("No borders")
}
// Only 1 border!

if (numNeighbours === 1) {
	console.log("Only 1 border!")
} else if (numNeighbours > 1) {
	console.log("More than 1 border")
} else {
	console.log("No borders")
}
// No borders

let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours == 1) {
	console.log("Only 1 border!")
} else if (numNeighbours > 1) {
	console.log("More than 1 border")
} else {
	console.log("No borders")
}
// Only 1 border!

if (numNeighbours === 1) {
	console.log("Only 1 border!")
} else if (numNeighbours > 1) {
	console.log("More than 1 border")
} else {
	console.log("No borders")
}
// Only 1 border!


// == supports type conversion, === doesnt



// LECTURE: Logical Operators
// 1. Comment out the previous codeso the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. 
// She wants to live in a country that speaks english, has less than 50 million people and is not an island.
// 3. Write an ifstatement to help Sarah figure out if your country is right for her. 
// You will need to write a condition that accounts for all of Sarah's criteria. 
// Take your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. 
// If not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. Sogo back and temporarily change some variables in order to make the condition true (unless you live in Canada :D)

if (language == 'english' && is_island == false && population < 50) {
    console.log("You should live in Portugal :)");
} else {
   console.log("Portugal does not meet your criteria :("); 
}



// LECTURE: The switch Statement
// 1. Use a switchstatement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all othersimply log 'Great language too :D'

switch (language) {
    case "chinese":
    case "mandarin": 
        console.log('MOST number of native speakers!');
        break;
    case "spanish":
        console.log('2nd place in number of native speakers');
        break;
    case "english":
        console.log('3rd place');
        break;
    case "hindi":
        console.log('Number 4');
        break;
    case 'arabic':
        console.log("5th most spoken language");
        break;
    default:
        console.log('Great language too :D');        
}


// LECTURE: The Conditional (Ternary) Operator
// 1. If your country's population is greater than 33 million, use the ternary operator to log a string like this 
// to the console: 'Portugal's population is above average'. 
// Otherwise, simply log 'Portugal's population is below average'. 
// Notice how onlyone word changes between these two sentences!
// 2. After checking the result, change the population temporarily to 13 and then to 130. 
// See the different results, and set the population back to original

console.log(`${country}'s population is ${population > 33 ? "above" : "below"} average`);




// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters: 'country', 
// 'population', and 'capitalCity'. Based on this input, the function returns a string with 
// this format: 'Finland has 6 million people and its capital city is Helsinki.'
// 2. Call this function 3 times, with input data for 3 different countries. 
// Store the returned values in 3 different variables, and log them to the console.

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

countryProfile1 = describeCountry('UAE', 10, 'Abu Dhabi');
countryProfile2 = describeCountry('Russia', 145, 'Moscow');
countryProfile3 = describeCountry('Finland', 6, 'Helsinki');


// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration called 
// 'percentageOfWorld1' which receives a 'population' value, and returns the percentage 
// of the world population that the given population represents. For example, 
// China has 1441 million people, so it's about 18.2% of the world population.
// 2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100.
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
// store the results into variables, and log them to the console.
// 4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', 
// and also call it with 3 country populations (can be the same populations).

function percentageOfWorld1(population) {
    let worldPopulation = 7900;
    return population / worldPopulation * 100;
}

let percentageOfWorld2 = function(population) {
    let worldPopulation = 7900;
    return population / worldPopulation * 100;
}


// LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'

let worldPopulation = 7900;
let percentageOfWorld3 = (population, worldPopulation) => population / worldPopulation * 100;

// LECTURE: Functions Calling Other Functions
// 1. Create a function called 'describePopulation'. Use the function type you like the most. 
// This function takes in two arguments: 'country' and 'population', and returns a string like this: 
// 'China has 1441 million people, which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' can call the 'percentageOfWorld1' 
// function you created earlier.
// 3. Call 'describePopulation' with data for 3 countries of your choice.

function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`
}


// LECTURE: Introduction to Arrays
// 1. Create an array containing 4 population values of 4 countries of your choice. 
// You may use the values you have been using previously. Store this array into a variable called 'populations'.
// 2. Log to the console whether the array has 4 elements or not (true or false).
// 3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. 
// Use the 'percentageOfWorld1' function that you created earlier to compute the 4 percentage values.

let populations = [10, 145, 400, 1500];
console.log(populations.length);

let percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);


// LECTURE: Basic Array Operations (Methods)

// 1. Create an array containing all the neighboring countries of a country of your choice. 
// Choose a country which has at least 2 or 3 neighbors. Store the array into a variable called 'neighbours'.
// 2. At some point, a new country called 'Utopia' is created in the neighborhood of your selected country. 
// So, add it to the end of the 'neighbours' array.
// 3. Unfortunately, after some time, the new country is dissolved. So, remove it from the end of the array.
// 4. If the 'neighbours' array does not include the country 'Germany', log to the console: 'Probably not a central European country :D'.
// 5. Change the name of one of your neighboring countries. To do that, find the index of the country in the 'neighbours' array, 
// and then use that index to change the array at that index position. 
// For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

let neighbours = ['Oman', 'Saudi Arabia', 'Qatar'];
neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.includes('Germany') == false) {
    console.log('Probably not a central European country :D');
}

neighbours[1] = 'Kingdom of Saudi Arabia';
console.log(neighbours);

// LECTURE: Introduction to Objects
// 1. Create an object called 'myCountry' for a country of your choice, 
// containing properties 'country', 'capital', 'language', 'population', and 'neighbours' 
// (an array like we used in previous assignments).

let myCountry = {country: 'UAE', capital: 'Abu Dhabi', language: 'Arabic', neighbours: ['Oman', 'Saudi Arabia', 'Qatar']}

// FINISH

// LECTURE: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the console: 
// 'Finland has 6 million Finnish-speaking people, 3 neighboring countries, and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then decrease 
// it by two million using bracket notation.




// FINISH

// LECTURE: Object Methods
// 1. Add a method called 'describe' to the 'myCountry' object. 
// This method will log a string to the console, similar to the string logged in the previous assignment, 
// but this time using the 'this' keyword.
// 2. Call the 'describe' method.
// 3. Add a method called 'checkIsland' to the 'myCountry' object. 
// This method will set a new property on the object, called 'isIsland'. 
// 'isIsland' will be true if there are no neighboring countries, and false if there are. Use the ternary operator to set the property.
