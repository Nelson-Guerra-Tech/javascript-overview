// callbacks & forEach
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

// people.forEach(person => {
//   console.log(`hello ${person}`);
// });

people.forEach(logPerson);

const ul = document.querySelector('.people');
let html = ``;

people.forEach(((person) => {
    // create html template
    html += `<li style="color: purple">${person}</li> `;
}));

console.log(html);
ul.innerHTML = html;