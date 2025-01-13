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
// const calcArea = radius => 3.14 *radius **2;
// const area = calcArea(5);
// console.log(area);


//practice arrow function
// const greet = () => 'hello, world';
// const result = greet();
// console.log(result);


// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// console.log(bill([10, 15, 30], 0.2));


//converting the above into arrow function
// const bill = (products, tax)=>{
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// console.log(bill([10, 15, 30], 0.2));


//function is block of code you can invoke and run antyime..


// const name = 'shaun';

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// //methods 

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

//callbacks & FOREACH

// const myfunc = (callbackFunc) =>
// {
//     let value = 50;
//     callbackFunc(value);
// };
// myfunc(value => {
//     console.log(value);
// });  


// let people = ['mario', 'anmol', 'jot', 'ele', 'jotr']

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };

// people.forEach (logPerson);

//got a referenece to url
const ul = document.querySelector('.people');

const people = ['Mario', 'Luigi', 'Anmol', 'sahun',];

let html = ``;

people.forEach(function(person){
    //create html template
    html += `<li style="color: purple">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;