//function declaration

// function greet(){
//     console.log('hello there');
// }

//calling function and invoke the function 
//greet();
//function expression
// const speak = function(){
//     console.log('good day!')

// };
// speak();
// speak();
// //order does not matter in function we can call the function at any where.
//in the case of expression it does not run before the method definition.


//arguments & parameters
const speak = function(name = 'anmol', time = 'night'){  //we can give default values to the arguments at the time 
    // of method creation
    console.log(`good ${time} ${name}`)
    
    };
speak(); // it can choose default values
speak('mario' , 'morning'); // we gave values and overwrite the default values...

