let year = prompt("When did kenya receive independence?", 1964);
if(year ==1964) {
    alert("You're Right!")
}
else{
    alert("Nope, this is not the year!")
}



//else if

let myCompany = prompt("Which year was the company developed?", 1890);
if(myCompany<2000){
    alert("too early darling!")
}
else if(myCompany>2023){
    alert("nope,too late baby!")
}
else if(myCompany>2018 & myCompany<2023) {
    alert("you're almost getting it right darling!")

}
else if(myCompany==2022){
    alert("YES!! YOU GOT IT RIGHT.")
}
else{
    alert("try again")
}

//example3

let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);
