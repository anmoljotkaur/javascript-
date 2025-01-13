//control flow

//for loops
// for(let i = 0; i < 5; i++){
// console.log('in loop: ',i);
// }
// console.log('loop finished');

const names = ['shaun', 'mario', 'luigui'];

// for(let i = 0; i < names.length; i++){
// // console.log(names[i]); // give the name of the diffreent array elements
//   let html = `<div>${names[i]}</div>`
//   console.log(html);   
// }

//while loops
// let i = 0;

// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }   

//do while loops
// let i = 3;
// do{
//     console.log('valu of 1 is :', i);
//     i++;
// }while(i < 5);

//if statements
// const age = 25;
// if (age >20){
//    console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'anmol', 'chu-li', 'yoshi', 'four'];
// if(ninjas.length > 4){
//     console.log("that is a lot of ninjas");
// }

// const password = 'password';
// if(password.length >= 8){
//     console.log('that password is long enough')
// }

//
// const password = 'password';

// if(password.length >= 12){
//     console.log('that password is mighty strong');
// }else if (password.length >=8){
//     console.log('password is not long enough') 
// }else{
// console.log('password is not long enough')
// }


//logical operator
// const password = 'p@ssword123445';

// if(password.length >= 12 && password.includes('@')){
//     console.log('that password is mighty strong');
// }else if (password.length >=8){
//     console.log('password is not long enough');
// }else{
// console.log('password is not long enough');
// }

//logical NOT(!)

// let user = false;

// if (!user){
//   console.log('you must be logged in to continue')  
// }
// console.log(!true);
// console.log(!false);


//break and continue

// const scores =[ 50, 25, 0, 30, 100, 20, 10]
// for(let i = 0; i < scores.length; i++){
//      if(scores[i] === 0){
//      continue;
//     }
//     console.log('your score: ', scores[i]);
//     if(scores[i] === 100){
//         console.log('congrates, you got the top scores');
//         break;
//     }
// }

//switch statements
// const grade = 'P'
// switch (grade){
//     case 'A':
//         console.log('you got an A!  ');
//         break;
//     case 'B':
//         console.log('you got an B!  ');
//         break;
//     case 'C':
//         console.log('you got an C!  ');
//         break;
//     case 'D':
//         console.log('you got an D!  ');
//         break;
//     default :
//         console.log('not a valid grade');


//VARIBALES & block scope
let age = 30;
if(true){
   let age = 40;
   let name = 'shaun';
   console.log('inside 1st code block'  , age, name );

   if(true){
    console.log('inside side the code block:', age);
   }
}
console.log('outside the code block :' , age);



