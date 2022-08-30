// Object Literals
let people = {
    name: 'Mario',
    job: 'Plumber',
    working: function() {
        console.log(this.name + ' is working!');
    },
    isMarried: true,
    spouse: {
        name: 'Peach',
        job: 'Stay at home mom.',
    }
}

console.log(people);
console.log('Mario is married: ' + people.isMarried);

const blogs = [
    { title: 'Superman Volume 1' },
    { title: 'Superman Returns' }
]

blogs.map((blog, index) => {
    index = index + 1;
    console.log(index + ': ' + blog.title);
})

// Math objects
