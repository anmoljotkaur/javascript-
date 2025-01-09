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

let result3 = email.substr(4, 10);
console.log(result3);

