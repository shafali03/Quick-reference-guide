
/*

What is bind?

1. Bind an object to a function
2. Reference it using 'this

 */


let c1 = {

    x: 5,
    y: 10

};

let c2 = {

    x: 75,
    y: 234

};

function printCoordinates() {

    console.log(this.x + ', ' + this.y);
}


let c1_func = printCoordinates.bind(c1);

let c2_func = printCoordinates.bind(c2);


