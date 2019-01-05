let numbers = [1, 2, 3, 4, 5];

let total = numbers.reduce(function (accumulator, n) {

    return accumulator + n
})

console.log(total) //15
