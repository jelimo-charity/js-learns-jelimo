/*try {
    adddlert("Welcome guest!");
  }
  catch(err) {
    document.getElementById("demo").innerHTML = err.message;
  }


  //SYNTAX

  try {
   // Block of code to try
  }
  catch(err) {
   // Block of code to handle errors
  }
*/

  try{
    console.log("This code will run");
    charity;
    console.log('End of try never reached')
  }
  catch(erro) {
    console.log("Error message:" + " " + erro )

  }
  finally{ 
    console.log("Code here will always run and execution continues")
  }