let numbers = [1, 2, 3, 4, 5, 6];

// n ref numbers
let evenNumber = numbers.filter(function (n) {
    // let evenNumber = number.filter(n => n % 2 == 0);


    return n % 2 == 0; // even number

    // return !(n % 2 == 0); // odd number

})


console.log(evenNumber) 
