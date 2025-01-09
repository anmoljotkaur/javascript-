let age = 25;
let year = 2002
console.log(age, year);

age = 26;
year = 2003
console.log(age, year);

const number = 2002;
console.log(number);


//strings
console.log('hello, world');

let email = 'anmol@123.ca';
console.log(email);

// string concatenation

let firstname = 'anmol';
let lastname = 'jot';
let fullname = firstname + '' + lastname;
console.log(fullname);

//getting chracters
console.log(fullname[0]);
console.log(fullname[2]);

//string length
console.log(fullname.length);

//string methods
console.log(fullname.toUpperCase());
let result = fullname.toUpperCase();
console.log(result);
console.log(result, fullname);
 let result1 = fullname.toLowerCase();
console.log(result1);

let index = email.indexOf('@');
console.log(index);

let email1 = 'anmoljotkaur@academic.rrc.ca';
let result12 = email1.lastIndexOf('n');
let resultt = email1.slice(0, 5)
console.log(result12);

console.log(resultt);

// let result3 = email.substr(4, 10);
// console.log(result3);

let result4 = email.replace('m', 'w');
console.log(result4);

let radius = 10;
const pi = 3.14;
console.log(radius, pi);

//math operators 
console.log(10/2);
let answer = radius % 3;

console.log(answer);

//order of operation - B I D M A S

let ques = 5 * (10-3)**2;
console.log(ques);

let likes = 10;
//likes ++;
//likes--;
//likes += 10;
//likes -= 5;
//likes *= 2;
likes /= 2;


console.log(likes);
console.log(5/'gghg');
const title = 'Best reads of 2019'
const author = 'Mario';
const likess = 30;

let outcomes = 'the blog called' + title + 'by' + author + 'has' + likess + 'likes';
console.log(outcomes);