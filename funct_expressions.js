let age = prompt("What is your age?", 18);
let access;

if (age<18){
    access = function (){
        alert("DENIED! STILL YOUNG.")
        };
    }
else{
    access = function(){
        alert("ALLOWED TO ENTER!")
    };
}

access();



//EXAMPLE 2

let choice = prompt("Enter your favorite choice");
let feedback;

if (choice = "yes"){
    feedback = function(){
        alert("Congratulations! Karibu.")
    };
}
else if(choice = "no"){
    feedback = function(){
        alert("Sorry! Try next time.")
    };
}
else {
    feedback = function(){
        alert("Invalid choice!")
    }

}
feedback();

let num = prompt("What is your age?", 18);

let welcome = (num < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now