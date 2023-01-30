/*



*/

//join (concatinate) arrays using spread operator

const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries]
console.log(fruitsAndBerries); 

const color1 = ['red','orange']
const color2 = ['black','brown']
const color3 = [...color1, ...color2]
console.log(color3);

//join objects

const fast = { speed: 200}
const car = { color: 'black-white'}
const fastCar = {...fast, ...car}
console.log(fastCar)

//to convert a string to array of items
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars);

//add items to an array without using push() method
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);