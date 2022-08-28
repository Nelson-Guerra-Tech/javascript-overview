// functions
//! function declarations 
function greet() {
    console.log('This is a function declaration!');
}
// invoking or calling the functions
greet();

//! function expressions
const greeting = function() {
        console.log('This is a function expression.');
    }
    // invoking the function
greeting();

//! arguments and parameters
// the names are interchangeable
const speak = function(name) {
        console.log(`${name} is the best dog in the world!`);
    }
    // invoking the function
speak('Luna');

// ! returning values
const calcArea = function(radius) {
    // to log the value of the return, you have to store the function within another variable
    return 3.14 * radius ** 2;
};
// here we store the function within another value to return a value
const area = calcArea(5);
console.log(area);