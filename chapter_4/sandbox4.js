//objects in javascript have properties and things they can do (methods)
//for example: blog object properties (title, content, author)
//methods (publish, unpublish, delete)

// const name = 'mario';
// name.toUpperCase();
// console.log(user);
// console.log(user.name);

// user.age = 24;
// console.log(user.age);

// console.log(user['name']);
// user['name'] = 'ANU';
// console.log(user.name);

// let user = {
//     name: 'anmol',
//     age: 23,
//     email: 'anmol@123',
//     location: 'winnipeg',
//     blogs: ['why mac and cheese rules', '10 things to make with mermite'],
//     login: function(){
//         console.log('the user logged in');
//     },
//     logout: function(){
//         console.log('the user logged out');
//     },
//     logBlogs: function(){
        
//         //console.log(this.blogs);  //user objects
//         this.blogs.forEach(blog =>{
//             console.log(blog);
//         })

//     }

// };
// user.logBlogs();
// console.log(this)
// // user.login();
// // user.logout();

// // const name = 'mario';
// // name.toUpperCase();
// // console.log(user);
// // console.log(user.name);

// // user.age = 24;
// // console.log(user.age);

// // console.log(user['name']);
// // user['name'] = 'ANU';
// // console.log(user.name);

//math object
console.log(Math);
console.log(Math.PI);

const area = 7.7;
console.log(Math.round(area)); //round of to the nearest integer
console.log(Math.floor(area)); //round of to the less number 7
//it does convert 7.1 == 8
console.log(Math.ceil(area));

console.log(Math.trunc(area));

//random numbers
const random = Math.random();
console.log(random)  //generate random numbers
console.log(Math.round(random*100)); //generate randome number between 1 10 100


//premitive types values are stored in stacks(string,numbers, boolean, )
//reference types are stored in heap they have more memory...(objects all types including dates, array



//interecting with browser
//DOM : DocumnetObject model
//add , change and delete content
//make a cool pop-up effect in the web page
   
// const para = document.querySelector('p');  //refernce to this paragraph tag
// //console.log(para);


// const para1 = document.querySelector('.error');  //refernce to this error pars tag
// console.log(para1);

// const paras = dacumnet.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(paras)
// }

const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error')
console.log(paras);
console.log(errors);


// console.log(paras[0]);
  //queryselector is for getting single element 
  //gueryselectorAll to get several elements...