/* In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ 
before use. When running 1/0, the error 'cannot be divided by zero' */
try{
    console.log(a);
    let a = 3;   
   } catch(err){
    console.log("let must be declare");
    if (1/0) {
        console.log("cannot be divided by zero");
      }
};