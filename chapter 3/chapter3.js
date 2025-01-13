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
// const speak = function(name = 'anmol', time = 'night'){  //we can give default values to the arguments at the time 
//     // of method creation
//     console.log(`good ${time} ${name}`)
    
//     };
// speak(); // it can choose default values
// speak('mario' , 'morning'); // we gave values and overwrite the default values...


//returning values

// const calcArea = function(radius){
//     let area = 3.14 * radius**2; // return 3.14 *radius**2
//     return area;
// }
// const area = calcArea(5);
// console.log(area);

// const calcVol = calcArea(5);
// console.log('area is :', area)

//arrow function
// // const calcArea = (radius) => {   //we can take away the parathensis but in case of more than 1 parameter than we need to use that
//     return 3.14 * radius**2;
// }

//we can write above like that by removing the curley braces because it is really simple.
const calcArea = radius => 3.14 *radius **2;
const area = calcArea(5);
console.log(area);
