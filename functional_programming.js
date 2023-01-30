/* FUNCTIONAL PROGRAMMING (FP);

When writing FP code, we keep data and functionality separate and pass
 data into functions only when we want something computed.

  
git
*/
var currenyOne=200;
var currenyTw0=0;
var ExchangeRate=1.2;

function convertCurrency(amount,rate){
    return(amount*rate)
}
currenyTw0=convertCurrency(currenyOne,ExchangeRate);
console.log(currenyTw0);

//EXAMPLE 2
function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);
console.log(total);

// EXAMPLE 3

function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance);


function sumAge(p1,p2) {
    return p1 + p2;
}
var Jane = 21;
var Joe = 20;

var sum = sumAge(Jane,Joe);
console.log(sum);


function getPrice(price,number){
    return price*number;
}
var cost = 150;
var quantity = 20;

var totalCost = getPrice(cost,quantity);
console.log(totalCost)


function subs(output,input){
    return output-input;
}
var en1 = 3890;
var en2 = 6743;

var diff = subs(en1,en2);
console.log(diff)
