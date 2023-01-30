/* FUNCTIONS >>>> Are 

How to declare/build a function;
   use the keyword function
   the keyword is followed by a function name then paranthesis()
   the paranthesis() have parameters separated by commas
   code inside the function will execute when something calls or invokes it
   
   FUNCTION INVOCATION;
       1. When an event occurs e.g user clicks a button
       2. When invoked/called from Js code
       3. Automatically/self-invoked

    FUNCTION RETURN;
        When javascript reaches a return statement it stops executing
*/
    //         function funtion_name(){
                //code here
    //         }
function greet(firstName){
    console.log('Hello'+  ' ' + firstName )
}
greet('James');

function adds(){
    a=2;
    b=3;
    c=a+b;

    console.log(c)
}

adds();

function sum(a,b){
    a=9;
    b=2;
    c=a+b;

    console.log(c)
 
}
sum();
/*function sub(c,d){
    c=3;
    d=9;
    e=c*d;
}
sub();
*/

          