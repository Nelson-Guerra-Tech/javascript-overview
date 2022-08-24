// strings
console.log('hello world')

let email = 'nelsonguerra.tech@outlook.com'
console.log(email);

// string concatenation
// fance word for joining things together
let firstName = 'Nelson';
let lastName = 'Guerra';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);

// string length
console.log(fullName.length)

// string methods
// function is a snippet of code that does something
// a method is a piece of code that is attached to an element.
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
let result = fullName.toLowerCase();
console.log(result);

// passing a value into a method is called an argument
let index = email.indexOf('@');
console.log(index);

//! ---------------------------------------------------------------------------------------


// common string methods
let emails = 'mario.tech@nintendo.com';
// lastIndexOf
let results = emails.lastIndexOf('n');
console.log(results);

// slice
// first argument is where we want to start to slice and the second argument is where we want to stop the slice
let results2 = emails.slice(0, 10);
console.log(results2);

// substring
// start postion means to start and the second is how many characters we want to go along
let results3 = emails.substring(4, 10);
console.log(results3);

// replace
// this simply replaces a string with another, the first string is the string you want to replace and the second argument is the actually string to change to
let results4 = emails.replace('m', 'w');
console.log(results4);




//! ---------------------------------------------------------------------------------------
// numbers

let radius = 10;
let pi = 3.14;

// console.log(radius, pi);

// math operators - +, -, *, /, **, %

// console.log(10 / 2);

// the % is the remainder
// let result = radius % 3;
// let result = pi * radius**2;

// order of operation - B I D M A S

// let result = 5 * (10 - 3)**2;

// console.log(result);

// shorthands
let likes = 10;

// likes = likes + 1;
// ++ adds one to the value
// likes++;

// likes = likes + 10;
// likes += 10;

// likes *= 2;
// likes /= 2;

// console.log(likes);

// NaN - not a number

// console.log(5 / 'hello');
// console.log(5 * 'hello');

let result5 = 'the blog has ' + likes + ' likes.';
console.log(result5);


//! ---------------------------------------------------------------------------------------
// template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes2 = 30;

// concatenation way

// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// template string way

// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// creating html templates
let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes2} likes</span>
`;

console.log(html);

//! ---------------------------------------------------------------------------------------
// arrays

let ninjas = ['shaun', 'ryu', 'luigi'];
console.log(ninjas);

// getting one item out of the array
// getting the third element in the array
console.log(ninjas[2]);

// overriding an element in the array
ninjas[2] = 'mario';
console.log(ninjas[2]);

// you can store different data into an array
let ages = [24, 28, 30];
console.log(ages[2]);

// you can store any data together as well
let random = ['shaun', 'crystal', 30, 28];
console.log(random);

// array methods
// the join method literally joins the elements in the array with a string
let result6 = ninjas.join(', ');
console.log(result6);

// indexOf
let result7 = random.indexOf('crystal')
console.log(result7);

// concat
// this adds a new array and combines it with an existing array
let result8 = ninjas.concat(['ken', 'kal-el']);
console.log(result8);

// push method
// this pushes a new value the the existing array
// this method changes the original array or value
let result9 = ninjas.push('ken');
console.log(result9);
console.log(ninjas);

//! ---------------------------------------------------------------------------------------
// booleans & comparisons
// console.log(true, false, 'true', 'false');

// methods can return booleans
// let email = 'luigi@thenetninja.co.uk';
// let names = ['mario', 'luigi', 'toad'];

// let result = email.includes('@');
// let result = names.includes('luigi');

// console.log(result);

// comparison operators
let age = 25;

console.log(age == 25);
console.log(age == 30);
// not
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);

let name = 'shaun';

console.log(name == 'shaun');
console.log(name == 'Shaun');
console.log(name > 'crystal');
console.log(name > 'Shaun');
console.log(name > 'Crystal');