/* OBJECT ORIENTED PROGRAMMING (OOP)
 we group data and functionality as properties and methods inside objects.


 OOP helps us model real-life objects. It works best when the grouping of 
 properties and data in an object makes logical sense - meaning, the
  properties and methods "belong together".

  To summarize this point, we can say that the Functional Programming 
  paradigm works by keeping the data and functionality separate. 
  It's counterpart, OOP, works by keeping the data and functionality
   grouped in meaningful objects.


   >>BENEFITS OF OOP
         >Allows you to write modular code
         >Makes your code more flexible
         >Allows you to reuse code




*/

var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

// EXAMPLE OF A F.P 

var shoes=100;
var statetax=1.2;

function totalPrice(shoes,statetax){
    return shoes*statetax;
}
var topay=totalPrice(shoes,statetax);
console.log(topay);

//OOP EXAMPLE OF IT
 var sells={
    shoes: 100,
    tax: 1.2,
    pay: function(shoes,tax) {
        var totalpay= sells.shoes * sells.tax;
        console.log(totalpay);
    }
 }


 /*     
   >>PRINCIPLES OF OOP
        >Encapsulation
        >Polymorphism
        >Abstraction
        >Inheritance

    

    */

/* Objects exist in hierarchal structure; 
        Meaning that the original base or super class for everything is the Object class, 
        all objects derive from this class. This allows us to utilize the Object.create() method. 
        to create or instansiate objects of our classes. 

 */
// FOR EXAMPLE:


class Animal { /* ...class code here... */ }

var myDog = Object.create(Animal)

console.log (Animal)

// Another way of creating objects from classes is using new keyword i.e.

class Car{/*...code here...*/}

var myToyota = new Car()

console.log(Car)