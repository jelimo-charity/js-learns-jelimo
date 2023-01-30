// an object is not iterable
//e.g.
/*const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) {
    console.log(prop)
}
*/

//Arrays are iterable

const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}
//BUILT-IN METHODS
  // >> object.keys()
  // >> object.values()
  // >> object.entries()

 // 1. object.keys() 
 
 const car ={
    speed: 300,
    color: 'gray',
 }
 console.log(Object.keys(car));

 // 2. object.values()

 const car2 = {
    speed: 400,
    color: 'blue',
 }
 console.log(Object.values(car2));

 // 3. object.entries()

 const car3 = {
    speed: 320,
    color: 'red',
 }
 console.log(Object.entries(car3));

//... how to access an object's member using the brackets notation. 
 function testBracketsDynamicAccess() {
    var dynamicKey = Math.random() > 0.5 ? "speed" : "color";
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();