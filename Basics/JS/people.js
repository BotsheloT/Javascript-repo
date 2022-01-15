let people = ['Jerry', 'Beth', 'Morty', 'Summer'];

people.forEach(person => {
    console.log(person);
});

const printStuff = name => console.log(name);
    

people.forEach(printStuff );