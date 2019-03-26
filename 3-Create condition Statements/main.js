// Conditional statement

let x = 10;
let y = 50;

if (x == 10 || y < 20) {
    console.log('If')
}


// logical operator 
// != not equal to

|| // pipe symbol equal to OR



if (x == 10 && y < 10) {
    console.log('If') //true
}

&& // to make both statement to be true



// else
// else statement will run if the first condition is not met

if (x == 10 && y < 10) {
    console.log('If') //true
} else {
    console.log('Else');
}






// else if - if like to add more conditional statement


if (x == 10 && y < 10) {
    console.log('If') //true
} else if (x > 50) {
    console.log('Else if');
} else {
    console.log('Else');
}


// If the first condition is true it will ignore the rest of the statement. But if it is false it will continue to the next statement  if the second statement is true it will ignore the last statement. If the second statement is false then it will go to the else statement. Just to remember you can have many of the else if statement as you want




let gender = 'Male'
let age = 27;

if (gender == 'Male') {
    if (age >= 18) {
        console.log('You are A ' + gender + ' and above the age limit);
    } else {
        console.log('Sorry dude');
    }
} else if (gender == 'Female') {
    if (age >= 18) {
        console.log('You are a ' + gender + ' and above the age limit')
    } else {
        console.log("Sorry lady")
    }
} else {
    console.log('Sorry can\'t find your gender)
    }
