/*
     ARRAY METHODS
     1. forEach
     2. filter
     3. map

*/
//  The forEach() method
//  Arrays in JavaScript come with a handy method that allows you to loop over each of their members.
//the forEach() method accepts a function that will work on each array item. That function's first parameter is the
// current array item itself, and the second (optional) parameter is the index.


const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

const vegetables = [ 'kales','spinach','cabbages','terere','managu'];
function listGreens(vegetable,index){
    console.log(`${index}. ${vegetable}`)
}
vegetables.forEach(listGreens);

const colors = ['yellow','whitesmoke','orange','brown','purple','blue','white','red','green','pink','black'];
function pasteColors(color,index){
    console.log(`${index}. ${color}`)
}
colors.forEach(pasteColors);

const clothing = ['socks','dresses','hoodies','jackets','sweaters','shirts'];
function listItems(cloth,index) {
    console.log(`${index}. ${cloth}`);
}
clothing.forEach(listItems);


// FILTER METHOD

// the filter() method. It filters your arrays based on a specific test.
// Those array items that pass the test are returned.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

//MAP METHOD

/*
This method is used to map each array item over to another array's item,
 based on whatever work is performed inside the function that is passed-in to the map as a parameter.


*/
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
console.log(newArr);

