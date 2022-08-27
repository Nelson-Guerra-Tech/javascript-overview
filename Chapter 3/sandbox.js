// for loops

// this is a code block, a section of code that does something
// to begin we create a variable i and set it to zero
// then we have a condition, if its true, we execute the code.
// then we add one to the initial count and keep executing the code until i reaches 5
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// for(let i = 0; i < 5; i++){
//   console.log('loop: ', i);
// }

const names = ['shaun', 'mario', 'luigi'];

for (let i = 0; i < names.length; i++) {
    // console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}


// while loops
let i = 0;
while (i <= 5) {
    console.log('in loop: ', i);
    i++;
}

let u = 0;
while (u < names.length) {
    console.log(names[u]);
    u++;
}

// do-while loop
let o = 0;
do {
    console.log('in loop: ', o);
    o++;
} while (o <= 5)

let p = 0;
do {
    console.log(names[p]);
    p++;
} while (p < names.length)

// if statements
let age = 25;
if (age > 20) {
    console.log(names.length, 'You are over 20 years old.');
}

// else and else-if
let name = 'Kal-El';
if (name == 'Kal-El') {
    console.log('You are the last son of Krypton.');
} else if (name == 'Lois Lane') {
    console.log("You are Superman's only love.");
} else {
    console.log('You are not the last son of Krypton.');
}

// logical operators
//  || this is the or operation
//  && this is the AND operation
//  != this is the NOT operation

// break and continue
const scores = [50, 25, 20, 30, 100, 25, 10, 0];

// this for loop breaks out of the loop once a certain condition is met
for (let i = 0; i < scores.length; i++) {
    console.log('You score: ', scores[i]);

    if (scores[i] === 0) {
        continue;
    }

    if (scores[i] === 100) {
        console.log('Congrats, you got the top score!');
        break;
    }
}


// switch statements
const grade = 'A';

switch (grade) {
    case 'A':
        console.log("You are on the president's list!");
        break;
    case 'B':
        console.log("You got a B!");
        break;
    case 'C':
        console.log("You need to work on your grades.");
        break;
    default:
        console.log('You failed the class.');
        break;
}