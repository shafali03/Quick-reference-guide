
const people = [

    {
        name: 'Ali',
        occupation: 'Software Developer'
    },
    {
        name: 'Eric',
        occupation: 'Dentist'
    },
    {
        name: 'Shaz',
        occupation: 'Teacher'

    }
];


function isDentist(person) {
    return person.occupation === 'Dentist'
}


console.log(people.find(isDentist).name)

//! The find() method in Javascript is used on arrays to find the first element in the array that meets a condition which you pass in through a function.
