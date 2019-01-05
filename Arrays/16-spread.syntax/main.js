
//Function argument


const al = [10, 20, 30];

function sum(a, b, c) {

    return a + b + c;
}

const result = sum(...al);
console.log(result)


// While creating an array

const a2 = [5, 6, ...al, 'dom']
console.log(a2)


// copy an array 

const a2Copy = [...a2]
a2Copy.push(400)
console.log(a2Copy)



// Concatenate 

let a4 = [25, 35, 34, 65];

a4.concat(...a4, ...a2copy)

console.log(a4)


//! The Spread Syntax allows you to 'spread' out an iterable object in separate elements, giving you as the programmer a lot of efficient ways to use these iterables (most commonly Arrays).



//object


const dom = {
    red: 'smartphone',
    green: 10
}

const dom2 = { ...dom };