//control flow

//for loops
// for(let i = 0; i < 5; i++){
// console.log('in loop: ',i);
// }
// console.log('loop finished');

const names = ['shaun', 'mario', 'luigui'];

for(let i = 0; i < names.length; i++){
// console.log(names[i]); // give the name of the diffreent array elements
  let html = `<div>${names[i]}</div>`
  console.log(html);   
}