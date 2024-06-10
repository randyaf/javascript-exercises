const findTheOldest = function(people) {
    return people.map(person => {
        let age = 0;
        if (person.yearOfDeath === undefined) {
            age = (new Date().getFullYear()) - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        return {
            name: person.name,
            age,
        }
    }).reduce((oldest, person) => {
        return oldest.age > person.age ? oldest: person;
    });
};

const people = [
    {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]


// Do not edit below this line
module.exports = findTheOldest;
