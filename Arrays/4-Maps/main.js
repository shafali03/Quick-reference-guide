let zoo = new Map();

zoo.set('Zebra', 5)
zoo.set('Monkey', 15)
zoo.set('Gorilla', 2)

let zebraCount = zoo.get('Zebra');


console.log(zebraCount)

for (let [key, value] of zoo) {
    console.log(key + ':' + value)
}