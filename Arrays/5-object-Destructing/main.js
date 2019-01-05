
const person = {

    name: 'Ali',
    age: 4,
    gender: 'Male'
};

// let { name, age gender = 'Unknown' } = person;

// console.log(name)
// console.log(age)
// console.log(gender)


// You can also put this into a function

function printDetails({ name, age }) {
    console.log(`The name is ${name} and they are ${age}`)
}


printDetails(person)