// USED TO EXECUTE REPEATED BLOCKS OF CODE UNTIL A CERTAIN CONDITION IS MET
// 1. FOR LOOP 
// 2. WHILE LOOP
// 3. NESTED LOOP

/* 1. WHILE LOOP
       
             var i=0; >>>   set the value
             i-3;     >>>   specify the condition
             i++/i--  >>>   increment/decrement the counter
*/
    /*    var i=1;

        while(i<5) {
            console.log(i);
            i=i+1;
        }    

       var age=20;
        while(age>0){
            console.log(age)
            age=age-1;

        }
/*  2. FOR LOOP
            
            var i=0; >>>   set the value  
            i-3;     >>>   specify the condition
            i++/i--  >>>   increment/decrement the counter
*//*
        
        for(var i=0; i<=20; i++){
            console.log(i)

       }
        console.log('HAPPY NEW YEAR!!')        */

/*  3. NESTED LOOPS >>>> used when you need automated repetition of code
        
            var i=0; >>>   set the value
             i-3;     >>>   specify the condition
             i++/i--  >>>   increment/decrement the counter
*/
    /*    for (var year=2020; year<=2025; year++ ){
            console.log(year)
            for (var month=5; month<=12; month++){
                console.log('----' +month)
            }
        }

        for( var student_number=1; student_number<=10; student_number++){
            console.log(student_number)
            for(var mark_range=50; mark_range<=70;mark_range++){
                console.log('marks range ----'+ mark_range)
            }
        }  */


let age = 7;
while(age){
    alert(age);
    age--;
}

let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( i );
  i--;
}
