/* 1. In a try catch construction, wrap the code: console.log (a), let a = 3. 
And display an error - ‘let must be declared’ before use. */
try{
    console.log(a);
    let a = 3;   
   } catch(err){
    console.log("let must be declare");
  };

/* 2. When running 1/0, the error 'cannot be divided by zero' */
try{
  if(1/0){
    throw new Error("cannot be divided by zero");
  }
 } catch(err){
    console.log(err.message);
 };