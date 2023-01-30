/*  An example of inheritance in real world;
There is a base class of "Animal".

There is another class, a sub-class inheriting from "Animal", and the name of this class is "Bird".

Next, there is another class, inheriting from "Bird", and this class is "Eagle".

To setup the inheritance relation between classes in JavaScript, 
I can use the extends keyword, as in class B extends A.

*/
//EXAMPLE:

class Animal{/*...code here...*/}
class Bird extends Animal {/*...code here...*/}
class Eagle extends Bird {/*...code here...*/}


class Student{}
class Course extends Student{}
class Units extends Course{}